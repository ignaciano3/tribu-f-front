// components/ProjectForm.js
/*
import React, { useState } from 'react';

const ProjectForm = () => {
  const [projectData, setProjectData] = useState({
    name: '',
    leader: '',
    description: '',
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos del proyecto
    console.log('Datos del proyecto:', projectData);
  };

  return (
    <>
        <div className="container max-w-7xl mx-auto mt-8">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold decoration-gray-400">Nuevo proyecto</h1>
                </div>
        </div>
    
    <form className="project-form" onSubmit={handleSubmit}>
        
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
        <input
          type="text"
          name="leader"
          value={projectData.leader}
          onChange={handleChange}
          required
        />
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
          type="text"
          name="duration"
          value={projectData.duration}
          onChange={handleChange}
          required
        />
      </label>
    
      <button type="submit">Crear proyecto</button>
    
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
          background-color: #2980b9;
        }
      `}</style>
    </form>
    </>
  );
};
*/

// components/ProjectForm.js

// components/ProjectForm.js
import Button from "@/components/button";

import React, { useState } from 'react';
import { Cliente } from "@/types/types";

const getUsuarios = async () => {
    const response = await fetch(
      "https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos"
    );
    const data = await response.json();
    return data;
};


const ProjectForm = () => {
    const leaders = getUsuarios();

  const [projectData, setProjectData] = useState({
    name: '',
    leader: '',
    description: '',
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos del proyecto
    console.log('Datos del proyecto:', projectData);
  };

  return (
    <>  
        <div className="container max-w-7xl mx-auto mt-8">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold decoration-gray-400">Nuevo proyecto</h1>
                </div>
        </div>
        <form className="project-form" onSubmit={handleSubmit}>
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
            name="leader"
            value={projectData.leader}
            onChange={handleChange}
            required
            >
            <option value="" disabled>
                Seleccionar líder
            </option>
            <option value="lider1">lider 1</option>
            <option value="lider2">lider 2</option>
            {/* Puedes agregar más opciones según sea necesario */}
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
            type="text"
            name="duration"
            value={projectData.duration}
            onChange={handleChange}
            required
            />
        </label>
          
        <div className="flex justify-between">
            <button type="submit">Crear proyecto</button>
            
            <Button children="Volver" href="/projects"/>
            
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

export default ProjectForm;




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