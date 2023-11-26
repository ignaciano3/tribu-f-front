import { useEffect, useState } from 'react';


const TicketPage = ({ id }: { id: string }) => {
  // NO USAR USE EFFECT PARA FETCHING DE DATOS 
  // DEL BACK. Asi se pierde lo bueno de los 
  // server side components (que se guarda todo en el servidor)
  // ver como lo hice en users o client

  const [ticket, setTicket] = useState<any>(null);

  useEffect(() => {
    // Fetch ticket information based on the provided ID
    const fetchTicket = async () => {
      try {
        const response = await fetch(`/api/tickets/${id}`);
        const data = await response.json();
        setTicket(data);
      } catch (error) {
        console.error('Error fetching ticket:', error);
      }
    };

    fetchTicket();
  }, [id]);

  // Para esto esta el loading.tsx
  if (!ticket) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Ticket Information</h1>
      <p>ID: {ticket.id}</p>
      <p>Title: {ticket.title}</p>
      <p>Description: {ticket.description}</p>
      {/* Add more ticket information here */}
    </div>
  );
};

export default TicketPage;
