import { Project } from "@/types/types";
import useFetch from "@/hooks/useFetch";

export async function GetProjects() {
  const url = "projects/get_projects/";
  return await useFetch({
    url: url,
    soporte: false,
    //revalidate: true,
    tags: ["projects"],
    cache: "no-cache",
  });
}

export const GetProject = async (id: string): Promise<Project> => {
  const url = "projects/get_project/" + id;
  return await useFetch({
    url: url,
    soporte: false,
    //revalidate: true,
    tags: ["projects"],
    cache: "no-cache",
  });
};

export const DeleteProject = async (id: any) => {
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

export const GetTasks = async (id: string) => {
  const url = "tasks/get_tasks_by_project_id/{id}?project_id=" + id;
  return await useFetch({
    url: url,
    soporte: false,
    tags: ["tasks"],
    cache: "no-cache",
  });
};


export const GetAllTasks = async () => {
  const url = "tasks/get_tasks/";
  return await useFetch({
    url: url,
    soporte: false,
    tags: ["tasks"],
    cache: "no-cache",
  });
};

export const GetTask = async (id: string) => {
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

export const GetUsuarios = async () => {
  const url = "employees/get_employees";
  return await useFetch({
    url: url,
    soporte: false,
    tags: ["users"],
    cache: "no-cache",
  });
};

export const GetUsuario = async (id: string) => {
  const url = "employees/get_employee/" + id;
  return await useFetch({
    url: url,
    soporte: false,
    tags: ["users"],
    cache: "no-cache",
  });
};

export const CreateProject = async (projectData: any) => {
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

export const EditProject = async (projectData: any) => {
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

export const CreateTask = async (taskData: any) => {
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

export const EditTask = async (taskData: any) => {
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

export const DeleteTask = async (id: any) => {
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
