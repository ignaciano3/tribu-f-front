import TaskCard from "@/components/TaskCard";
import { GetTask, GetUsuario } from "@/api/proyectos";

export default async function TaskCardPage({
  params,
}: {
  params: { id: string; taskId: string };
}) {
  const taskId = params.taskId;
  const task = await GetTask(taskId);
  const employee = await GetUsuario(task?.responsible_id || "");
  return (
    <>
      <TaskCard task={task} employee={employee} />
    </>
  );
}
