"use client";
import ProjectCard from "@/components/projectCard";
import { Project } from "@/types/types";
import React, { useState, useEffect } from "react";

const getProject = async (id: string): Promise<Project> => {
  //poner nuestra base de datos
  const url = process.env.proyectosApiUrl + "projects/get_project/" + id;

  const response = await fetch(url); //poner nuestra base de datos
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Hubo un error en el back");
  }
};

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const [project, setProject] = useState([]);
  useEffect(() => {
    // Función para cargar proyectos
    const loadProject = async (id: string) => {
      try {
        const loadedProject = await getProject(id);
        setProject(loadedProject);
      } catch (error) {
        console.error("Error al cargar proyectos:", error);
      }
    };

    loadProject(id);
  }, [id]);
  return (
    <>
      <ProjectCard project={project} />
    </>
  );
}
