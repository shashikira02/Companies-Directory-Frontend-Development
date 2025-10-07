const CompaniesTable = ({data}) => {
  return (
    <table className="table-auto border-collapse border border-gray-400 p-2 m-2 " >
      <thead>
        <tr>
          <th>Name</th>
          <th>Industry</th>
          <th>Location</th>
          <th>Employees</th>
          <th>Founded</th>
          <th>Description</th>
          <th>Type</th>
          <th>Revenue</th>
        </tr>
      </thead>
      <tbody>
        {data.map((company) => (
          <tr key={company.id}>
            <td>{company.name}</td>
            <td>{company.industry}</td>
            <td>{company.location}</td>
            <td>{company.employees}</td>
            <td>{company.founded}</td>
            <td>{company.description}</td>
            <td>{company.type}</td>
            <td>{company.revenue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CompaniesTable
