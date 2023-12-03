import { Project } from "@/types/types";
import { revalidateTag, revalidatePath } from "next/cache";
import useFetch from "@/hooks/useFetch";

export async function getProjects() {
  const url = "projects/get_projects/";
  return await useFetch({
    url: url,
    soporte: false,
    revalidate: true,
    tags: ["projects"],
  });
}

export const getProject = async (id: string): Promise<Project> => {
  const url = "projects/get_project/" + id;
  return await useFetch({ url: url, soporte: false });
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

  revalidateTag("tasks");
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
  await useFetch({
    url: url,
    soporte: false,
    cache: "no-cache",
    tags: ["projects"],
    method: "POST",
    data: projectData,
  });
  revalidateTag("projects");
};

export const editProject = async (projectData: any) => {
  const url = "projects/update_project/" + projectData.id;
  await useFetch({
    url: url,
    soporte: false,
    method: "PATCH",
    data: projectData,
    cache: "no-cache",
    tags: ["projects"],
  });
  revalidateTag("projects");
  revalidatePath(`/projects/${projectData.id}/`);
};

export const createTask = async (taskData: any) => {
  const url = "tasks/create_task/";
  await useFetch({
    url: url,
    soporte: false,
    method: "POST",
    cache: "no-cache",
    tags: ["tasks"],
    data: taskData,
  });
  revalidateTag("tasks");
};

export const editTask = async (taskData: any) => {
  const url = "tasks/update_tasks/" + taskData.id;
  await useFetch({
    url: url,
    soporte: false,
    method: "PATCH",
    data: taskData,
    cache: "no-cache",
    tags: ["tasks"],
  });
  revalidateTag("tasks");
};
