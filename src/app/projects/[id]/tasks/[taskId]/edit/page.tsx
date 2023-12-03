import EditTaskForm from "@/components/EditTaskForm";
import { getTask, getUsuarios } from "@/api/proyectos";

export default async function EditTaskPage({
  params,
}: {
  params: { id: string; taskId: string };
}) {
  const task = await getTask(params.taskId);
  const employees: any[] = await getUsuarios();
  return (
    <>
      <EditTaskForm task={task} employees={employees}></EditTaskForm>
    </>
  );
}
