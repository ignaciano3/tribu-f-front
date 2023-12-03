import { CreateTicket } from "@/types/types";
import { revalidateTag } from "next/cache";
import useFetch from "@/hooks/useFetch";

export async function getTickets(versionId: string) {
  const url = `ticket/version/${versionId}`;
  return await useFetch({
    url: url,
    soporte: true,
    revalidate: true,
    tags: ["tickets"],
  });
}

export async function getVersionsOfProduct(idProd: string) {
  const url = `product/${idProd}/version`;
  return await useFetch({
    url: url,
    soporte: true,
    revalidate: true,
    tags: ["versions"],
  });
}

export async function getProducts() {
  const url = "product/";
  return await useFetch({
    url: url,
    soporte: true,
    revalidate: true,
    tags: ["products"],
  });
}

export async function getProduct(idProd: string) {
  const url = `product/${idProd}`;
  return await useFetch({
    url: url,
    soporte: true,
    revalidate: true,
    tags: ["products"],
    cache: "no-cache"
  });
}

export async function getTicket(idProd: Number) {
  const url = `ticket/${idProd}`;
  return await useFetch({
    url: url,
    soporte: true,
    revalidate: false,
    tags: ["tickets"],
  });
}

export async function createTicket(product_id: string, formData: FormData) {
  "use server";
  const url = `product/${product_id}/version/${1}/ticket/client/${1}`;
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
