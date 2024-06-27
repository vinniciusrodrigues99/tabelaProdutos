import { SearchBar } from "./SearchBar/SearchBar"
import { ProductTable } from "./ProductTable/ProductTable"
import { useState } from "react"

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"} 
  ]
export function FilterTableProduct() {
  const [filterText, setFilterText] = useState('');
  const [isStockOnly, setIsStockOnly] = useState(false);
  return (
    <div>
      <SearchBar 
        filterText={filterText}
        isStockOnly={isStockOnly}
        onFilterTextChange={setFilterText}
        onIsStockOnlyChange={setIsStockOnly}
      />
      <ProductTable products={PRODUCTS}
       filterText={filterText} 
       isStockOnly={isStockOnly} />
    </div>
  );
} 