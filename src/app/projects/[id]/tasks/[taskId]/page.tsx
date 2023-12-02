"use client";
import { Task } from "@/types/types";
import Button from "@/components/button";
import TaskCard from "@/components/TaskCard";
import React, { useState, useEffect } from "react";
import { getTask, getUsuario } from "@/api/proyectos";

function HeaderItem({ title }: { title: string }) {
  return (
    <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">
      {title}
    </th>
  );
}

export default async function TaskCardPage({
  params,
}: {
  params: { id: string; taskId: string };
}) {
  /*console.log("ID: ", params.id);
  console.log("TASK ID: ", params.taskId);
  const task = await getTask(params.taskId);
  console.log("TaskCardPage-> task: ", task);
  */
  const taskId = params.taskId;
  const [task, setTask] = useState([]);
  useEffect(() => {
    // Función para cargar proyectos
    const loadTask = async (id: string) => {
      try {
        const loadedTask = await getTask(id);
        setTask(loadedTask);
      } catch (error) {
        console.error("Error al cargar proyectos:", error);
      }
    };

    // Llamar a la función al cargar la página
    loadTask(taskId);
  }, [taskId]);
  console.log("TaskCardPage, task: ", task);
  const employee = await getUsuario(task.responsible_id);
  return (
    <>
      <TaskCard task={task} employee={employee} />
    </>
  );
}
