import React from "react";
import Link from "next/link";
import Button from "@/components/button";

const KanbanBoard = (props: any) => {
  const { project_id, tasks } = props;
  //const {project_id} = props; { tasks } = props;
  console.log("KANBAN BOARD -> tasks: ", tasks);
  const tareasNoIniciadas = tasks.filter(
    (task: any) => task.state === "no iniciada" || task.state === "No iniciado"
  );
  const tareasEnProceso = tasks.filter(
    (task: any) => task.state === "en proceso" || task.state === "Iniciado"
  );
  const tareasEnTests = tasks.filter((task: any) => task.state === "en tests");
  const tareasFinalizadas = tasks.filter(
    (task: any) => task.state === "finalizada" || task.state === "Finalizado"
  );

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-4">Kanban</h1>
        <Button href={"/projects/" + project_id}>Volver al proyecto</Button>
      </div>

      <div className="kanban-board flex m-10 h-3/4">
        <div
          className="column w-1/4 bg-slate-100 p-4 rounded-lg mr-4 shadow-lg"
          style={{ minHeight: "400px" }}
        >
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
