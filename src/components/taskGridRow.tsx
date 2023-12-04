import { GetUsuario } from "@/api/proyectos";
import Link from "next/link";

/*export default function rowGridRow({ row }: { row: any }) {
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
*/

export default async function TaskGridRow({ task }: { task: any }) {
  const path = "/projects/" + task.project_id + "/tasks/" + task.id;
  const employee: any = await GetUsuario(task.responsible_id);
  console.log("employee en TaskGridRow: ", employee);
  return (
    <tr key={`${task.id}`} className="bg-slate-100">
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">#{task.id}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center text-blue-600 font-semibold">
          <Link href={path}>{task.name}</Link>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div
          className="text-sm leading-5 text-gray-900"
          style={{ textTransform: "capitalize" }}
        >
          {task.state}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">
          {employee.name} {employee.last_name}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">
          {task.creation_date}
        </div>
      </td>
    </tr>
  );
}
