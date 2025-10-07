const CompaniesCard = ({data}) => {
    // console.log(data)
  return (
    <div className="p-4 m-4 border border-black rounded w-4/12 bg-violet-200">
      <div className="font-bold text-xl " >{data.name}</div>
      <div className="bg-teal-200 w-36" >{data.industry}</div>
      <div className="company-details">
        <div className="flex justify-between">
          <span>Location:</span>
          <span>{data.location}</span>
        </div>
        <div className="flex justify-between">
          <span>Employees:</span>
          <span>{data.employees}</span>
        </div>
        <div className="flex justify-between">
          <span>Founded:</span>
          <span>{data.founded}</span>
        </div>
        <div className="text-gray-500">
          <span>{data.description}</span>
        </div>
        <hr  />
        <div className="flex justify-between py-2">
          <span className="bg-cyan-600" >{data.type}</span>
          <span>{data.revenue}</span>
        </div>
      </div>
    </div>
  );
};

export default CompaniesCard;

// return (
//     <div className="p-4 m-4 border border-black rounded w-3/12">
//       <h1 className="font-bold">Company name</h1>
//       <h4 className="bg-gray-400 w-4/12">Company Type</h4>
//       <h5>Location: Company Location</h5>
//       <h5>Total: Total Employees</h5>
//       <h5>Founded: Founded In Year</h5>
//       <p>description</p>
//       <div className="flex justify-between items-end">
//         <p>Company type</p>
//         <h6>Total Revenue</h6>
//       </div>
//     </div>
//   );
