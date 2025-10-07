import { useEffect, useState } from "react";
import CompaniesCard from "./CompaniesCard";
import CompaniesTable from "./CompaniesTable";
import { CompaniesData } from "../../utils/data";

const CompaniesList = () => {
  // toggling to cards or Table
  const [data, setData] = useState([]);
  const [card, setCard] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = CompaniesData;
      setData(data);
      // console.log(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 gap-4 w-9/12">
      {/* Companies table or List */}
      <button onClick={() => setCard(!card)}>Toggle Data</button>

      <div className="flex flex-wrap">
        {data.map((company) => (card ? <CompaniesCard key={company.id} data={company} /> : <CompaniesTable key={company.id} />))}
      </div>
    </div>
  );
};

export default CompaniesList;
