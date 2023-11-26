export default function ClientGridRow({ row }: { cliente: any }) {
  console.log(row);
  return (
    <tr key={`${row["razon social"]}`}>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">{row["id"]}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">{row["razon social"]}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">{row["CUIT"]}</div>
      </td>
    </tr>
  );
}
