import TaskCard from "@/components/TaskCard";
import { getTask, getUsuario } from "@/api/proyectos";

export default async function TaskCardPage({
  params,
}: {
  params: { id: string; taskId: string };
}) {
  const taskId = params.taskId;
  const task = await getTask(taskId);
  const employee = await getUsuario(task?.responsible_id || "");
  return (
    <>
      <TaskCard task={task} employee={employee} />
    </>
  );
}
