import React from "react";
const DummyTable = ({ tab }) => {
  const data = tab.title.split(" ");
  return (
    <table>
      <tbody>
        <tr>
          <td>{data[0]}</td>
          <td>{data[1]}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DummyTable;
