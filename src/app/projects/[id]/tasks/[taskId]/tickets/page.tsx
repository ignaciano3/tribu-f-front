import { getTickets } from "@/api/soporte";
import { getTask } from "@/api/proyectos";
import Table from "@/components/Table/Table";
import Title from "@/components/Title";
import Button from "@/components/button";

const headers = [
  "ID ticket",
  "Título",
  "Estado",
  "Actualizado",
  "Cliente",
  "Prioridad",
  "Severidad",
  "Ver más",
];

export default async function Tickets({
  params,
}: {
  params: { taskId: string };
}) {
  //const assignments = await getAssignmentByTask(params.task.id);
  //const tickets = getTicketsTask(assignments);
  const tickets = await getTickets(params.taskId);
  const task = await getTask(params.taskId);
  //const tickets = {};
  return (
    <>
      <div className="flex justify-between">
        <Title title="Tickets" className="inline" />
        <Button href={`/projects/${task.project_id}/tasks/${task.id}`}>
          Volver a la tarea
        </Button>
      </div>
      <Table data={tickets} headers={headers} />
    </>
  );
}
