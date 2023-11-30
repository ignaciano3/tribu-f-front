"use client";
import { Task } from "@/types/types";
import TaskGridRow from "@/components/taskGridRow";
import Button from "@/components/button";
import Table from "@/components/Table/Table";
import Title from "@/components/Title";
import Nuevo from "@/components/Nuevo";
import React, { useState, useEffect } from "react";

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
  "Estado",
  "Descripcion",
  "ID Proyecto",
  "ID Tarea",
  "Fecha de creacion",
  "",
];

export default async function TaskGrid({ params }: { params: { id: string } }) {
  const id = params.id;
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    // Función para cargar tareas

    const loadTasks = async (id: string) => {
      try {
        const loadedTasks = await getTasks(id);
        setTasks(loadedTasks);
      } catch (error) {
        console.error("Error al cargar proyectos:", error);
      }
    };

    // Llamar a la función al cargar la página
    loadTasks(id);
  }, [id]);
  /*const list = await getTasks(params.id);
  console.log("list: ", list);
  const id = params.id;
  console.log("id: ", id);
  */
  const href = "/projects/" + params.id + "/tasks/create";
  return (
    <>
      <div className="flex justify-between">
        <Title title="Tareas" className="inline" />
        <div className="flex gap-4">
          <Button href={"/projects/" + params.id}>Volver al proyecto</Button>

          <Nuevo title="Crear nueva tarea" href={href} />
        </div>
      </div>
      <Table data={tasks} headers={headers} RowItem={TaskGridRow} />
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
