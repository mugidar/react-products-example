import React from "react";
import CatRow from "./CatRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ products }) => {
  const rows = [];

  let lastCat = null;
  products.forEach((product) => {
    if (product.category !== lastCat) {
      rows.push(<CatRow category={product.category} key={product.category} />);
    }

    rows.push(<ProductRow product={product} key={product.name} />);
    lastCat = product.category;
  });

  return (
    <div>
      {rows.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      ) : (
        <h1>No items</h1>
      )}
    </div>
  );
};

export default ProductTable;
