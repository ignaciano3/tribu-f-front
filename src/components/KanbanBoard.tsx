import React, { useState } from "react";
import Link from "next/link";
import { Task } from "@/types/types";

const KanbanBoard = (props: any) => {
  const { tasks } = props;

  const tareasNoIniciadas = tasks.filter((task: any) => task.state === "1");
  const tareasIniciadas = tasks.filter((task: any) => task.state === "string");
  const tareasEnTests = tasks.filter((task: any) => task.state === "en tests");
  const tareasFinalizadas = tasks.filter(
    (task: any) => task.state === "finalizada"
  );

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mb-4">Kanban</h1>
      </div>

      <div className="kanban-board flex m-20">
        <div className="column w-1/4 bg-gray-200 p-4 rounded-lg mr-4">
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

        <div className="column w-1/4 bg-gray-200 p-4 rounded-lg mr-4">
          <h2 className="text-xl font-bold mb-2">Iniciadas</h2>
          {tareasIniciadas.map((task: any) => (
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

        <div className="column w-1/4 bg-gray-200 p-4 rounded-lg mr-4">
          <h2 className="text-xl font-bold mb-2">En Tests</h2>
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

        <div className="column w-1/4 bg-gray-200 p-4 rounded-lg">
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
