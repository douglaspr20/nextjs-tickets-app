import { Ticket } from '@/generated/prisma/client';
import TicketCard from './TicketCard';
import { FC } from 'react';

interface Props {
  title: string;
  tickets: Ticket[];
}
const Column: FC<Props> = ({ title, tickets }) => {
  return (
    <div className='bg-white p-4 rounded shadow'>
      <h2 className='text-xl font-semibold mb-4'>{title}</h2>

      <div className='space-y-4'>
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
          />
        ))}

        {tickets.length === 0 && (
          <p className='text-gray-500 text-sm'>No tickets here</p>
        )}
      </div>
    </div>
  );
};

export default Column;
