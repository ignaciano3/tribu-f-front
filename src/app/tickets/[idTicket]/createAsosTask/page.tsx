import AsosOldTaskForm from "@/components/AsosOldTaskForm";
import { GetAllTasks } from "@/api/proyectos";

export default async function AsosOldTaskPage({
  params,
}: {
  params: { idTicket: string };
}) {
  const tasks = await GetAllTasks();
  return (
    <>
      <AsosOldTaskForm tasks={tasks} idTicket={params.idTicket}></AsosOldTaskForm>
    </>
  );
}
