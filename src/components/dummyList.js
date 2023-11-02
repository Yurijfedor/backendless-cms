import React from "react";
const DummyList = ({ tab }) => (
  <ul>
    <li>{tab.id}</li>
    <li>{tab.title}</li>
    <li>{tab.path}</li>
    <li>{tab.order}</li>
  </ul>
);

export default DummyList;
