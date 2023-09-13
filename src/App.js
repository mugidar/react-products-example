import { useState } from "react";
import "./App.css";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";

function App() {
  const [data, setData] = useState([
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]);
  const [query, setQuery] = useState("");
  const [inStock, setInStock] = useState(false);

  const searchedData =
    query !== "" ? data.filter((item) => item.name.includes(query)) : data;

  const filteredData = inStock
    ? searchedData.filter((item) => item.stocked === true)
    : searchedData;

  return (
    <div className="App">
      <SearchBar value={query} setValue={setQuery} />
      <span>
        <input
          type="checkbox"
          value={inStock}
          onChange={() => setInStock(!inStock)}
        />
        only in stock
      </span>
      <ProductTable products={filteredData} />
    </div>
  );
}

export default App;
