import { revalidateTag } from "next/cache";
import useFetch from "@/hooks/useFetch";
import { CreateTicketParams } from "@/types/types";

export async function GetClients() {
  const url = "client/";
  return await useFetch({
    url: url,
    soporte: true,
    revalidate: true,
    tags: ["clients"],
  });
}

export async function GetUsers() {
  const url = "user/";
  return await useFetch({
    url: url,
    soporte: true,
    revalidate: true,
    tags: ["users"],
  });
}

export async function GetTickets(versionId: string) {
  const url = `ticket/version/${versionId}`;
  return await useFetch({
    url: url,
    soporte: true,
    revalidate: true,
    tags: ["tickets"],
  });
}

export async function GetVersionsOfProduct(idProd: string) {
  const url = `version/product/${idProd}`;
  return await useFetch({
    url: url,
    soporte: true,
    revalidate: true,
    tags: ["versions"],
  });
}

export async function GetProducts() {
  const url = "product/";
  return await useFetch({
    url: url,
    soporte: true,
    revalidate: true,
    tags: ["products"],
  });
}

export async function GetProduct(idProd: string) {
  const url = `product/${idProd}`;
  return await useFetch({
    url: url,
    soporte: true,
    revalidate: true,
    tags: ["products"],
    cache: "no-cache",
  });
}

export async function GetTicket(idProd: Number) {
  const url = `ticket/${idProd}`;
  return await useFetch({
    url: url,
    soporte: true,
    revalidate: false,
    tags: ["tickets"],
  });
}

export async function CreateTicket(
  params: CreateTicketParams,
  formData: FormData
) {
  "use server";
  const url = `ticket/version/${params.version_id}/client/${params.client_id}`;
  const ticket: CreateTicket = {
    title: formData.get("title") as string,
    severity: formData.get("severity") as string,
    priority: formData.get("priority") as string,
    state: formData.get("state") as string,
    description: formData.get("description") as string,
  };
  await useFetch({
    url: url,
    soporte: true,
    revalidate: true,
    tags: ["tickets"],
    method: "POST",
    data: ticket,
  });
  revalidateTag("tickets");
}

export async function GetAssignmentTask(idTask: string) {
  const url = `assignment/task/${idTask}`;
  revalidateTag("tickets");
  return await useFetch({
    url: url,
    soporte: true,
    revalidate: true,
    tags: ["tickets"],
  });
}

export async function LinkTicketWithTask(ticketId: string, taskId: string) {
  const url = `assignment/ticket/${ticketId}`;
  // creo el assignment pasandole el id del ticket
  const assignment = await useFetch({
    url: url,
    soporte: true,
    revalidate: true,
    method: "POST",
    tags: ["tickets"],
  });

  // linkeo el ticket y la tarea pasandole el id de la tarea
  // al assignment
  const task = { task_id: taskId };
  const updateUrl = `assignment/${assignment.id}`;
  await useFetch({
    url: updateUrl,
    soporte: true,
    revalidate: true,
    method: "PUT",
    tags: ["tickets"],
    data: task,
  });
}
