"use client";
import {LinkTicketWithTask} from "@/api/soporte"
import Button from "@/components/button";
import { FormEvent, useState } from "react";
import { CreateTask } from "@/api/proyectos";


export default function AsosOldTaskForm (props: any) {
    
    const { tasks, idTicket } = props;
  
    const [asosData, setAsosData] = useState({
      id_ticket: idTicket,
      id_task: "",
    });
  
    const handleChange = (props: any) => {
      const { name, value } = props.target;
      setAsosData({
        ...asosData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await LinkTicketWithTask(asosData.id_ticket, asosData.id_task);
        window.location.href = "/tickets/" + idTicket;
      } catch (error) {
        console.error("Error al crear la tarea:", error);
      }
      // Aquí puedes manejar la lógica para enviar los datos del proyecto
      console.log("Datos de la tarea:", asosData);
    };
    return (
      <>
        <div className="container max-w-7xl mx-auto mt-8">
          <div className="mb-4">
            <h1 className="text-3xl font-bold decoration-gray-400">
              Nueva Asociacion
            </h1>
          </div>
        </div>
        <form className="project-form bg-gray-100" onSubmit={handleSubmit}>
          <div className="flex gap-5">
            <label>
              Tarea:
              <select
                name="id_task"
                value={asosData.id_task}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Seleccionar tarea
                </option>
                {tasks.map((task: any) => (
                  <option key={task.id} value={task.id}>
                    {task.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
  
          <div className="flex justify-between">
            <Button href={"/tickets/" +idTicket}>
              {" "}
              {/*IMPORTANTE: NO PASAR CHILDREN COMO PROP*/}
              Volver
            </Button>
            <button type="submit">
              <strong>Crear asociación</strong>
            </button>
          </div>
          <style jsx>{`
            .project-form {
              max-width: 500px;
              margin: 0 auto;
              padding: 20px;
              border: 1px solid #ccc;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
  
            label {
              display: block;
              margin-bottom: 10px;
            }
  
            input,
            select,
            textarea {
              width: 100%;
              padding: 8px;
              margin-top: 4px;
              margin-bottom: 12px;
              border: 1px solid #ccc;
              border-radius: 4px;
              box-sizing: border-box;
            }
  
            button {
              background-color: #384454;
              color: #fff;
              padding: 10px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
            }
  
            button:hover {
              background-color: #273343;
            }
          `}</style>
        </form>
      </>
    );
  };