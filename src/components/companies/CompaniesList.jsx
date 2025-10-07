import CompaniesCard from "./CompaniesCard";
import CompaniesTable from "./CompaniesTable";
import Loader from "../common/Loader";
import { useCompaniesContext } from "../../hooks/useCompaniesContext";

const CompaniesList = () => {
  // toggling to cards or Table
  const { loading, error, toggleMode, getCurrentPageData, filteredCompanies } =
    useCompaniesContext();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-60">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-60">
        <div className="text-red-500 text-xl mb-3">
          Error Loading Companies Data
        </div>
        <div className="text-gray-500">{error}</div>
      </div>
    );
  }

  const currentPageData = getCurrentPageData();

  if (filteredCompanies.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-60">
        <div className="text-gray-500 text-xl mb-3">No Companies Found</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-4 gap-4 w-9/12">
      {/* Companies table or List */}
      {toggleMode === "card" ? (
        <div className="flex flex-wrap">
          {/* Card View */}
          {currentPageData.map((company) => (
            <CompaniesCard key={company.id} data={company} />
          ))}
        </div>
      ) : (
        // Table View
        <CompaniesTable data={currentPageData} />
      )}
    </div>
  );
};

export default CompaniesList;
