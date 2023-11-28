import Button from "@/components/button";

export default function ProjectGridRow({ project }: { project: any }) {
  const path = "/projects/" + project["id"];
  const href = {pathname: path, query: {id: project.id}};

  return (
    <tr key={`${project["nombre"]}`}>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">{project["id"]}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">{project["nombre"]}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">
          {project["fecha_fin"]}
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
