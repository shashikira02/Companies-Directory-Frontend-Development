import { Grid } from "@mui/material";
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
      <section
        aria-live="polite"
        aria-busy="true"
        className="flex justify-center items-center min-h-96 shadow-lg"
      >
        <Loader />
      </section>
    );
  }

  if (error) {
    return (
      <section
        aria-live="assertive"
        className="items-center min-h-96 shadow-lg rounded-xl p-8"
      >
        <div className="text-center">
          <p className="text-red-500 w-16 h-16 text-xl mb-3 font-semibold ">
            Error Loading Companies Data
          </p>
          <p className="text-gray-500">{error || error.toString()}</p>
        </div>
      </section>
    );
  }

  const currentPageData = getCurrentPageData();

  if (filteredCompanies.length === 0) {
    return (
      <section
        aria-live="polite"
        className="flex justify-center items-center min-h-60 p-4"
      >
        <div className="text-center text-gray-500 text-xl mb-3 mx-auto">
          No Companies Found
        </div>
      </section>
    );
  }

  return (
    <section className="mb-6">
      {/* Companies table or List */}
      {toggleMode === "card" ? (
        // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        //   {/* Card View */}
        //   {currentPageData.map((company) => (
        //     <CompaniesCard key={company.id} data={company} />
        //   ))}
        // </div>

        <Grid container spacing={3}>
          {currentPageData.map((company) => (
            <Grid item xs={12} sm={6} md={4} key={company.id}>
              <CompaniesCard key={company.id} data={company} />
            </Grid>
          ))}
        </Grid>
      ) : (
        // Table View
        <CompaniesTable data={currentPageData} />
      )}
    </section>
  );
};

export default CompaniesList;
