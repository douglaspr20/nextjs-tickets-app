import Link from 'next/link';
import StatusBadge from './StatusBadge';
import { Ticket } from '@/generated/prisma/client';
import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface Props {
  ticket: Ticket;
}

const TicketCard: FC<Props> = ({ ticket }) => {
  return (
    <Link href={`/tickets/${ticket.id}`}>
      <Card className='hover:bg-gray-50 transition cursor-pointer'>
        <CardHeader className='flex flex-row justify-between items-center'>
          <CardTitle className='text-base font-semibold'>
            {ticket.title}
          </CardTitle>
          <StatusBadge status={ticket.status} />
        </CardHeader>
        {ticket.description && (
          <CardContent>
            <p className='text-sm text-gray-600 line-clamp-2'>
              {ticket.description}
            </p>
          </CardContent>
        )}
      </Card>
    </Link>
  );
};

export default TicketCard;
