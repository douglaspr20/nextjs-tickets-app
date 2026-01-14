import StatusBadge from '@/components/StatusBadge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import UpdateTicketButton from '@/components/UpdatedTicketstatusbutton';
import { Ticket } from '@/generated/prisma/client';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

async function getTicket(id: string): Promise<Ticket> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/tickets/${id}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Ticket not found');
  }

  return res.json();
}

export default async function TicketDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ticket = await getTicket(id);

  return (
    <>
      <Link
        href='/'
        className='text-blue-500 hover:underline mb-4 inline-block cursor-pointer'
      >
        <ArrowLeft
          className='inline-block mr-2 mb-1'
          size={16}
        />
        Come back to Tickets
      </Link>
      <Card className='max-w-4xl mx-auto'>
        <CardHeader className='flex justify-between items-center'>
          <CardTitle className='text-2xl font-bold'>{ticket.title}</CardTitle>
          <StatusBadge status={ticket.status} />
        </CardHeader>
        <CardContent>
          {ticket.description ? (
            <p className='mt-2 text-gray-700'>{ticket.description}</p>
          ) : (
            <p className='mt-2 text-gray-500 italic'>Sin descripción</p>
          )}

          <p className='mt-6 text-sm text-gray-500'>
            Creado: {new Date(ticket.createdAt).toLocaleString()}
          </p>
          <p className='mt-1 text-sm text-gray-500'>
            Prioridad: {ticket.priority}
          </p>

          <UpdateTicketButton
            id={ticket.id}
            disabled={ticket.status === 'closed'}
          />
        </CardContent>
      </Card>
    </>
  );
}
