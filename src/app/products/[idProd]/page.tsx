import { GetProduct, GetTickets, GetVersionsOfProduct } from "@/api/soporte";
import VersionRow from "@/components/Table/Rows/VersionRow";
import Table from "@/components/Table/Table";
import TicketForm from "@/components/TicketForm";
import Title from "@/components/Title";
import { ticketsHeaders } from "@/constants/headers";

export default async function ProductDetails({
  params,
}: {
  params: { idProd: string };
}) {
  const product = await GetProduct(params.idProd);
  const tickets = await GetTickets(params.idProd);
  const versions = await GetVersionsOfProduct(params.idProd);

  return (
    <>
      <Title title={product.name} />
      <Title title="Tickets" />
      <section className="flex justify-between">
        <div className="flex-1 mr-4">
          <Table data={tickets} headers={ticketsHeaders} />
        </div>
        <TicketForm idProd={params.idProd} />
      </section>
      <div className="max-w-min">
        <Table data={versions} RowItem={VersionRow} headers={["Versiones"]} />
      </div>
    </>
  );
}
