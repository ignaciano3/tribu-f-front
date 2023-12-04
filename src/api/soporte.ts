import { revalidateTag } from "next/cache";
import useFetch from "@/hooks/useFetch";
import { CreateTicket, CreateTicketParams, Ticket, UpdateTicket } from "@/types/types";

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

export async function GetTicket(idTicket: number) {
  const url = `ticket/${idTicket}`;
  return await useFetch({
    url: url,
    soporte: true,
    revalidate: false,
    tags: ["tickets"],
  });
}

export async function DeleteTicket(idTicket: string) {
  const url = `ticket/${idTicket}`;
  await useFetch({
    url: url,
    soporte: true,
    revalidate: true,
    tags: ["tickets"],
    method: "DELETE",
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


export async function GetAssignmentTicket(ticketId: string) {
  const url = `assignment/ticket/${ticketId}`;
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
  console.log("assignment creada: ", assignment);
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
