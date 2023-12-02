import TextField from "./forms/TextField";
import SelectField from "./forms/SelectField";
import SubmitButton from "./forms/SubmitButton";
import TextAreaField from "./forms/TextAreaField";
import Title from "./Title";
import ReturnButton from "./forms/ReturnButton";
import { createTicket } from "@/api/soporte";

const severities = [
  { value: "S1", label: "S1" },
  { value: "S2", label: "S2" },
  { value: "S3", label: "S3" },
  { value: "S4", label: "S4" },
];

const priorities = [
  { value: "alta", label: "Alta" },
  { value: "media", label: "Media" },
  { value: "baja", label: "Baja" },
];

const state = [
  { value: "abierto", label: "Abierto" },
  { value: "en_proceso", label: "En proceso" },
  { value: "cerrado", label: "Cerrado" },
];

export default async function TicketForm({ idProd }: { idProd: string }) {
  const createTicketOnProject = createTicket.bind(null, idProd);

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
          <div className="flex justify-between space-x-2 pb-4">
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
          <div className="float-right pb-4">
            <SubmitButton label="Crear" />
          </div>
        </form>
      </div>
    </div>
  );
}
