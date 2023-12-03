import { revalidateTag } from "next/cache";
import useFetch from "@/hooks/useFetch";
import { CreateTicket, CreateTicketParams } from "@/types/types";

export async function GetClients(){
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
    cache: "no-cache"
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

export async function CreateTicket(params : CreateTicketParams, formData: FormData) {
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
