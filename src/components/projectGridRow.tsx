import Button from "@/components/button";

export default function ProjectGridRow({ project }: { project: any }) {
  const path = "/projects/" + project["id"];
  const href = { pathname: path, query: { id: project.id } };
  console.log("projectGridRow: ", project);
  return (
    <tr key={`${project["id"]}`} className="bg-slate-100">
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">{project["id"]}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">{project["name"]}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">
          {project["state"]}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">
          <Button href={href}> Ver Proyecto </Button>
        </div>
      </td>
    </tr>
  );
}
