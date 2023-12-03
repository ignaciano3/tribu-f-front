"use client";
import Button from "@/components/button";
import React, { FormEvent, useState } from "react";
import { CreateProject } from "@/api/proyectos";

export default function ProjectForm(props: any) {
  const { employees } = props;
  const [isProjectCreated, setIsProjectCreated] = useState(false);
  const [projectData, setProjectData] = useState({
    name: "",
    state: "no iniciado",
    description: "",
    project_leader_id: "",
    expected_duration_days: "",
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
    try {
      const data = await CreateProject(projectData);
      console.log("Data del proyecto creado: ", data);
      window.location.href = "/projects/" + data.id;
    } catch (error) {
      console.error("Error al crear el proyecto:", error);
    }
    console.log("Datos del proyecto:", projectData);
  };

  return (
    <>
      <div className="container max-w-7xl mx-auto mt-8">
        <div className="mb-4">
          <h1 className="text-3xl font-bold decoration-gray-400">
            Nuevo proyecto
          </h1>
        </div>
      </div>
      <form className="project-form bg-gray-100" onSubmit={handleSubmit}>
        <label>
          Nombre del proyecto:
          <input
            type="text"
            name="name"
            value={projectData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Líder del proyecto:
          <select
            name="project_leader_id"
            value={projectData.project_leader_id}
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
          Descripción del proyecto:
          <textarea
            name="description"
            value={projectData.description}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Duración estimada del proyecto:
          <input
            type="number"
            name="expected_duration_days"
            value={projectData.expected_duration_days}
            onChange={handleChange}
            required
          />
        </label>

        <div className="flex justify-between">
          <Button href="/projects">
            {" "}
            {/*IMPORTANTE: NO PASAR CHILDREN COMO PROP*/}
            Volver
          </Button>

          <button type="submit">Crear proyecto</button>
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
}

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

/*
fetch("https://samplewebsite.com/API/", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    parameterOne: proyecto,
  }),
});
*/
