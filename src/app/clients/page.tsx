import { GetClients } from "@/api/soporte";
import Table from "@/components/Table/Table";
import Title from "@/components/Title";

export default async function Clients() {
  const data = await GetClients();
  return (
    <>
      <Title title="Clientes" />
      <Table data={data} />
    </>
  );
};