import prisma from '@/lib/prisma';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, description, priority } = body;

    if (!title) {
      return new Response(JSON.stringify({ error: 'Title is required' }), {
        status: 400,
      });
    }

    if (priority && !['low', 'medium', 'high'].includes(priority)) {
      return new Response(JSON.stringify({ error: 'Invalid priority' }), {
        status: 400,
      });
    }

    const ticket = await prisma.ticket.create({
      data: {
        title,
        description,
        priority: priority || 'low',
      },
    });

    return Response.json(ticket);
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    const tickets = await prisma.ticket.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return Response.json(tickets);
  } catch (error) {
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
