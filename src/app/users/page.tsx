import { GetUsers } from "@/api/soporte";
import Table from "@/components/Table/Table";
import Title from "@/components/Title";

export default async function Users() {
  const data = await GetUsers();
  return (
    <>
      <Title title="Usuarios" />
      <Table data={data} />
    </>
  );
};