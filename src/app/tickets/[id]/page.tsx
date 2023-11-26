import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

async function getTicket(id: string) {
  const response = await fetch(`/api/tickets/${id}`);
  const data = await response.json();
  return data;
}

export default function TicketPage () {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <div>
      <h1>Ticket Information</h1>
      <p>ID: {ticket.id}</p>
      <p>Title: {ticket.title}</p>
      <p>Description: {ticket.description}</p>
    </div>
  )
}
