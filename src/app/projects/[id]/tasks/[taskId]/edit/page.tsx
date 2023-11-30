"use client";
import EditTaskForm from "@/components/EditTaskForm";
import { Task } from "@/types/types";

const getTask = async (id: string): Promise<Task> => {
  //poner nuestra base de datos
  const url = process.env.proyectosApiUrl + "tasks/get_task/" + id;

  const response = await fetch(url); //poner nuestra base de datos
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Hubo un error en el back");
  }
};

export default async function EditTaskPage({
  params,
}: {
  params: { id: string; taskId: string };
}) {
  console.log("TaskPage, params.ID: ", params.id);

  const task = await getTask(params.taskId);
  console.log("EditTaskPage/ task: ", JSON.stringify(task, null, 2));

  return (
    <>
      <EditTaskForm task={task}></EditTaskForm>
    </>
  );
}
