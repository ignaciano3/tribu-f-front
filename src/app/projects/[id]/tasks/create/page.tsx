"use client";
import TaskForm from "@/components/TaskForm";
import { Usuario } from "@/types/types";

const getUsuarios = async () => {
  // esto se lo tendria que mejorar metiendo variables
  // de entorno y sacandolo a un helper

  const response = await fetch(
    "https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos"
  );
  const data = await response.json();
  return data;
};

export default async function CreateTaskPage({
  params,
}: {
  params: { id: string };
}) {
  //const usuarios = await getUsuarios();
  //const usuarios =
  /*const usuarios: { nombre: string; apellido: string; legajo: number }[] = [
    { nombre: "Juan", apellido: "Pérez", legajo: 123 },
    { nombre: "María", apellido: "Gómez", legajo: 456 },
    { nombre: "Carlos", apellido: "Rodríguez", legajo: 789 },
  ];
  */
  const usuarios: Usuario[] = [
    { legajo: 1, nombre: "Ignacio", apellido: "García" },
    { legajo: 2, nombre: "Nico", apellido: "Ronchese" },
    { legajo: 3, nombre: "Saul", apellido: "Goodman" },
    // Puedes agregar más líderes según sea necesario
  ];
  console.log("PARAMS.ID: ", params.id);
  return (
    <>
      <TaskForm project_id={params.id}></TaskForm>
    </>
  );
}
