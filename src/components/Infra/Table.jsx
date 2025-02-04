const Table = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="w-full px-4 md:px-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left mb-4 mx-auto">
          Our Infrastructure
        </h1>
      </div>
      <div className="overflow-x-auto mt-8 w-full p-4 md:p-0">
        <table className="min-w-full table-auto border-collapse border text-start border-blue-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-blue-300 px-4 py-2 sm:px-6 sm:py-3 lg:px-12 lg:py-4">
                Type
              </th>
              <th className="border border-blue-300 px-4 py-2 sm:px-6 sm:py-3 lg:px-12 lg:py-4">
                Capacity
              </th>
              <th className="border border-blue-300 px-4 py-2 sm:px-6 sm:py-3 lg:px-12 lg:py-4">
                No. of Units
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-white even:bg-gray-100">
                <td className="border border-blue-300 px-4 py-2 sm:px-6 sm:py-3 lg:px-12 lg:py-4">
                  {item.type}
                </td>
                <td className="border border-blue-300 px-4 py-2 sm:px-6 sm:py-3 lg:px-12 lg:py-4">
                  {item.capacity}
                </td>
                <td className="border border-blue-300 px-4 py-2 sm:px-6 sm:py-3 lg:px-12 lg:py-4">
                  {item.units}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
