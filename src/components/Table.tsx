const Table = (headers, items) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {headers.map((header) => (
                <th
                  key={header}
                    scope="col"
                    className="px-6 py-3 font-semibold tracking-wider"
                    >
                    {header}
                </th>
                ))}
        </thead>
        <tbody>
            {headers.map((header, i) => (
                <tr key={header}>
                    {items.map((item) => (
                        <td key={item[header]} className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 w-2.5 h-2.5 mr-2 rounded-full bg-gradient-to-tr from-green-400 to-blue-500"></div>
                                <span>{item[header]}</span>
                            </div>
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
      </table>
    </div>
  );
};
