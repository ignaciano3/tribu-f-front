import { Task } from "@/types/types";
import TaskGridRow from "@/components/taskGridRow";
import Button from "@/components/button";
import Title from "@/components/Title";
import Nuevo from "@/components/Nuevo";
import { GetTasks } from "@/api/proyectos";
import React from "react";

function HeaderItem({ title }: { title: string }) {
  return (
    <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">
      {title}
    </th>
  );
}

export default async function TaskGrid({ params }: { params: { id: string } }) {
  const id = params.id;
  const tasks = await GetTasks(id);

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

      <div className="flex flex-col rounded">
        {tasks.length === 0 ? (
          <p className="px-6 py-3 text-l text-center text-gray-700">
            Este proyecto no tiene tareas. Puedes crear una tarea clickeando en
            el botón arriba a la derecha.
          </p>
        ) : (
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
        )}
      </div>
    </>
  );
}
