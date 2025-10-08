import CompaniesList from "./companies/CompaniesList";
import FilterPanel from "./filters/FilterPanel";
import Header from "./Header";
import PaginationEle from "./pagination/Pagination";

const Body = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-6 py-4 max-w-7xl" >
        <FilterPanel />
        <CompaniesList />
        <PaginationEle />
      </div>
    </main>
  );
};

export default Body;
