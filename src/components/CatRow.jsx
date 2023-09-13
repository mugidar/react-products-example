import React from "react";

const CatRow = ({ category }) => {
  return (
    <tr>
      <td colSpan={2}>{category}</td>
    </tr>
  );
};

export default CatRow;
