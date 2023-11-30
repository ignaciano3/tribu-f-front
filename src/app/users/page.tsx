import Table from "@/components/Table/Table";
import Title from "@/components/Title";

const getUsuarios = async () => {
  // esto se lo tendria que mejorar metiendo variables
  // de entorno y sacandolo a un helper

  const response = await fetch(
    "https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos",
  );
  const data = await response.json();
  return data;
};

const UserGrid = async () => {
  const usuarios = await getUsuarios();

  return (
    <>
      <Title title="Usuarios" />
      <Table data={usuarios} />
    </>
  );
};

export default UserGrid;
