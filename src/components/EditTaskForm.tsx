"use client";
import Button from "@/components/button";
import React, { FormEvent, useState } from "react";
import { EditTask } from "@/api/proyectos";

const EditTaskForm = (props: any) => {
  const { task, employees } = props;
  //const leaders = getUsuarios();
  console.log("EditTaskForm props: ", props);
  console.log("EditTaskForm -> task.name: ", task.name);
  const [taskData, setTaskData] = useState({
    id: task.id,
    name: task.name,
    state: task.state,
    description: task.description,
    project_id: task.project_id,
    end_date: task.end_date,
    priority: task.priority,
    responsible_id: task.responsible_id,
  });

  const handleChange = (props: any) => {
    const { name, value } = props.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("data en task data", taskData);
      const data = await EditTask(taskData);
      window.location.href =
        "/projects/" + task.project_id + "/tasks/" + task.id;
      console.log("respuesta del backend al editar una task", data);
    } catch (error) {
      console.error("Error al editar tarea:", error);
    }
    // Aquí puedes manejar la lógica para enviar los datos del proyecto
    console.log("Nuevos datos de la tarea :", taskData);
  };

  return (
    <>
      <div className="container max-w-7xl mx-auto mt-8">
        <div className="mb-4">
          <h1 className="text-3xl font-bold decoration-gray-400">
            Editar tarea
          </h1>
        </div>
      </div>
      <form className="task-form bg-gray-100" onSubmit={handleSubmit}>
        <label>
          Nombre de la tarea:
          <input
            type="text"
            name="name"
            value={taskData.name}
            onChange={handleChange}
            required
          />
        </label>
        <div className="flex gap-5">
          <label>
            Responsable de la tarea:
            <select
              name="responsible_id"
              value={taskData.responsible_id}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Seleccionar responsable
              </option>
              {employees.map((employee: any) => (
                <option key={employee.legajo} value={employee.legajo}>
                  {employee.name} {employee.last_name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Estado de la tarea:
            <select
              name="state"
              value={taskData.state}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Seleccionar estado
              </option>
              <option value="no iniciada">No iniciada</option>
              <option value="en proceso">En proceso</option>
              <option value="en tests">En tests</option>
              <option value="finalizada">Finalizada</option>
            </select>
          </label>
        </div>
        <label>
          Prioridad de la tarea:
          <select
            name="priority"
            value={taskData.priority}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Seleccionar prioridad
            </option>
            <option value={"alta"}>Alta</option>
            <option value={"media"}>Media</option>
            <option value={"baja"}>Baja</option>
          </select>
        </label>

        <label>
          Descripción de la tarea:
          <textarea
            name="description"
            value={taskData.description}
            onChange={handleChange}
            required
          />
        </label>
        {/*
            <label>
          Duración estimada del proyecto:
          <input
            type="text"
            name="duration"
            value={taskData.duration}
            onChange={handleChange}
            required
          />
        </label>
        */}
        <div className="flex justify-between">
          <Button href={`/projects/${task.project_id}/tasks/${task.id}`}>
            {" "}
            {/*IMPORTANTE: NO PASAR CHILDREN COMO PROP*/}
            Volver
          </Button>
          <button type="submit">
            <strong>Guardar cambios</strong>
          </button>
        </div>
        <style jsx>{`
          .task-form {
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

export default EditTaskForm;

// //export default taskForm;

// async function enviarFormulario() {
//   // Obtener referencias a los elementos del formulario
//   const nombreInput = document.getElementById('nombre') as HTMLInputElement;
//   const edadInput = document.getElementById('edad') as HTMLInputElement;

//   // Obtener los valores de los elementos
//   const nombre = nombreInput.value;
//   const edad = parseInt(edadInput.value, 10);

// const hola: task = {
//   nombre,
//   edad,
// };

// // Enviar los datos a la API utilizando fetch
// try {
//   const response = await fetch('URL_DE_TU_API', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       // Puedes agregar otros encabezados según las necesidades de tu API
//     },
//     body: JSON.stringify(formData),
//   });

//   if (response.ok) {
//     // La solicitud fue exitosa
//     console.log('Datos enviados correctamente');
//   } else {
//     // La solicitud falló
//     console.error('Error al enviar los datos a la API');
//   }
// } catch (error) {
//   console.error('Error de red:', error);
// }
// }
