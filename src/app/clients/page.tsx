import ClientGridRow from "@/components/clientGridRow";
import { Cliente } from "@/types/types";

const getClientes = async () => {
  const response = await fetch(
    "https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/clientes-psa/1.0.0/m/api/clientes"
  );
  const data = await response.json();
  return data;
};

function HeaderItem({ title }: { title: string }) {
  return (
    <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">
      {title}
    </th>
  );
}

const ClientGrid = async () => {
  const list = await getClientes();

  return (
    <>
      <Table HeaderItem={HeaderItem} data={list} RowItem={ClientGridRow} />
    </>
  );
};

export default ClientGrid;
