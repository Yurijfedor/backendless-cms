import React from "react";
import { Link } from "react-router-dom";

const TabMenu = ({ tabs }) => (
  <ul>
    {tabs.map((tab) => (
      <li key={tab.id}>
        <Link to={tab.id}>{tab.id}</Link>
      </li>
    ))}
  </ul>
);

export default TabMenu;
