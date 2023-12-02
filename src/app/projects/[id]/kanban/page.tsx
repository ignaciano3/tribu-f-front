"use client";
import KanbanBoard from "@/components/KanbanBoard";
import React, { useState, useEffect } from "react";
import { getTasks } from "@/api/proyectos";

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
      <KanbanBoard project_id={id} tasks={tasks} />
    </>
  );
}
