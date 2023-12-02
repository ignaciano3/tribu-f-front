import { Task } from "@/types/types";
import TaskGridRow from "@/components/taskGridRow";
import Button from "@/components/button";
import Title from "@/components/Title";
import Nuevo from "@/components/Nuevo";
import { getTasks } from "@/api/proyectos";
import React from "react";

const headers = [
  "Nombre",
  "Estado",
  "Descripcion",
  "ID Proyecto",
  "ID Tarea",
  "Fecha de creacion",
  "",
];

function HeaderItem({ title }: { title: string }) {
  return (
    <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">
      {title}
    </th>
  );
}

export default async function TaskGrid({ params }: { params: { id: string } }) {
  const id = params.id;
  const tasks = await getTasks(id);

  const href = "/projects/" + params.id + "/tasks/create";
  return (
    <>
      <div className="flex justify-between">
        <Title title="Tareas" className="inline" />
        <div className="flex gap-4 mb-8">
          <Button href={"/projects/" + params.id}>Volver al proyecto</Button>

          <Nuevo title="Crear nueva tarea" href={href} />
        </div>
      </div>
      {/*<Table data={tasks} headers={headers} RowItem={TaskGridRow} />*/}
      {/* pongo la grid de antes */}
      <div className="flex flex-col rounded">
        <table className="min-w-full shadow-lg">
          <thead>
            <tr>
              <HeaderItem title="ID" />
              <HeaderItem title="Nombre" />
              <HeaderItem title="Estado" />
              <HeaderItem title="Responsable" />
              <HeaderItem title="Fecha de creación" />
            </tr>
          </thead>
          <tbody>
            {tasks.map((task: Task) => (
              <TaskGridRow key={task.name} task={task} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

/*

      <div className="container max-w-7xl mx-auto mt-8 bg-gray-200 ">
        <div className="mb-4">
          <h1 className="text-3xl font-bold decoration-gray-400">Tareas</h1>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full bg-gray-200 ">
                <thead>
                  <tr>
                    <HeaderItem title="ID" />
                    <HeaderItem title="Nombre" />
                    <HeaderItem title="Estado" />
                    <HeaderItem title="" />
                  </tr>
                </thead>

                <tbody>
                  {list.map((task: Task) => (
                    <TaskGridRow key={task.name} task={task} id={params.id} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end bg-gray-200">
        <div></div>
        <div>
          <Button href="/tasks/create">Nueva tarea </Button>
        </div>
      </div>
      */
