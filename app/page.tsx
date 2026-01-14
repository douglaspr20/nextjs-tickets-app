import Column from '@/components/Column';
import CreateTicketForm from '@/components/CreateTicketForm';
import { Ticket } from '@/generated/prisma/client';

async function getTickets() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tickets`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Error fetching tickets');

  return res.json();
}

export default async function HomePage() {
  const tickets = await getTickets();

  const open = tickets.filter((ticket: Ticket) => ticket.status === 'open');
  const inProgress = tickets.filter(
    (ticket: Ticket) => ticket.status === 'in_progress'
  );
  const closed = tickets.filter((ticket: Ticket) => ticket.status === 'closed');

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      <div className='flex justify-end mb-4 md:col-span-3'>
        <CreateTicketForm />
      </div>
      <Column
        title='Open'
        tickets={open}
      />
      <Column
        title='In Progress'
        tickets={inProgress}
      />
      <Column
        title='Closed'
        tickets={closed}
      />
    </div>
  );
}
