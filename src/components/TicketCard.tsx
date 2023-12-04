import { Cliente, Ticket } from "@/types/types";
import Link from "next/link";
import TextField from "./forms/TextField";
import SelectField from "./forms/SelectField";
import { priorities, severities, state } from "@/constants/constants";
import TextAreaField from "./forms/TextAreaField";
import { UpdateTicket } from "@/api/soporteServer";

export default function TicketCard({
  ticket,
  clients,
}: {
  ticket: Ticket;
  clients: Cliente[];
}) {
  const updateTicket = UpdateTicket.bind(null, ticket.id);
  const clientOptions = clients.map((client) => {
    return {
      value: client.id,
      label: client["razon social"],
    };
  });

  return (
    <form
      action={updateTicket}
      className="max-w-6xl min-h-screen mx-auto mt-8 relative"
    >
      <div className="bg-slate-100 p-8 rounded-lg shadow-lg">
        <div className="flex justify-between text-center items-center">
          <span className="text-3xl font-bold mb-8">Detalle del ticket</span>
          <div className="flex gap-2">
            <Link
              className="px-4 py-2 font-semibold bg-amber-300 hover:bg-amber-400 text-xl rounded"
              href={`/tickets/${ticket.id}/createAsosTask`}
            >
              Asociar tarea
            </Link>
            <Link
              className="px-4 py-2 font-semibold bg-amber-300 hover:bg-amber-400 text-xl rounded"
              href={`/tickets/${ticket.id}/createAsosNewTask`}
            >
              Asociar nueva tarea
            </Link>
          </div>
        </div>

        <div className="ticket-details">
          <TextField
            label="Título"
            name="title"
            placeholder="Título"
            defaultValue={ticket.title}
            className="text-3xl"
          />
          <SelectField
            label="Estado"
            name="state"
            options={state}
            defaultValue={ticket.state}
          />
          <TextField
            label="Fecha creación"
            name="date_creacion"
            placeholder="Fecha creación"
            defaultValue={ticket.date_creacion}
            disabled
          />
          <SelectField
            label="Prioridad"
            name="priority"
            options={priorities}
            defaultValue={ticket.priority}
          />
          <SelectField
            label="Severidad"
            name="severity"
            options={severities}
            defaultValue={ticket.severity}
          />
          <TextAreaField
            label="Descripción"
            name="description"
            placeholder="Descripción"
            defaultValue={ticket.description}
          />
          <SelectField
            label="Cliente"
            name="client_id"
            defaultValue={ticket.client_id}
            options={clientOptions}
          />
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Guardar
        </button>
      </div>
    </form>
  );
}
