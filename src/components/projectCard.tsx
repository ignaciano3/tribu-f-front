"use client";
import Button from "@/components/button";
import { Project } from "@/types/types";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Modal from "react-modal";
import axios from "axios";
import Link from "next/link";

export default function ProjectCard(props: any) {
  const { project } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDelete = async () => {
    try {
      // Envia una solicitud POST al backend para crear un nuevo proyecto
      const response = await axios.delete(
        process.env.proyectosApiUrl + "projects/delete_project/" + project.id
      );

      // Maneja la respuesta del backend según sea necesario
      console.log("Respuesta del backend:", response.data);

      // Puedes realizar otras acciones después de crear el proyecto, como redireccionar a una página de éxito, etc.
    } catch (error) {
      // Maneja los errores de la solicitud
      console.error("Error al crear el proyecto:", error);
    }

    console.log("Eliminar proyecto:", project.id);
    // Simulación de éxito; deberías realizar la lógica del backend aquí
    closeModal();
  };

  return (
    <div className="max-w-4xl min-h-screen mx-auto mt-8 relative">
      <div className="bg-slate-100 p-8 rounded-lg shadow-lg">
        <div className="flex">
          <h2 className="text-3xl font-bold mb-8">{project.name}</h2>
          <div className="mt-2 ml-5 cursor-pointer">
            <Link href={`/projects/${project.id}/edit`}>
              <FaEdit size={20} />
            </Link>
          </div>
        </div>

        <div className="project-details mb-6">
          <p className="mb-5">
            <strong>Fecha de creación:</strong> {project.creation_date || ""}
          </p>
          <p className="mb-5">
            <strong>Duración estimada:</strong>{" "}
            {project.expected_duration_days || ""} {"días"}
          </p>
          <p className="mb-5">
            <strong>Estado:</strong> {project.state}
          </p>
          <p className="mb-5 max-w-md">
            <strong>Descripción:</strong> {project.description}
          </p>
        </div>
        <div className="project-actions flex space-x-4 items-center">
          <div className="flex space-x-4">
            <Button href={`/projects/${project.id}/tasks`}>Ver tareas</Button>
            <Button href={`/projects/${project.id}/kanban`}>Ver kanban</Button>
            <Button href={`/projects/`}>Volver a proyectos</Button>
          </div>

          <div className="mr-2 cursor-pointer" onClick={openModal}>
            <FaTrash size={20} />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "40%",
            maxHeight: "35%",
          },
        }}
        overlayStyle={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0)",
        }}
      >
        <div className="text-l font-bold mb-4 p-4 bg-white">
          ¿Está seguro de que quiere eliminar el proyecto?
        </div>
        <div className="flex justify-end p-4 bg-white">
          <button
            className="bg-red-500 text-white mt-15 py-2 px-4 rounded mr-2"
            onClick={handleDelete}
          >
            Eliminar
          </button>
          <button
            className="bg-gray-300 text-gray-700 mt-15 py-2 px-4 rounded"
            onClick={closeModal}
          >
            Cancelar
          </button>
        </div>
      </Modal>
    </div>
  );
}
