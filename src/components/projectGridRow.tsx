import Button from "@/components/button";
export default function ProjectGridRow({ project }: { project: any }) {
    const path = "/projects/" + project["id"];
    return (
      <tr key={`${project["name"]}`}>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="flex items-center">{project["id"]}</div>
        </td>
  
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="flex items-center">{project["name"]}</div>
        </td>
  
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-900">{project["state"]}</div>
        </td>
        
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-900"><Button children="Ver proyecto" href={path}/></div>
        </td>
      </tr>
    );
  }
  