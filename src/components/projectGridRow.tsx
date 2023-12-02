import Button from "@/components/button";
import { getUsuario } from "@/api/proyectos";
import Link from "next/link";

export default async function ProjectGridRow({ project }: { project: any }) {
  const path = "/projects/" + project["id"];
  const href = { pathname: path, query: { id: project.id } };
  const employee = await getUsuario(project.project_leader_id);
  console.log("projectGridRow: ", project);
  return (
    <tr key={`${project["id"]}`} className="bg-slate-100">
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">#{project["id"]}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center text-blue-600 font-semibold">
          <Link href={path}>{project["name"]}</Link>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">
          {project["state"]}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">
          {employee.name} {employee.last_name}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">
          {project.creation_date}
        </div>
      </td>
    </tr>
  );
}
