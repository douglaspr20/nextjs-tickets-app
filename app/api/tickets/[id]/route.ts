import prisma from '@/lib/prisma';
import { NextRequest } from 'next/server';

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

  const ticket = await prisma.ticket.findUnique({
    where: { id },
  });

  if (!ticket) {
    return Response.json({ error: 'Ticket not found' }, { status: 404 });
  }

  return Response.json(ticket);
}


export async function PATCH(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

  const ticket = await prisma.ticket.findUnique({
    where: { id },
  });

  if (!ticket) {
    return Response.json({ error: 'Ticket not found' }, { status: 404 });
  }

  let nextStatus: 'open' | 'in_progress' | 'closed';

  switch (ticket.status) {
    case 'open':
      nextStatus = 'in_progress';
      break;
    case 'in_progress':
      nextStatus = 'closed';
      break;
    case 'closed':
      return Response.json({ error: 'Ticket already closed' }, { status: 400 });
  }

  const updated = await prisma.ticket.update({
    where: { id },
    data: { status: nextStatus },
  });

  return Response.json(updated);
}
