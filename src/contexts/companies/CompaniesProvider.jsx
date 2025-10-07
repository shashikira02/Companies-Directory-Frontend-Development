import { useState, useEffect, useCallback, useMemo } from "react";
import { CompaniesContext } from "./CompaniesContext";
import { filterCompanies } from "../../utils/filterHelpers";
import { CompaniesData } from "../../utils/data";

const initialState = { //initial data for the context
  companies: [],
  filteredCompanies: [],
  loading: false,
  error: null,
  filters: {
    searchText: "",
    industry: "",
    location: "",
    employeeRange: "",
    foundedYear: "",
  },
  toggleMode: "card",
  currentPage: 1,
  itemsPerPage: 12,
  totalPages: 1,
};

export const CompaniesProvider = ({ children }) => {
  const [companies, setCompanies] = useState(initialState.companies);
  const [filteredCompanies, setFilteredCompanies] = useState(
    initialState.filteredCompanies
  );
  const [loading, setLoading] = useState(initialState.loading);
  const [error, setError] = useState(initialState.error);
  const [filters, setFilters] = useState(initialState.filters);
  const [toggleMode, setToggleMode] = useState(initialState.toggleMode);
  const [currentPage, setCurrentPage] = useState(initialState.currentPage);
  const [itemsPerPage, setItemsPerPage] = useState(initialState.itemsPerPage);
  const [totalPages, setTotalPages] = useState(initialState.totalPages);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setCompanies(CompaniesData);
        setFilteredCompanies(CompaniesData);
        setTotalPages(Math.ceil(CompaniesData.length / itemsPerPage));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [itemsPerPage]);

  // filter data on initial render 
  useEffect(() => {
    const filtered = filterCompanies(companies, filters);
    setFilteredCompanies(filtered);

    setTotalPages(Math.ceil(filtered.length / itemsPerPage));
  }, [filters, companies, itemsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters, companies]);

  const updateFilters = useCallback((newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  }, []);

  // reverting to initial state 
  const clearFilters = useCallback(() => {
    setFilters(initialState.filters);
    setFilteredCompanies(companies);
    setCurrentPage(1);
    setTotalPages(Math.ceil(companies.length / itemsPerPage));
  }, [companies, itemsPerPage]);

  const changeToggleMode = useCallback(() => {
    setToggleMode((prev) => (prev === "card" ? "table" : "card"));
  }, []);

  // memoized context value to prevent unnecessary re-renders and optimize performance
  const contextValue = useMemo(() => {
    const setCurrentPageHandler = (page) => setCurrentPage(page);

    const setItemsPerPageHandler = (items) => {
      setItemsPerPage(items);
      setCurrentPage(1);
      setTotalPages(Math.ceil(filteredCompanies.length / items));
    };

    const getCurrentPageData = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return filteredCompanies.slice(startIndex, endIndex);
    };

    return {
      companies,
      filteredCompanies,
      loading,
      error,
      filters,
      toggleMode,
      currentPage,
      itemsPerPage,
      totalPages,
      updateFilters,
      clearFilters,
      changeToggleMode,
      setCurrentPageHandler,
      setItemsPerPageHandler,
      getCurrentPageData,
    };
  }, [
    companies,
    filteredCompanies,
    loading,
    error,
    filters,
    toggleMode,
    currentPage,
    itemsPerPage,
    totalPages,
    updateFilters,
    clearFilters,
    changeToggleMode,
  ]);

  return (
    <CompaniesContext.Provider value={contextValue}>
      {children}
    </CompaniesContext.Provider>
  );
};
