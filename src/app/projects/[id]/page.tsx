"use client";
import ProjectCard from "@/components/projectCard";
import { getProject } from "@/api/proyectos";
import { Project } from "@/types/types";
import React, { useState, useEffect } from "react";

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
