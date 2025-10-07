import { useEffect, useState } from "react";
import { useCompaniesContext } from "../../hooks/useCompaniesContext";
import Input from "../common/Input";
import Dropdown from "./Dropdown";
import useDebounce from "../../hooks/useDebounce";
import {
  getUniqueIndustries,
  getUniqueLocations,
} from "../../utils/filterHelpers";
import ButtonEle from "../common/ButtonEle";

const FilterPanel = () => {
  const {
    filters,
    updateFilters,
    clearFilters,
    changeToggleMode,
    toggleMode,
    filteredCompanies,
    companies
  } = useCompaniesContext();
  const [searchText, setSearchText] = useState(filters.searchText);
  const debouncedSearchText = useDebounce(searchText);
  const employeeRangeOptions = ["0-100", "101-1000", "10001-10000", "10000+"];
  const foundedYearOptions = [
    "Before 2000",
    "2000-2005",
    "2006-2010",
    "2011-2015",
    "2016-2020",
    "2021-2025",
  ];

  useEffect(() => {
    // console.log(debouncedSearchText);
    updateFilters({ searchText: debouncedSearchText });
  }, [debouncedSearchText]);

  const handleFilterChange = (filterName, value) => {
    updateFilters({ [filterName]: value });
  };

  const handleClearFilters = () => {
    setSearchText("");
    clearFilters();
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 border w-9/12 mx-auto text-center">
      <h2>Filter Companies</h2>
      {/* Input filter for searching companies by name */}
      <Input
        value={searchText}
        onSearch={setSearchText}
        placeholder="Search companies by name..."
      />

      {/* Dropdown, input filters for filtering data by Industry, Location, size of employees, founded in  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <Dropdown
          label="Industry"
          value={filters.industry}
          onChange={(e) => handleFilterChange("industry", e.target.value)}
          options={getUniqueIndustries(companies)}
          placeholder="All Industries"
        />
        <Dropdown
          label="Location"
          value={filters.location}
          onChange={(e) => handleFilterChange("location", e.target.value)}
          options={getUniqueLocations(companies)}
          placeholder="All Locations"
        />
        <Dropdown
          label="Company Size"
          value={filters.employeeRange}
          onChange={(e) => handleFilterChange("employeeRange", e.target.value)}
          options={employeeRangeOptions}
          placeholder="All Sizes"
        />
        <Dropdown
          label="Founded"
          value={filters.foundedYear || ""}
          onChange={(e) => handleFilterChange("foundedYear", e.target.value)}
          options={foundedYearOptions}
          placeholder="All Years"
        />
      </div>

      <div>
        <div>
          <ButtonEle onClick={handleClearFilters}>Clear Filters</ButtonEle>

          {/* Toggle Cards/Table */}
          <ButtonEle onClick={changeToggleMode}>

            {toggleMode === "card" ? "table" : "card"}
          </ButtonEle>
        </div>
        <div>
          <h5>Showing {filteredCompanies.length} companies</h5>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
