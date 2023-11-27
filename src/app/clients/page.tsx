import Table from "@/components/Table/Table";
import Title from "@/components/Title";

const getClientes = async () => {
  const response = await fetch(
    "https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/clientes-psa/1.0.0/m/api/clientes"
  );
  const data = await response.json();
  return data;
};

const ClientGrid = async () => {
  const data = await getClientes();

  return (
    <>
      <Title title="Clientes" />
      <Table data={data} />
    </>
  );
};

export default ClientGrid;
