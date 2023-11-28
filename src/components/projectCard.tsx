//import Button from "@/components/button";
// components/ProjectCard.js
import Button from "@/components/button";
import React from "react";

const ProjectCard = ({ project }: { project: any }) => {
  //const { name, createdAt, estimatedTime, leader, description } = project;
  console.log(project);
  return (
    <div className="flex justify-around">
      <div className="project-card bg-gray-200 ">
        <h2 className="project-name">{project.name}</h2>
        <div className="project-details">
          <p>
            <strong>Fecha de Inicio:</strong> 22/02/2022
          </p>
          <p>
            <strong>Duración Estimada:</strong> 40 horas
          </p>
          <p>
            <strong>Líder de Proyecto:</strong> Ignacio
          </p>
          <p>
            <strong>Descripción:</strong> Descripcion
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
            <Button href={"/"}> Ver tareas </Button>
          </div>
          <div>
            <Button href={"/"}> Ver kanban </Button>
          </div>
          
        </div>
        {/* Le meti una imagen random por si les gusta, en el ? poner tags, ejemplo: war */}
        <img
          src={
            "https://source.unsplash.com/random/300x200/?" +
            "soldiers,war,videogame,guns"
          }
          alt="random"
        />

        <style jsx>{`
          .project-card {
            max-width: 700px;
            min-width: 1000px;
            min-height: 500px;
            max-height: 700px;
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .project-name {
            font-size: 24px;
            margin-bottom: 10px;
          }

          .project-details {
            margin-bottom: 20px;
          }

          .project-details p {
            margin: 8px 0;
          }

          .project-actions Button {
            background-color: #3498db;
            color: #fff;
            padding: 8px;
            margin-right: 8px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          .project-actions Button:hover {
            background-color: #2980b9;
          }

          .project-actions div {
            margin: 4px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ProjectCard;
