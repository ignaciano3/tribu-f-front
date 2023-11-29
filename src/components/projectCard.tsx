//import Button from "@/components/button";
// components/ProjectCard.js
import Button from "@/components/button";
import { Project } from "@/types/types";
/*
export default function ProjectCard(props: any) {
  const { project } = props;

  return (
    <div className="flex justify-around">
      <div className="wbg-gray-200 ">
        <h2 className="project-name">{project.nombre}</h2>
        <div className="project-details">
          <p>
            <strong>Fecha de Inicio:</strong> {project.fecha_inicio || ""}
          </p>
          <p>
            <strong>Duración Estimada:</strong>
            {project.fecha_fin || ""}
          </p>
          <p>
            <strong>Líder de Proyecto:</strong> {project.state}
          </p>
          <p>
            <strong>Descripción:</strong> {project.description}
          </p>
        </div>
        <div className="project-actions flex">
          <div>
            <Button href={"/"}> Editar proyecto </Button>
          </div>
          <div>
            <Button href={"/"}> Eliminar proyecto </Button>
          </div>
          <div>
            <Button href={"/projects/" + project.id + "/tasks"}>
              {" "}
              Ver tareas{" "}
            </Button>
          </div>
          <div>
            <Button href={"/"}> Ver kanban </Button>
          </div>
        </div>
        
        <img
          src={
            "https://source.unsplash.com/random/300x200/?" +
            "soldiers,war,videogame,guns"
          }
          alt="random"
        />
      </div>
    </div>
  );
}
*/

import { FaEdit, FaTrash } from "react-icons/fa";

export default function ProjectCard(props: any) {
  const { project } = props;

  return (
    <div className="max-w-4xl min-h-screen mx-auto mt-8 relative">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{project.nombre}</h2>
        <div className="project-details mb-6">
          <p>
            <strong>Fecha de Inicio:</strong> {project.fecha_inicio || ""}
          </p>
          <p>
            <strong>Duración Estimada:</strong> {project.fecha_fin || ""}
          </p>
          <p>
            <strong>Líder de Proyecto:</strong> {project.state}
          </p>
          <p>
            <strong>Descripción:</strong> {project.description}
          </p>
        </div>
        <div className="project-actions flex space-x-4 items-center">
          <div className="mr-2 cursor-pointer">
            <FaTrash size={20} />
          </div>
          <Button href={"/projects/" + project.id + "/tasks"}>
            Ver tareas
          </Button>
          <Button href={"/"}>Ver kanban</Button>
          <div className="absolute top-0 right-0 mt-2 mr-4 cursor-pointer ">
            <FaEdit size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
