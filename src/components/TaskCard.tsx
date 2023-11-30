"use client";
import { Task } from "@/types/types";
import Button from "@/components/button";
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Modal from "react-modal";
import axios from "axios";
import Link from "next/link";

const TaskCard = ({ task }: { task: any }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDelete = async () => {
    try {
      // Envia una solicitud POST al backend para crear un nuevo proyecto
      const response = await axios.delete(
        process.env.proyectosApiUrl + "tasks/delete_task/" + task.id
      );

      // Maneja la respuesta del backend según sea necesario
      console.log("Respuesta del backend:", response.data);

      // Puedes realizar otras acciones después de crear el proyecto, como redireccionar a una página de éxito, etc.
    } catch (error) {
      // Maneja los errores de la solicitud
      console.error("Error al crear el proyecto:", error);
    }
    closeModal();
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="bg-slate-100 p-8 rounded-lg shadow-lg">
        <div className="flex">
          <h2 className="text-2xl font-bold mb-4">{task.name}</h2>
          <div className="mt-2 ml-5 cursor-pointer">
            <Link href={`/projects/${task.project_id}/tasks/${task.id}/edit`}>
              <FaEdit size={20} />
            </Link>
          </div>
        </div>
        <div className="project-details mb-4">
          <p className="mb-5">
            <strong>Fecha de creación:</strong> {task.creation_date}
          </p>
          <p className="mb-5">
            <strong>Estado:</strong> {task.state}
          </p>
          <p className="mb-5">
            <strong>Duración estimada:</strong> {task.expected_duration_days}
          </p>
          <p className="mb-5">
            <strong>Descripción:</strong> {task.description}
          </p>
        </div>
        <div className="project-actions flex space-x-4 mt-8">
          <Button href={`/projects/${task.project_id}/tasks/`}>
            Volver a tareas
          </Button>

          <div className="mr-2 cursor-pointer mt-2" onClick={openModal}>
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
          ¿Está seguro de que quiere eliminar la tarea?
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
};

export default TaskCard;

/*
export default function TaskCard({ task }: { task: any }) {
  console.log("TaskCard -> task: ", task);
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">{task.name}</h2>
        <div className="project-details mb-4">
          <p>
            <strong>Fecha de creación:</strong> {task.creation_date}
          </p>
          <p>
            <strong>Duración estimada:</strong> {task.expected_duration_days}
          </p>
          <p>
            <strong>Descripción:</strong> {task.description}
          </p>
        </div>
        <div className="project-actions flex space-x-4">
          <Button
            href={
              "/projects/" + task.project_id + "/tasks/" + task.id + "/edit"
            }
          >
            Editar tarea
          </Button>

          <button className="delete-button">Borrar tarea</button>
        </div>
      </div>
    </div>
  );
}
*/
