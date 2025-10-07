const CompaniesCard = () => {
  return (
    <div className="p-4 m-4 border border-black rounded w-4/12">
      <h1 className="font-bold">Company name</h1>
      <h4 className="bg-gray-400 w-4/12">Company Type</h4>
      <h5>Location: Company Location</h5>
      <h5>Total: Total Employees</h5>
      <h5>Founded: Founded In Year</h5>
      <p>description</p>
      <div className="flex justify-between items-end">
        <p>Company type</p>
        <h6>Total Revenue</h6>
      </div>
    </div>
  );
};

export default CompaniesCard;
