"use client";
import Button from "@/components/button";
import { Project } from "@/types/types";
import { useState } from "react";
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
              </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clip-rule="evenodd"
              />
            </svg>
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
