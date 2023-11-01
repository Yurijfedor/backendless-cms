import React, { useState } from "react";

const TabContentLoader = ({ currentTab, tabId, loadTabContent }) => {
  const [tabContent, setTabContent] = useState(null);

  useEffect(() => {
    if (currentTab === tabId) {
      loadTabContent().then((content) => {
        setTabContent(content);
      });
    }
  }, [currentTab, tabId, loadTabContent]);

  return <div>{tabContent ? tabContent() : <p>Loading...</p>}</div>;
};

export default TabContentLoader;
