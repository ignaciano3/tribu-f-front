import { GetProducts } from "@/api/soporte";
import RowProduct from "@/components/Table/Rows/ProductRow";
import Table from "@/components/Table/Table";
import Title from "@/components/Title";

const headers = ["Nombre", "Versión", "N°"];

export default async function Productos() {
  const products = await GetProducts();
  return (
    <>
      <Title title="Productos" />
      <Table data={products} RowItem={RowProduct} headers={headers} />
    </>
  );
}
