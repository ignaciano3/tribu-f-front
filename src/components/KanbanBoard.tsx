import React, { useState } from "react";
import Link from "next/link";
import { Task } from "@/types/types";

const KanbanBoard = (props: any) => {
  const { tasks } = props;
  console.log("KANBAN BOARD -> tasks: ", tasks);
  const tareasNoIniciadas = tasks.filter(
    (task: any) => task.state === "no iniciada"
  );
  const tareasEnProceso = tasks.filter(
    (task: any) => task.state === "en proceso"
  );
  const tareasEnTests = tasks.filter((task: any) => task.state === "en tests");
  const tareasFinalizadas = tasks.filter(
    (task: any) => task.state === "finalizada"
  );

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mb-4">Kanban</h1>
      </div>

      <div className="kanban-board flex m-20 ">
        <div className="column w-1/4 bg-slate-100 p-4 rounded-lg mr-4 shadow-lg">
          <h2 className="text-xl font-bold mb-2">No Iniciadas</h2>
          {tareasNoIniciadas.map((task: any) => (
            <Link
              key={task.id}
              href={"/projects/" + task.project_id + "/tasks/" + task.id}
            >
              <div
                key={task.id}
                className="bg-white p-2 mb-2 rounded-lg shadow"
              >
                <p>{task.name}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="column w-1/4 bg-slate-100 p-4 rounded-lg mr-4 shadow-lg">
          <h2 className="text-xl font-bold mb-2">En proceso</h2>
          {tareasEnProceso.map((task: any) => (
            <Link
              key={task.id}
              href={"/projects/" + task.project_id + "/tasks/" + task.id}
            >
              <div
                key={task.id}
                className="bg-white p-2 mb-2 rounded-lg shadow"
              >
                <p>{task.name}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="column w-1/4 bg-slate-100 p-4 rounded-lg mr-4 shadow-lg">
          <h2 className="text-xl font-bold mb-2">En tests</h2>
          {tareasEnTests.map((task: any) => (
            <Link
              key={task.id}
              href={"/projects/" + task.project_id + "/tasks/" + task.id}
            >
              <div
                key={task.id}
                className="bg-white p-2 mb-2 rounded-lg shadow"
              >
                <p>{task.name}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="column w-1/4 bg-slate-100 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Finalizadas</h2>
          {tareasFinalizadas.map((task: any) => (
            <Link
              key={task.id}
              href={"/projects/" + task.project_id + "/tasks/" + task.id}
            >
              <div
                key={task.id}
                className="bg-white p-2 mb-2 rounded-lg shadow"
              >
                <p>{task.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
