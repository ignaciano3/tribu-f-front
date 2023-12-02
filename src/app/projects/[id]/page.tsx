"use client";
import ProjectCard from "@/components/projectCard";
import { getProject, getUsuario } from "@/api/proyectos";
import { Project } from "@/types/types";
import React, { useState, useEffect } from "react";

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const [project, setProject] = useState<Project>(); // const projects = await loadProjects();
  useEffect(() => { //No metan useEffect en un componente que es del servidor, no tiene sentido
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
  const employee: any = await getUsuario(project?.project_id_leader ?? "");
  return (
    <>
      <ProjectCard project={project} employee={employee} />
    </>
  );
}
