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
/*
const PaginaProyectos = () => {
  const [proyectos, setProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    cargarProyectos();
  }, []);

  const cargarProyectos = async () => {
    try {
      const proyectosCargados = await obtenerProyectos();
      setProyectos(proyectosCargados);
    } catch (error) {
      console.error("Error al cargar proyectos:", error);
    }
  };

  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);
  };

  const proyectosFiltrados = proyectos.filter((proyecto) =>
    proyecto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h1>Lista de Proyectos</h1>

      
      <input
        type="text"
        value={busqueda}
        onChange={handleBusquedaChange}
        placeholder="Buscar proyectos por nombre"
      />

      
      <ProyectoLista proyectos={proyectosFiltrados} />
    </div>
  );
};
*/
/*
const ProjectGrid = async () => {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const loadProjects = async () => {
    try {
      const loadedProjects = await getProjects();
      setProjects(loadedProjects);
    } catch (error) {
      console.error("Error al cargar proyectos:", error);
    }
  };

  useEffect(() => {
    // Función para cargar proyectos

    // Llamar a la función al cargar la página
    loadProjects();
  }, []); // El segundo parámetro es una lista de dependencias, en este caso, vacía
  //const list = await getProjects();
  //console.log(list);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchButtonClick = () => {
    // Realizar la búsqueda solo cuando se hace clic en el botón
    const filteredProjects = projects.filter((project: Project) =>
      project.name.toLowerCase().includes(search.toLowerCase())
    );
    setProjects(filteredProjects);
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="container max-w-7xl mx-auto mt-8">
        <div className="flex justify-between mb-8">
          <Title title="Proyectos" className="inline" />
          <div className="flex">
            <input
              className="mr-10 rounded-lg bg-gray-100 p-4"
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder={" Buscar proyecto"}
            />
            <button onClick={handleSearchButtonClick}>Buscar</button>
            <Nuevo title="Crear nuevo proyecto" href="/projects/create" />
          </div>
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
        
      </div>
    </>
  );
};
*/
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

  const handleSearchChange = (e) => {
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
        <div className="flex flex-col">
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
