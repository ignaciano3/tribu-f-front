"use client";
import { Project } from "@/types/types";
import ProjectGridRow from "@/components/projectGridRow";
import { getProjects } from "@/api/proyectos";
import Button from "@/components/button";
import Nuevo from "@/components/Nuevo";
import Title from "@/components/Title";
import React, { useState, useEffect } from "react";

function HeaderItem({ title }: { title: string }) {
  return (
    <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">
      {title}
    </th>
  );
}

const ProjectGrid = () => {
  const [originalProjects, setOriginalProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [search, setSearch] = useState("");

  const loadProjects = async () => {
    try {
      const loadedProjects = await getProjects();
      setOriginalProjects(loadedProjects);
      setFilteredProjects(loadedProjects); // Inicialmente, muestra todos los proyectos
    } catch (error) {
      console.error("Error al cargar proyectos:", error);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSearchButtonClick = () => {
    const searchTerm = search.toLowerCase();
    const filtered = originalProjects.filter((project: Project) =>
      project.name.toLowerCase().includes(searchTerm)
    );
    setFilteredProjects(filtered);
  };

  const resetSearch = () => {
    setSearch("");
    setFilteredProjects(originalProjects);
  };

  return (
    <>
      <div className="container max-w-7xl mx-auto mt-8">
        <div className="flex justify-between mb-8 max-h-10">
          <h1 className="text-3xl font-bold decoration-gray-400">Proyectos</h1>
          <div className="flex">
            <input
              className="mr-5 rounded-lg bg-gray-100 p-4"
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Buscar proyecto"
            />
            <button
              className="mr-8 border border-gray-700 px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 dark:text-white ,hover:bg-gray-800 dark:text-white dark:hover:bg-gray-800"
              onClick={handleSearchButtonClick}
            >
              Buscar
            </button>

            <Nuevo title="Crear nuevo proyecto" href="/projects/create" />
          </div>
        </div>
        <div className="flex flex-col shadow sm:rounded-lg border-b">
          <table className="min-w-full">
            <thead>
              <tr>
                <HeaderItem title="ID" />
                <HeaderItem title="Nombre" />
                <HeaderItem title="Estado" />
                <HeaderItem title="Líder de proyecto" />
                <HeaderItem title="Fecha de creación" />
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project: Project) => (
                <ProjectGridRow key={project.name} project={project} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProjectGrid;
