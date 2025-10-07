export const filterCompanies = (companies, filters) => {
  return companies.filter((company) => {
    if (
      filters.searchText &&
      !company.name.toLowerCase().includes(filters.searchText.toLowerCase())
    )
      return false;

    if (filters.industry && company.industry !== filters.industry) return false;
    if (filters.location && company.location !== filters.location) return false;

    if (filters.employeeRange) {
      const employees = company.employees;
      switch (filters.employeeRange) {
        case "0-100":
          if (employees < 0 || employees > 100) return false;
          break;
        case "101-1000":
          if (employees < 101 || employees > 1000) return false;
          break;
        case "1001-10000":
          if (employees < 1001 || employees > 10000) return false;
          break;
        case "10000+":
          if (employees <= 10000) return false;
          break;
        default:
          break;
      }
    }

    if (filters.foundedYear) {
      const founded = company.founded;
      switch (filters.foundedYear) {
        case "Before 2000":
          if (founded >= 2000) return false;
          break;
        case "2000-2005":
          if (founded < 2000 || founded > 2005) return false;
          break;
        case "2006-2010":
          if (founded < 2006 || founded > 2010) return false;
          break;
        case "2011-2015":
          if (founded < 2011 || founded > 2015) return false;
          break;
        case "2016-2020":
          if (founded < 2016 || founded > 2020) return false;
          break;
        case "2021-2025":
          if (founded < 2021 || founded > 2025) return false;
          break;
        default:
          break;
      }
    }
    return true;
  });
};

export const getUniqueIndustries = (companies) => [...new Set(companies.map(c => c.industry))];
export const getUniqueLocations = (companies) => [...new Set(companies.map(c => c.location))];
