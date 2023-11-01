import React, { lazy, Suspense, useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import TabMenu from "./components/tabMenu";
import tabsDataExample from "./tabs.json";

const DummyTableComponent = lazy(() => import("./components/dummyTable.js"));
const DummyChartComponent = lazy(() => import("./components/dummyChart.js"));
const DummyListComponent = lazy(() => import("./components/dummyList.js"));
const NotFoundComponent = lazy(() => import("./components/notFoundComponent"));

const App = () => {
  const [tabsData, setTabsData] = useState([]);
  const [isFetchSucces, setIsFetchSucces] = useState(true);

  useEffect(() => {
    fetch("https://example.com", {
      method: "HEAD",
      mode: "no-cors",
    })
      .then((response) => response.json())
      .then((data) => setTabsData(data))
      .catch(() => {
        setTabsData(tabsDataExample);
        setIsFetchSucces(false);
      });
  }, []);

  return (
    <Router>
      <div>
        <h1>Dummy CMS</h1>
        <TabMenu tabs={tabsData} />
        <Routes>
          {isFetchSucces && tabsData && tabsData.length > 0 ? (
            tabsData.map((tab) => (
              <Route
                key={tab.id}
                path={tab.path}
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <TabContentLoader />
                  </Suspense>
                }
              />
            ))
          ) : (
            <>
              <Route
                path={tabsData[0]?.path}
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <DummyTableComponent />
                  </Suspense>
                }
              />
              <Route
                path={tabsData[1]?.path}
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <DummyChartComponent />
                  </Suspense>
                }
              />
              <Route
                path={tabsData[2]?.path}
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <DummyListComponent />
                  </Suspense>
                }
              />
              <Route
                path="/"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <DummyTableComponent />
                  </Suspense>
                }
              />
              <Route path="*" element={<NotFoundComponent />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
