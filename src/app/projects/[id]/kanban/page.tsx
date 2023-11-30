"use client";
import { Task } from "@/types/types";
import TaskGridRow from "@/components/taskGridRow";
import Button from "@/components/button";
import Title from "@/components/Title";
import Nuevo from "@/components/Nuevo";
import KanbanBoard from "@/components/KanbanBoard";
import React, { useState, useEffect } from "react";

const getTasks = async (id: string) => {
  console.log("id: ", id);
  const url =
    process.env.proyectosApiUrl +
    "tasks/get_tasks_by_project_id/{id}?project_id=" +
    id;
  console.log("URL: ", url);
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default async function KanbanPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    // Función para cargar proyectos
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
  console.log("ID: ", id);
  //const tasks = await getTasks(params.id);
  return (
    <>
      <KanbanBoard tasks={tasks} />
    </>
  );
}
