import TextField from "./forms/TextField";
import SelectField from "./forms/SelectField";
import SubmitButton from "./forms/SubmitButton";
import TextAreaField from "./forms/TextAreaField";
import Title from "./Title";
import { CreateTicket } from "@/api/soporteServer";
import { Cliente, CreateTicketParams } from "@/types/types";
import { priorities, severities, state } from "@/constants/constants";

export default async function TicketForm({
  params,
  clients,
}: {
  params: CreateTicketParams;
  clients: Cliente[];
}) {
  const createTicketOnProject = CreateTicket.bind(null, params);
  const clientOptions = clients.map((client) => {
    return {
      value: client.id,
      label: client["razon social"],
    };
  });

  return (
    <div className="flex overflow-y-auto outline-none focus:outline-none mt-8">
      <div className="w-full min-w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-4">
        <div className="flex justify-between">
          <Title title="Crear Ticket" />
        </div>
        <form action={createTicketOnProject} className="space-y-2">
          <TextField
            name="title"
            label="Título"
            placeholder="Nombre del ticket"
          />
          <TextAreaField
            name="description"
            label="Descripción"
            placeholder="Descripción del ticket"
          />
          <div className="flex justify-between space-x-2">
            <SelectField
              name="severity"
              label="Severidad"
              options={severities}
            />
            <SelectField
              name="priority"
              label="Prioridad"
              options={priorities}
            />
            <SelectField name="state" label="Estado" options={state} />
          </div>
          <SelectField
            label="Cliente"
            name="client_id"
            options={clientOptions}
          />
          <div className="float-right pt-8 pb-4">
            <SubmitButton label="Crear" />
          </div>
        </form>
      </div>
    </div>
  );
}
