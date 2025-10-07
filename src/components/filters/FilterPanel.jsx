import Input from "../common/Input";
import Dropdown from "./Dropdown";

const FilterPanel = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 border w-9/12 mx-auto text-center">
      {/* Input filter for searching companies by name */}
      <Input />

      <p>Dropdown filters logic</p>
      {/* Dropdown, input filters for filtering data by Industry, Location, size of employees, founded in  */}
      <Dropdown />

      <button>Clear Filters</button>

      {/* Toggle Cards/Table */}
      <button>Toggle Data ? Cards : Table</button>
    </div>
  );
};

export default FilterPanel;
