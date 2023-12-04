import Link from "next/link";

const rowHeaders = ["title", "severity", "priority", "state", "date_creacion"];

export default function TicketsRow({ row }: { row: any }) {
  return (
    <tr key={row.id}>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {row.title}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {row.severity}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {row.priority}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {row.state}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {row.date_creacion}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 flex gap-2">
        <Link
          href={`/tickets/${row.id}`}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Ver más
        </Link>
        <Link href={`/tickets/${row.id}/delete`} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Eliminar
        </Link>
      </td>
    </tr>
  );
}
