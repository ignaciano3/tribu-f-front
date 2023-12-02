import { getTickets } from "@/api/soporte";
import NuevoButton from "@/components/Nuevo";
import Table from "@/components/Table/Table";
import TicketForm from "@/components/TicketForm";
import Title from "@/components/Title";
import { ticketsHeaders } from "@/constants/headers";

export default async function ProductDetails({params} : {params : {idProd : string}}) {
    const tickets = await getTickets(params.idProd);
  return (
    <>
      <Title title="Detalles del producto" />
      <>
        <div className="flex justify-between">
          <Title title="Tickets" className="inline" />
        </div>
        <Table data={tickets} headers={ticketsHeaders} />
        
      </>
      <TicketForm />
    </>
  );
}
