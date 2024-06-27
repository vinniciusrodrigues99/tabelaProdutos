interface SearchBarProps {
  filterText: string;
  isStockOnly: boolean;
  onFilterTextChange: (value: string) => void;
  onIsStockOnlyChange: (value: boolean) => void;

}
export function SearchBar( {filterText, isStockOnly, onFilterTextChange, onIsStockOnlyChange}:any) {
  return ( 
    <form> 
      <input type="text" value = {filterText} placeholder="Search..." onChange={(e) => onFilterTextChange(e.target.value)}/>
      <br/>
      <label>
        <input type="checkbox"
        checked={isStockOnly}
        onChange={(e) => onIsStockOnlyChange(e.target.checked)} />
        {''}
        Only show products in stock
      </label>
    </form>
  )
}