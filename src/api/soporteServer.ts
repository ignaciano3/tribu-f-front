"use server";
import useFetch from "@/hooks/useFetch";
import { CreateTicket, CreateTicketParams, UpdateTicket } from "@/types/types";
import { revalidateTag } from "next/cache";

export async function CreateTicket(
    params: CreateTicketParams,
    formData: FormData
  ) {
    'use server'
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
  
  export async function UpdateTicket(
    idTicket: number,
    formData: FormData
  ) {
    const url = `ticket/${idTicket}`;
    const ticket: UpdateTicket = {
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
      method: "PUT",
      data: ticket,
    });
    revalidateTag("tickets");
  }