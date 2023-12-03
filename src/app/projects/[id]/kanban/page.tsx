import KanbanBoard from "@/components/KanbanBoard";
import { getTasks } from "@/api/proyectos";

export default async function KanbanPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const tasks = await getTasks(id);
  console.log("ID: ", id);
  //const tasks = await getTasks(params.id);
  return (
    <>
      <KanbanBoard project_id={id} tasks={tasks} />
    </>
  );
}
