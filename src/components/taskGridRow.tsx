import Button from "@/components/button";
export default function rowGridRow({ row }: { row: any }) {
  const path = `/projects/${row.project_id}/tasks/${row.id}`;
  return (
    <tr key={`${row["id"]}`}>
      {Object.keys(row).map((key, index) => (
        <td
          className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
          key={index}
        >
          {row[key]}
        </td>
      ))}
      <Button href={path}> Ver Tarea </Button>
    </tr>
  );
}
