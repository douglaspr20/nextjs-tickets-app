import { Ticket } from '@/generated/prisma/client';
import TicketCard from './TicketCard';
import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface Props {
  title: string;
  tickets: Ticket[];
}
const Column: FC<Props> = ({ title, tickets }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className='mb-2'
          >
            <TicketCard ticket={ticket} />
          </div>
        ))}
        {tickets.length === 0 && (
          <p className='text-gray-500 text-sm'>No tickets here</p>
        )}
      </CardContent>
    </Card>
  );
};

export default Column;
