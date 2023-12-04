import ProjectTable from "@/components/ProjectTable";
import { GetProjects } from "@/api/proyectos";
import React from "react";

export default async function ProjectGrid() {
  const projects = await GetProjects();
  return (
    <>
      <ProjectTable projects={projects}></ProjectTable>
    </>
  );
}
