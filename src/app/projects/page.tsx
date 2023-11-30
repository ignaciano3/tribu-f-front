"use client";
import { Project } from "@/types/types";
import ProjectGridRow from "@/components/projectGridRow";
import Button from "@/components/button";
import Nuevo from "@/components/Nuevo";
import Title from "@/components/Title";
import React, { useState, useEffect } from "react";

const getProjects = async () => {
  //poner nuestra base de datos
  const url = process.env.proyectosApiUrl + "projects/get_projects/";
  const response = await fetch(url); //poner nuestra base de datos
  const data = await response.json();
  console.log("PROJECTS: ", data);
  return data;
};

function HeaderItem({ title }: { title: string }) {
  return (
    <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">
      {title}
    </th>
  );
}
/*

const PaginaProyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    // Función para cargar proyectos
    const cargarProyectos = async () => {
      try {
        const proyectosCargados = await obtenerProyectos();
        setProyectos(proyectosCargados);
      } catch (error) {
        console.error("Error al cargar proyectos:", error);
      }
    };

    // Llamar a la función al cargar la página
    cargarProyectos();
  }, []); // El segundo parámetro es una lista de dependencias, en este caso, vacía

  return (
    <div>
      <h1>Lista de Proyectos</h1>
      <ProyectoLista proyectos={proyectos} />
    </div>
  );
};
*/
const ProjectGrid = async () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    // Función para cargar proyectos
    const loadProjects = async () => {
      try {
        const loadedProjects = await getProjects();
        setProjects(loadedProjects);
      } catch (error) {
        console.error("Error al cargar proyectos:", error);
      }
    };

    // Llamar a la función al cargar la página
    loadProjects();
  }, []); // El segundo parámetro es una lista de dependencias, en este caso, vacía
  //const list = await getProjects();
  //console.log(list);
  return (
    <>
      <div className="container max-w-7xl mx-auto mt-8">
        <div className="flex justify-between mb-8">
          <Title title="Proyectos" className="inline" />
          <Nuevo title="Crear nuevo proyecto" href="/projects/create" />
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <HeaderItem title="ID" />
                    <HeaderItem title="Nombre" />
                    <HeaderItem title="Estado" />
                    <HeaderItem title="" />
                  </tr>
                </thead>

                <tbody>
                  {projects.map((project: Project) => (
                    <ProjectGridRow key={project.name} project={project} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <div></div>
        {/*<div>
          <Button href="/projects/create">Nuevo Proyecto</Button>
                  </div>*/}
      </div>
    </>
  );
};

export default ProjectGrid;
