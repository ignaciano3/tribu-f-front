import { Task } from "@/types/types";
import { create } from "domain";
import React from "react";

//const { name, createdAt, estimatedTime, leader, description } = project;
/*
  nombre: str
description: str
fecha_inicio: date  # creacion o de inicio del trabajo? TODO definir
fecha_fin: Optional[date] = None
estados: str  # Posibles estados: Iniciada, no iniciada, finalizada
id_proyecto: Optional[int] = Field(default=None, foreign_key="proyectos.id")
  */
export default function TaskCard({ task }: { task: any }) {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">{task.nombre}</h2>
        <div className="project-details mb-4">
          <p>
            <strong>Fecha de Inicio:</strong> {task.fecha_inicio}
          </p>
          <p>
            <strong>Duración Estimada:</strong> {task.fecha_fin}
          </p>
          <p>
            <strong>Descripción:</strong> {task.description}
          </p>
        </div>
        <div className="project-actions flex space-x-4">
          <button className="edit-button">Editar tarea</button>
          <button className="delete-button">Borrar tarea</button>
        </div>
      </div>
    </div>
  );
}

/*
        <style jsx>{`
          .project-card {
            max-width: 700px;
            min-width: 1000px;
            min-height: 500px;
            max-height: 700px;
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .project-name {
            font-size: 24px;
            margin-bottom: 10px;
          }

          .project-details {
            margin-bottom: 20px;
          }

          .project-details p {
            margin: 8px 0;
          }

          .project-actions button {
            background-color: #3498db;
            color: #fff;
            padding: 8px;
            margin-right: 8px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          .project-actions button:hover {
            background-color: #2980b9;
          }
        `}</style>*/
