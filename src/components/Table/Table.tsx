interface TableProps {
  HeaderItem?: any;
  headers?: string[];
  RowItem?: any;
  data: object[];
}

function DefaultHeaderItem({ title }: { title: string }) {
  return (
    <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">
      {title}
    </th>
  );
}

function DefaultRowItem({ row }: { row: any }) {
  return (
    <tr key={row["id"]}>
      {Object.values(row).map((value: any, count) => (
        <td
          key={row["id"] + "_" + count}
          className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
        >
          <div className="flex items-center">{value}</div>
        </td>
      ))}
    </tr>
  );
}

export default function Table(props: TableProps) {
  const data = props.data;
  const RowItem = props.RowItem ?? DefaultRowItem;
  const HeaderItem = props.HeaderItem ?? DefaultHeaderItem;
  const headers = props.headers ?? Object.keys(data[0]);

  return (
    <div className="container max-w-7xl mx-auto mt-8">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr>
                  {headers.map((title: string, index) => (
                    <HeaderItem key={index} title={title} />
                  ))}
                </tr>
              </thead>

              <tbody className="bg-slate-100 text-center">
                {data.map((row, index) => (
                  <RowItem row={row} key={index + row.id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
