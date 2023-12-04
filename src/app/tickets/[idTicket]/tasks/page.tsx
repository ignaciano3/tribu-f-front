import { GetAssignmentTicket } from "@/api/soporte";
import {GetTask} from "@/api/proyectos"
import Table from "@/components/Table/Table";
import Title from "@/components/Title";
import Button from "@/components/button";
import TicketsRowTask from "@/components/Table/Rows/TicketsRowTask";

const headers = [
  "Título",
  "Descripción",
  "Severidad",
  "Prioridad",
  "Estado",
  "Fecha creación",
];
export default async function Tickets({
  params,
}: {
  params: { id: string; taskId: string };
}) {
  const { taskId } = params;
  const assignments = await GetAssignmentTicket(taskId);

  const tickets = await Promise.all(
    assignments.map(async (assignment: any) => {
      const ticket = await GetTask(assignment.task_id);
      return ticket;
    })
  );

  return (
    <>
      <div className="flex justify-between">
        <Title title="Tickets" className="inline" />
        <Button href={`/tickets/${taskId}`}>
          Volver al ticket
        </Button>
      </div>
      <Table data={tickets} RowItem={TicketsRowTask} headers={headers} />
    </>
  );
}