"use server";
import { createTicket } from "@/api/soporte";
import TicketForm from "@/components/TicketForm";

export default async function TicketCreate() {
  return (
    <div>
      <TicketForm action={createTicket} />
    </div>
  );
}
