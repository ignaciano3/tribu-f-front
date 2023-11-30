import { DAY } from "@/constants/constants";
import { Ticket } from "@/types/types";

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

export async function getProducts() {
  const response = await fetch(
    process.env.soporteApiUrl + `product`,
    { next: { revalidate: DAY } }
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Hubo un error en el back");
  }
}

export async function createTicket(formData : FormData) {
  'use server'
  console.log(formData)
  const response  = await fetch(
    process.env.soporteApiUrl + `ticket`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    }
  );

  if (response.ok) { // Revisar si recibe algo
    const data = await response.json();
    return data;
  } else {
    throw new Error("Hubo un error en el back");
  }
}
