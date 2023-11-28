import Button from "@/components/button";
export default function TaskGridRow({ task }: { task: any }) {
    //const path = "/projects/tasks/" + task["id"];
    const path = "/";
    return (
      <tr key={`${task["name"]}`}>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="flex items-center">{"#"+task["id"]}</div>
        </td>
  
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="flex items-center">{task["name"]}</div>
        </td>
  
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-900">{task["state"]}</div>
        </td>
        
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-900"><Button children="Ver tarea" href={path}/></div>
        </td>
      </tr>
    );
  }
  