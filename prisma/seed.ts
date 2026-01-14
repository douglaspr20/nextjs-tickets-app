import prisma from '@/lib/prisma';
import { Prisma } from '../generated/prisma/client';
import 'dotenv/config';

const ticketsData: Prisma.TicketCreateInput[] = [
  {
    title: 'Check out Prisma with Next.js',
    description: 'https://www.prisma.io/nextjs',
    status: 'open',
  },
  {
    title: 'Learn about Prisma Client',
    description: 'https://www.prisma.io/client',
    status: 'in_progress',
  },
  {
    title: 'Read the documentation',
    description: 'https://www.prisma.io/docs',
    status: 'closed',
  },
];

export async function main() {
  for (const ticket of ticketsData) {
    await prisma.ticket.create({ data: ticket });
  }
}

main();
