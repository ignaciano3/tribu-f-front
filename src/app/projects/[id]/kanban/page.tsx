import { Task } from "@/types/types";
import TaskGridRow from "@/components/taskGridRow";
import Button from "@/components/button";
import Table from "@/components/Board/Board";
import Title from "@/components/Title";
import Nuevo from "@/components/Nuevo";
import KanbanBoard from "@/components/KanbanBoard";
/*
const getTasks = async (id: string) => {
  console.log("id: ", id);
  //poner nuestra base de datos
  const url =
    process.env.proyectosApiUrl +
    "tasks/get_tasks_by_project_id/{id}?project_id=" +
    id;
  console.log("URL: ", url);
  //const response = await fetchProyectos(/tareas/get_tareas)
  const response = await fetch(url); //poner nuestra base de datos
  const data = await response.json();
  return data;
};

const headers = [
  "Nombre",
  "Descripcion",
  "Fecha Inicio",
  "Fecha Fin",
  "Estados",
  "ID proyecto",
  "Id tarea",
  "",
];

export default async function Kanban({ params }: { params: { id: string } }) {
  const list = await getTasks(params.id);
  console.log("list: ", list);
  const id = params.id;
  console.log("id: ", id);
  const href = "/projects/" + id;
  return (
    <>
      <div className="flex justify-between">
        <Title title="Kanban" className="inline" />
        <Nuevo title="Volver" href={href} />
      </div>
      <Board data={list} headers={headers} RowItem={TaskGridRow} />
    </>
  );
}
*/
const getTasks = async (id: string) => {
  console.log("id: ", id);
  //poner nuestra base de datos
  const url =
    process.env.proyectosApiUrl +
    "tasks/get_tasks_by_project_id/{id}?project_id=" +
    id;
  console.log("URL: ", url);
  //const response = await fetchProyectos(/tareas/get_tareas)
  const response = await fetch(url); //poner nuestra base de datos
  const data = await response.json();
  return data;
};

export default async function KanbanPage({
  params,
}: {
  params: { id: string };
}) {
  console.log("ID: ", params.id);
  const tasks = await getTasks(params.id);
  return (
    <>
      <KanbanBoard tasks={tasks} />
    </>
  );
}
