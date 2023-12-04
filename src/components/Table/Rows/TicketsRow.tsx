import Link from "next/link";

const rowHeaders = [
  "title",
  "description",
  "severity",
  "priority",
  "state",
  "date_creacion",
];

export default function TicketsRow({ row }: { row: any }) {
  return (
    <tr key={row.id}>
      {Object.values(rowHeaders).map((key: any, count) => (
        <td
          key={row.id + "_" + count}
          className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
        >
          <Link href={"/tickets/" + row.id}>{row[key]}</Link>
        </td>
      ))}
    </tr>
  );
}
