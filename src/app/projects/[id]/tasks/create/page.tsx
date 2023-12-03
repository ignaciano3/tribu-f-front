import TaskForm from "@/components/TaskForm";
import { GetUsuarios } from "@/api/proyectos";

export default async function CreateTaskPage({
  params,
}: {
  params: { id: string };
}) {
  const employees = await GetUsuarios();
  return (
    <>
      <TaskForm project_id={params.id} employees={employees}></TaskForm>
    </>
  );
}
