import { GetClients, GetTicket } from "@/api/soporte";
import TicketCard from "@/components/TicketCard";
import { Ticket } from "@/types/types";

export default async function TicketDetail( {params} : {params : {idTicket : number}}) {
    const { idTicket } = params;

    const clients = await GetClients();
    const ticket : Ticket = await GetTicket(idTicket);

    return (
        <TicketCard ticket={ticket} clients={clients}/>
    )
}