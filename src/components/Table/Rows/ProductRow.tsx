import Link from "next/link";

export default function RowProduct({
  row,
}: {
  row: { nroDeProducto: number; name: string; version: string };
}) {
  return (
    <tr key={row.nroDeProducto}>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-blue-600 font-semibold">
        <Link href={`/products/${row.nroDeProducto}/1/1`}>{row.name}</Link>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {row.nroDeProducto}
      </td>
    </tr>
  );
}
