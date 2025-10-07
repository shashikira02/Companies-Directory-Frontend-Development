import CompaniesList from "./companies/CompaniesList";
import FilterPanel from "./filters/FilterPanel";
import Header from "./Header";
import Pagination from "./pagination/Pagination";

const Body = () => {
  return (
    <div>
      <Header />
      <FilterPanel />
      <CompaniesList />
      <Pagination />
    </div>
  );
};

export default Body;
