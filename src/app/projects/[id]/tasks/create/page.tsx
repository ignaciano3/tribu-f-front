import TaskForm from "@/components/TaskForm";
import { getUsuarios } from "@/api/proyectos";

export default async function CreateTaskPage({
  params,
}: {
  params: { id: string };
}) {
  const employees = await getUsuarios();
  return (
    <>
      <TaskForm project_id={params.id} employees={employees}></TaskForm>
    </>
  );
}
