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
    companies,
  } = useCompaniesContext();
  const [searchText, setSearchText] = useState(filters.searchText);
  const debouncedSearchText = useDebounce(searchText);
  const employeeRangeOptions = ["0-100", "101-1000", "1001-10000", "10000+"];
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
    <section className="bg-white rounded-xl shadow-lg mb-8 text-center">
      <div className="bg-gradient-to-r from-cyan-600 to-cyan-300 px-6 py-4 rounded-t-xl">
        <h2 className="text-2xl font-semibold mb-4">Filter Companies</h2>
      </div>

      <div className="p-6 space-y-6">
        {/* Input filter for searching companies by name */}
        <div className="max-w-2xl mx-auto">
          <Input
            value={searchText}
            onSearch={setSearchText}
            placeholder="Search companies by name..."
          />
        </div>

        {/* Dropdown, input filters for filtering data by Industry, Location, size of employees, founded in  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
            onChange={(e) =>
              handleFilterChange("employeeRange", e.target.value)
            }
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

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2 border-t border-gray-300">
          <div className="flex gap-4">
            <ButtonEle onClick={handleClearFilters}>Clear Filters</ButtonEle>

            {/* Toggle Cards/Table */}
            <ButtonEle onClick={changeToggleMode}>
              Show {toggleMode === "card" ? "Table" : "Cards"}
            </ButtonEle>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center ">
          <h5 className="bg-gray-200 px-4 py-2 rounded-full text-gray-700">Showing {filteredCompanies.length} companies</h5>
        </div>
      </div>
    </section>
  );
};

export default FilterPanel;
