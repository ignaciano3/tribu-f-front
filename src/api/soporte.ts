import { DAY } from "@/constants/constants";
import { CreateTicket } from "@/types/types";
import { revalidatePath } from "next/cache";

export async function getTickets(idProd: string) {
  const response = await fetch(
    process.env.soporteApiUrl + `product/${idProd}/ticket`,
    { next: { revalidate: DAY } }
  );
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return data;
  } else {
    throw new Error("Hubo un error en el back");
  }
}

export async function getVersionsOfProduct(idProd: string) {
  const response = await fetch(
    process.env.soporteApiUrl + `product/${idProd}/version`,
    { next: { revalidate: DAY } }
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Hubo un error en el back");
  }
}

export async function getProducts() {
  const response = await fetch(process.env.soporteApiUrl + `product/`, {
    next: { revalidate: DAY }
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Hubo un error en el back");
  }
}

export async function getProduct(idProd: string) {
  //Deberia ser no cache pero no lo pongo para evitar el caso que no este activo el back
  const response = await fetch(process.env.soporteApiUrl + `product/${idProd}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Hubo un error en el back");
  }
}

export async function getTicket(idProd: Number) {
  const response = await fetch(process.env.soporteApiUrl + `ticket/${idProd}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Hubo un error en el back");
  }
}

export async function createTicket(product_id: string, formData: FormData) {
  "use server";

  const ticket: CreateTicket = {
    title: formData.get("title") as string,
    severity: formData.get("severity") as string,
    priority: formData.get("priority") as string,
    state: formData.get("state") as string,
    description: formData.get("description") as string,
    product_id: product_id,
  };
  const response = await fetch(process.env.soporteApiUrl + `ticket`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticket),
    next: { tags: ["tickets"] },
  });

  if (response.ok) {
    revalidatePath(`/producs/${product_id}/`);
  } else {
    throw new Error("Hubo un error en el back");
  }
}
