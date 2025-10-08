// import BusinessIcon from '@mui/icons-material/Business';

const CompaniesCard = ({ data }) => {
  // console.log(data)
  return (
    <article className="bg-white rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-1 border border-gray-100 w-96 h-96 ">
      <header className="bg-gradient-to-r from-cyan-300 to-cyan-500 px-6 py-2 rounded-t-xl">
        {/* <BusinessIcon color="primary"/>  */}
        <h3 className="font-bold text-xl truncate px-1  " title={data.name}>
          {data.name}
        </h3>

        <p className="bg-cyan-600 text-white px-2 inline-block py-0.5 rounded-full ">
          {data.industry}
        </p>
      </header>

      <div className="p-6">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-gray-50 p-3 rounded-lg">
              <span className="text-gray-500 font-semibold">Location: </span>
              <span className="text-gray-800 font-bold">{data.location}</span>
            </div>

            <div
              className="bg-gray-50 p-3 rounded-lg"
              aria-label="Number of Employees"
            >
              <span className="text-gray-500 font-semibold">Employees: </span>
              <span className="text-gray-800 font-bold">
                {data.employees.toLocaleString()}
              </span>
            </div>

            <div
              className="bg-gray-50 p-3 rounded-lg"
              aria-label="Founded Year"
            >
              <span className="text-gray-500 font-semibold">Founded: </span>
              <span className="text-gray-800 font-bold">{data.founded}</span>
            </div>

            <div
              className="bg-gray-50 p-3 rounded-lg"
              aria-label="Founded Year"
            >
              <span className="text-gray-500 font-semibold">Revenue: </span>
              <span className="text-gray-800 font-bold">{data.revenue}</span>
            </div>
          </div>

          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-gray-700 text-sm leading-relaxed line-clamp-3 ">
              {data.description}
            </p>
          </div>
          <hr />

          <div className="flex justify-between py-2 items-center border-gray-200 ">
            <span
              className={`px-3 rounded-full text-sm font-medium ${
                data.type === "Public"
                  ? "bg-green-200 text-green-800"
                  : "bg-blue-200 text-blue-800"
              }`}
            >
              {data.type}
            </span>
            <a
              href={data.website}
              target="_blank"
              className="text-blue-600 hover:text-blue-800 hover:underline text-md font-medium"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </article>
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
