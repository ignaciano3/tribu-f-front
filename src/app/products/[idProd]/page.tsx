import { getProduct, getTickets, getVersionsOfProduct } from "@/api/soporte";
import NuevoButton from "@/components/Nuevo";
import VersionRow from "@/components/Table/Rows/VersionRow";
import Table from "@/components/Table/Table";
import TicketForm from "@/components/TicketForm";
import Title from "@/components/Title";
import { ticketsHeaders } from "@/constants/headers";
import { assert } from "console";

export default async function ProductDetails({
  params,
}: {
  params: { idProd: string };
}) {
  const product = await getProduct(params.idProd);
  const tickets = await getTickets(params.idProd);
  const versions = await getVersionsOfProduct(params.idProd);
  
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
