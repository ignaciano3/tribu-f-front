import Button from "@/components/button";
import { Task } from "@/types/types";
import React, { FormEvent, useState } from "react";


const getUsuarios = async () => {
  const response = await fetch(
    "https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos"
  );
  const data = await response.json();
  return data;
};

const EditTaskForm = (props: any) => {
  const { task, employees } = props;
  //const leaders = getUsuarios();
  console.log("EditTaskForm props: ", props);
  console.log("EditTaskForm -> task.name: ", task.name);
  const [taskData, setTaskData] = useState({
    name: task.name,
    state: task.state,
    description: task.description,
    project_id: task.project_id,
    end_date: task.end_date,
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
      const response = await fetch(
        process.env.proyectosApiUrl + "tasks/update_task/" + task.id,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(taskData),
          next: { tags: ["tasks"] },
        }
      );
      window.location.href = "/projects/" + task.project_id+"/tasks/"+task.id;
      console.log("response.ok?", response.ok);
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
            defaultValue={task.name}
            value={taskData.name}
            onChange={handleChange}
            required
          />
        </label>

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
            <option value="bloqueada">Bloqueada</option>
            <option value="en tests">En tests</option>
            <option value="finalizada">Finalizada</option>
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
          <button type="submit">Guardar cambios</button>
        </div>
        <style jsx>{`
          .task-form {
            max-width: 400px;
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
