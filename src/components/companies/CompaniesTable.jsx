const CompaniesTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gradient-to-r from-cyan-600 to-cyan-300">
            <th className="px-4 py-4 text-left font-bold">Name</th>
            <th className="px-4 py-4 text-left font-bold">Industry</th>
            <th className="px-4 py-4 text-left font-bold">Location</th>
            <th className="px-4 py-4 text-left font-bold">Employees</th>
            <th className="px-4 py-4 text-left font-bold">Founded</th>
            <th className="px-4 py-4 text-left font-bold">Description</th>
            <th className="px-4 py-4 text-left font-bold">Type</th>
            <th className="px-4 py-4 text-left font-bold">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {data.map((company, ind) => (
            <tr
              key={company.id}
              className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                ind % 2 === 0 ? " bg-white" : " bg-gray-50/50"
              }}`}
            >
              <td className="px-4 py-4">
                <div className="font-semibold text-gray-900">
                  {company.name}
                </div>
              </td>
              <td className="border border-gray-300 px-2 py-1">
                {company.industry}
              </td>
              <td className="border border-gray-300 px-2 py-1">
                {company.location}
              </td>
              <td className="border border-gray-300 px-2 py-1">
                {company.employees.toLocaleString()}
              </td>
              <td className="border border-gray-300 px-2 py-1">
                {company.founded}
              </td>
              <td className="border border-gray-300 px-2 py-1">
                {company.description}
              </td>
              <td className="border border-gray-300 px-2 py-1">
                {company.type}
              </td>
              <td className="border border-gray-300 px-2 py-1">
                {company.revenue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompaniesTable;
