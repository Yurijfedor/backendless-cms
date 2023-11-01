import React, { useState } from "react";

const TabContentLoader = ({ currentTab }) => {
  const [tabContent, setTabContent] = useState(null);

  useEffect(() => {
    if (currentTab) {
      setTabContent(currentTab);
    }
  }, [currentTab]);

  return <div>{tabContent ? tabContent() : <p>Loading...</p>}</div>;
};

export default TabContentLoader;
