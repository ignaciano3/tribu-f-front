import { Task } from "@/types/types";
import Button from "@/components/button";
import TaskCard from "@/components/TaskCard";

const getTask = async (id: string) => {
  const url = process.env.proyectosApiUrl + "tasks/get_task/" + id;
  const response = await fetch(url);

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("Hubo un error al obtener los datos");
  }
};

function HeaderItem({ title }: { title: string }) {
  return (
    <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">
      {title}
    </th>
  );
}

export default async function TaskCardPage({
  params,
}: {
  params: { id: string; taskId: string };
}) {
  console.log("ID: ", params.id);
  console.log("TASK ID: ", params.taskId);
  const task = await getTask(params.taskId);
  console.log("TaskCardPage-> task: ", task);
  return (
    <>
      <TaskCard task={task} />
    </>
  );
}
