"use client";
import EditTaskForm from "@/components/EditTaskForm";
import { Task } from "@/types/types";
import { getTask } from "@/api/proyectos";

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
