import CompaniesCard from "./CompaniesCard";
import CompaniesTable from "./CompaniesTable";

const CompaniesList = () => {
  return (
    <div>
      <CompaniesTable />
      <h4>or</h4>
      <CompaniesCard />
    </div>
  );
};

export default CompaniesList;
