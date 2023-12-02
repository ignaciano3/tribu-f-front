import { Project, Task } from "@/types/types";

export const getProjects = async () => {
  const url = process.env.proyectosApiUrl + "projects/get_projects/";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getProject = async (id: string): Promise<Project> => {
  const url = process.env.proyectosApiUrl + "projects/get_project/" + id;

  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Hubo un error en el back");
  }
};

export const getTasks = async (id: string) => {
  console.log("id: ", id);
  const url =
    process.env.proyectosApiUrl +
    "tasks/get_tasks_by_project_id/{id}?project_id=" +
    id;
  console.log("URL: ", url);
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getTask = async (id: string) => {
  const url = process.env.proyectosApiUrl + "tasks/get_task/" + id;
  const response = await fetch(url);

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("Hubo un error al obtener los datos");
  }
};

export const getUsuarios = async () => {
  const url = process.env.proyectosApiUrl + "employees/get_employees";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
