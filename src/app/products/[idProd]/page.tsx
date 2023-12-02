import { getTickets } from "@/api/soporte";
import NuevoButton from "@/components/Nuevo";
import Table from "@/components/Table/Table";
import TicketForm from "@/components/TicketForm";
import Title from "@/components/Title";
import { ticketsHeaders } from "@/constants/headers";

export default async function ProductDetails({
  params,
}: {
  params: { idProd: string };
}) {
  const tickets = await getTickets(params.idProd);
  return (
    <>
      <Title title="Detalles del producto" />
      <Title title="Tickets" />
      <section className="flex justify-between">
        <div className="flex-1 mr-4">
          <Table data={tickets} headers={ticketsHeaders} />
        </div>
        <TicketForm />
      </section>
    </>
  );
}
