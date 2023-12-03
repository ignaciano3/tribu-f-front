import { getProducts } from "@/api/soporte";
import RowProduct from "@/components/Table/Rows/ProductRow";
import Table from "@/components/Table/Table";
import Title from "@/components/Title";

const headers = ["Nombre", "N°"];

export default async function Productos() {
  const products = await getProducts();
  return (
    <>
      <Title title="Productos" />
      <Table data={products} RowItem={RowProduct} headers={headers} />
    </>
  );
}
