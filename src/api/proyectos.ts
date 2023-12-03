import { Project } from "@/types/types";
import { revalidateTag } from "next/cache";
import useFetch from "@/hooks/useFetch";

export async function getProjects() {
  const url = "projects/get_projects/";
  return await useFetch({
    url: url,
    soporte: false,
    //revalidate: true,
    tags: ["projects"],
    cache: "no-cache",
  });
}

export const getProject = async (id: string): Promise<Project> => {
  const url = "projects/get_project/" + id;
  return await useFetch({
    url: url,
    soporte: false,
    //revalidate: true,
    tags: ["projects"],
    cache: "no-cache",
  });
};

export const deleteProject = async (id: any) => {
  const url = "projects/delete_project/" + id;
  const data = await useFetch({
    url: url,
    soporte: false,
    revalidate: true,
    method: "DELETE",
    //cache: "no-cache",
    tags: ["projects"],
  });
  return data;
};

export const getTasks = async (id: string) => {
  const url = "tasks/get_tasks_by_project_id/{id}?project_id=" + id;
  return await useFetch({
    url: url,
    soporte: false,
    tags: ["tasks"],
    cache: "no-cache",
  });
};

export const getTask = async (id: string) => {
  const url = "tasks/get_task/" + id;
  const data = await useFetch({
    url: url,
    soporte: false,
    tags: ["tasks"],
    cache: "no-cache",
  });

  //revalidateTag("tasks");
  return data;
};

export const getUsuarios = async () => {
  const url = "employees/get_employees";
  return await useFetch({
    url: url,
    soporte: false,
    tags: ["users"],
    cache: "no-cache",
  });
};

export const getUsuario = async (id: string) => {
  const url = "employees/get_employee/" + id;
  return await useFetch({
    url: url,
    soporte: false,
    tags: ["users"],
    cache: "no-cache",
  });
};

export const createProject = async (projectData: any) => {
  const url = "projects/create_project";
  const data = await useFetch({
    url: url,
    soporte: false,
    revalidate: true,
    cache: "no-cache",
    tags: ["projects"],
    method: "POST",
    data: projectData,
  });
  //revalidateTag("projects");
  return data;
};

export const editProject = async (projectData: any) => {
  const url = "projects/update_project/" + projectData.id;
  const data = await useFetch({
    url: url,
    soporte: false,
    method: "PATCH",
    revalidate: true,
    data: projectData,
    cache: "no-cache",
    tags: ["projects"],
  });
  //revalidateTag("projects");
  //revalidatePath(`/projects/${projectData.id}/`);
  return data;
};

export const createTask = async (taskData: any) => {
  const url = "tasks/create_task/";
  const data = await useFetch({
    url: url,
    soporte: false,
    method: "POST",
    revalidate: true,
    cache: "no-cache",
    tags: ["tasks"],
    data: taskData,
  });
  //revalidateTag("tasks");
  return data;
};

export const editTask = async (taskData: any) => {
  const url = "tasks/update_task/" + taskData.id;
  const data = await useFetch({
    url: url,
    soporte: false,
    revalidate: true,
    method: "PATCH",
    data: taskData,
    cache: "no-cache",
    tags: ["tasks"],
  });
  return data;
};

export const deleteTask = async (id: any) => {
  const url = "tasks/delete_task/" + id;
  const data = await useFetch({
    url: url,
    soporte: false,
    revalidate: true,
    method: "DELETE",
    tags: ["tasks"],
  });
  return data;
};
