import Input from "../common/Input"
import Dropdown from "./Dropdown"

const FilterPanel = () => {
  return (
    <div>
        <Input />
        <p>Dropdown filters logic</p>
        <Dropdown/>

        <p>clear filters</p>
    </div>
  )
}

export default FilterPanel
