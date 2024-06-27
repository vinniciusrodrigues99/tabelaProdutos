import  {ProductCategoryRow}  from '../ProductTable/ProductCategoryRow';
import  {ProductRow}  from '../ProductTable/ProductRow';

interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;

}

interface ProductTableProps {
  products: Product[];
  filterText: string;
  isStockOnly: boolean;

}
export function ProductTable( {products, filterText, isStockOnly}: ProductTableProps)  {
  const rows: any[] = [];
  let lastCategory = '';
  var listaProdutos = products;
  listaProdutos.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText) === -1) {
      return;
    }
    if (isStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} /> // key is a special string attribute you need to include when creating lists of elements in React
      );
    }
      rows.push( // rows.push() is used to add elements to the end of an array
        <ProductRow
          product={product}
          key={product.name} />
      );
    lastCategory = product.category;
  })
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}