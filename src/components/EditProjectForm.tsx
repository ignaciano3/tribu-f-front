import Button from "@/components/button";
import { Project } from "@/types/types";
import React, { FormEvent, useState } from "react";
import axios from "axios";

const getUsuarios = async () => {
  const response = await fetch(
    "https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos"
  );
  const data = await response.json();
  return data;
};

const EditProjectForm = (props: any) => {
  const { project, employees } = props;
  const [projectData, setProjectData] = useState({
    name: project.name,
    project_leader_id: project.project_leader_id,
    description: project.description,
    expected_duration_days: project.expected_duration_days,
    state: project.state,
  });

  const handleChange = (props: any) => {
    const { name, value } = props.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /*fetch(process.env.proyectosApiUrl + "/projects/create_project", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parameterOne: projectData,
      }),
    });
    */
    try {
      // Envia una solicitud POST al backend para crear un nuevo proyecto
      const response = await axios.patch(
        process.env.proyectosApiUrl + "projects/update_project/" + project.id,
        projectData
      );

      // Maneja la respuesta del backend según sea necesario
      console.log("Respuesta del backend:", response.data);

      // Puedes realizar otras acciones después de crear el proyecto, como redireccionar a una página de éxito, etc.
    } catch (error) {
      // Maneja los errores de la solicitud
      console.error("Error al crear el proyecto:", error);
    }
    // Aquí puedes manejar la lógica para enviar los datos del proyecto
    console.log("Datos del proyecto:", projectData);
  };

  return (
    <>
      <div className="container max-w-7xl mx-auto mt-8">
        <div className="mb-4">
          <h1 className="text-3xl font-bold decoration-gray-400">
            Editar proyecto
          </h1>
        </div>
      </div>
      <form className="project-form bg-gray-100" onSubmit={handleSubmit}>
        <label>
          Nombre del proyecto:
          <input
            type="text"
            name="name"
            defaultValue={project.name}
            value={projectData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Líder del proyecto:
          <select
            name="project_leader_id"
            defaultValue={projectData.project_leader_id}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Seleccionar líder
            </option>
            {employees.map((employee: any) => (
              <option key={employee.legajo} value={employee.legajo}>
                {employee.name} {employee.last_name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Estado del proyecto:
          <select
            name="state"
            defaultValue={projectData.state}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Seleccionar estado
            </option>
            <option value="no iniciado">No iniciado</option>
            <option value="en proceso">En proceso</option>
            <option value="bloqueado">Bloqueado</option>
            <option value="finalizado">Finalizado</option>
          </select>
        </label>

        <label>
          Descripción del proyecto:
          <textarea
            name="description"
            defaultValue={projectData.description}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Duración estimada del proyecto:
          <input
            type="number"
            name="expected_duration_days"
            defaultValue={project.expected_duration_days}
            onChange={handleChange}
            required
          />
        </label>

        <div className="flex justify-between">
          <Button href={`/projects/${project.id}`}>
            {" "}
            {/*IMPORTANTE: NO PASAR CHILDREN COMO PROP*/}
            Volver
          </Button>
          <button type="submit">Guardar cambios</button>
        </div>
        <style jsx>{`
          .project-form {
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

export default EditProjectForm;

// //export default ProjectForm;

// async function enviarFormulario() {
//   // Obtener referencias a los elementos del formulario
//   const nombreInput = document.getElementById('nombre') as HTMLInputElement;
//   const edadInput = document.getElementById('edad') as HTMLInputElement;

//   // Obtener los valores de los elementos
//   const nombre = nombreInput.value;
//   const edad = parseInt(edadInput.value, 10);

// const hola: Project = {
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
