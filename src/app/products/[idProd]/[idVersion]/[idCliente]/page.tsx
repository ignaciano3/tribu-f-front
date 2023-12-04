import {
  GetClients,
  GetProduct,
  GetTickets,
  GetVersionsOfProduct,
} from "@/api/soporte";
import TicketsRow from "@/components/Table/Rows/TicketsRow";
import Table from "@/components/Table/Table";
import TicketForm from "@/components/TicketForm";
import Title from "@/components/Title";
import SelectVersiones from "@/components/forms/SelectVersiones";
import { CreateTicketParams } from "@/types/types";

const headers = [
  "Título",
  "Descripción",
  "Severidad",
  "Prioridad",
  "Estado",
  "Fecha creación",
];

export default async function ProductDetails({
  params,
}: {
  params: { idProd: string; idVersion: string; idCliente: string };
}) {
  const { idProd, idVersion, idCliente } = params;

  const product = await GetProduct(idProd);
  const versions = await GetVersionsOfProduct(idProd);
  const clients = await GetClients();
  const tickets = await GetTickets(idVersion);

  const ticketParams: CreateTicketParams = {
    client_id: idCliente,
    version_id: idVersion,
  };

  return (
    <>
      <Title title={product.name} />
      <div className="flex justify-between">
        <Title title="Tickets" />
        <SelectVersiones
          options={versions}
          idVersion={idVersion}
          idCliente={idCliente}
          idProd={idProd}
        />
      </div>
      <section className="flex justify-between">
        <div className="flex-1 mr-4">
          <Table data={tickets} headers={headers} RowItem={TicketsRow} />
        </div>
        <TicketForm params={ticketParams} />
      </section>
    </>
  );
}
