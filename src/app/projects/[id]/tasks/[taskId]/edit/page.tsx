import EditTaskForm from "@/components/EditTaskForm";
import { GetTask, GetUsuarios } from "@/api/proyectos";

export default async function EditTaskPage({
  params,
}: {
  params: { id: string; taskId: string };
}) {
  const task = await GetTask(params.taskId);
  const employees: any[] = await GetUsuarios();
  return (
    <>
      <EditTaskForm task={task} employees={employees}></EditTaskForm>
    </>
  );
}
