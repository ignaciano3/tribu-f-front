import { getTickets } from "@/api/soporte";
import Nuevo from "@/components/Nuevo";
import Table from "@/components/Table/Table";
import Title from "@/components/Title";

const headers = [
  "ID ticket",
  "Título",
  "Estado",
  "Actualizado",
  "Cliente",
  "Prioridad",
  "Severidad",
  "Ver más",
];

export default async function Tickets({params} : {params : {idProd : string}}) {
  const tickets = await getTickets(params.idProd);

  return (
    <>
      <div className="flex justify-between">
        <Title title="Tickets" className="inline" />
        <Nuevo title="Crear nuevo ticket" href={`/products/${params.idProd}/tickets/create`} />
      </div>
      <Table data={tickets} headers={headers} />
    </>
  );
}