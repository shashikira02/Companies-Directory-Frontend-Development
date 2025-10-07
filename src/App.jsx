import "./App.css";
import CompaniesList from "./components/companies/CompaniesList";
import FilterPanel from "./components/filters/FilterPanel";
import Header from "./components/Header";
import Pagination from "./components/pagination/Pagination";

function App() {
  return (
    <>
      <Header />  
      <FilterPanel />

      <CompaniesList />
      <Pagination/>
    </>
  );
}

export default App;
