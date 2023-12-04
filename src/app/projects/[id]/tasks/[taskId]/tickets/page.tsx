import { GetTicket, GetAssignmentTask } from "@/api/soporte";
import Table from "@/components/Table/Table";
import Title from "@/components/Title";
import Button from "@/components/button";
import TicketsRow from "@/components/Table/Rows/TicketsRow";

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
  const assignments = await GetAssignmentTask(params.taskId);

  const tickets = await Promise.all(
    assignments.map(async (assignment: any) => {
      const ticket = await GetTicket(assignment.ticket_id);
      return ticket;
    })
  );

  return (
    <>
      <div className="flex justify-between">
        <Title title="Tickets" className="inline" />
        <Button href={`/projects/${params.id}/tasks/${params.taskId}`}>
          Volver a la tarea
        </Button>
      </div>
      <Table data={tickets} RowItem={TicketsRow} headers={headers} />
    </>
  );
}
