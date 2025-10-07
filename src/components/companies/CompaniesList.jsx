import { useState } from "react";
import CompaniesCard from "./CompaniesCard";
import CompaniesTable from "./CompaniesTable";

const CompaniesList = () => {
  const [card, setCard] = useState(false);
  return (
    <div className="flex flex-col items-center p-4">
      {/* Companies table or List */}
      <button onClick={() => setCard(!card)}>Toggle Data</button>
      {card ? <CompaniesTable /> : <CompaniesCard />}
    </div>
  );
};

export default CompaniesList;
