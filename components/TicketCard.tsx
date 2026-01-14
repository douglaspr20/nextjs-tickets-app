import Link from 'next/link';
import StatusBadge from './StatusBadge';
import { Ticket } from '@/generated/prisma/client';
import { FC } from 'react';

interface Props {
  ticket: Ticket;
}

const TicketCard: FC<Props> = ({ ticket }) => {
  return (
    <Link
      href={`/tickets/${ticket.id}`}
      className='block p-4 bg-gray-50 rounded border hover:bg-gray-100 transition'
    >
      <div className='flex justify-between items-center'>
        <h3 className='font-semibold'>{ticket.title}</h3>
        <StatusBadge status={ticket.status} />
      </div>

      {ticket.description && (
        <p className='text-sm text-gray-600 mt-2 line-clamp-2'>
          {ticket.description}
        </p>
      )}
    </Link>
  );
};

export default TicketCard;
