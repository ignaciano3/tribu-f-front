async function getTicket(id: string) {
  const response = await fetch(`/api/tickets/${id}`);
  const data = await response.json();
  return data;
}

export default function TicketPage({ params }: { params: { id: string } }) {
  const ticket = {
    id: params.id,
    title: "Ticket Title",
    description: "Ticket Description",
  };
  return (
    <div>
      <h1>Ticket Information</h1>
      <p>ID: {params.id}</p>
      <p>Title: {ticket?.title}</p>
      <p>Description: {ticket.description}</p>
    </div>
  );
}
