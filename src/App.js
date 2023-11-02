import React, { lazy, Suspense, useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import TabMenu from "./components/tabMenu";
import tabsDataExample from "./tabs.json";

const NotFoundComponent = lazy(() => import("./components/notFoundComponent"));

const App = () => {
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    fetch("https://example.com", {
      method: "HEAD",
      mode: "no-cors",
    })
      .then((response) => response.json())
      .then((data) => setTabsData(data))
      .catch(() => {
        setTabsData(tabsDataExample);
      });
  }, []);
  return (
    <Router>
      <div>
        <h1>Dummy CMS</h1>
        <TabMenu tabs={tabsData} />
        <Routes>
          {tabsData?.length > 0 ? (
            tabsData.map((tab) => {
              const DynamicComponent = lazy(() => import(`${tab.path}`));

              return (
                <Route
                  key={tab.id}
                  path={`/${tab.id}`}
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <DynamicComponent tab={tab} />
                    </Suspense>
                  }
                />
              );
            })
          ) : (
            <Route path="*" element={<NotFoundComponent />} />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
