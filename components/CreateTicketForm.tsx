'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ticketSchema, TicketInput } from '@/lib/validations';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import ErrorDialog from './ErrorDialog';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function CreateTicketForm() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errorOpen, setErrorOpen] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TicketInput>({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      title: '',
      description: '',
      priority: 'low',
    },
  });

  async function onSubmit(data: TicketInput) {
    setLoading(true);
    try {
      const res = await fetch('/api/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Error creating ticket');
      }

      router.refresh();
      toast.success('Ticket created successfully', {
        position: 'top-right',
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : typeof err === 'string'
          ? err
          : 'Error creating ticket';
      setErrorMessage(message);
      setErrorOpen(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'>
            + New Ticket
          </Button>
        </DialogTrigger>
        <DialogContent className='bg-white border-0 shadow-2xl'>
          <DialogHeader>
            <DialogTitle>Create Ticket</DialogTitle>
          </DialogHeader>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-4'
          >
            <div>
              <Input
                placeholder='Title'
                {...register('title')}
                className='focus-visible:ring-1'
              />
              {errors.title && (
                <p className='text-red-600 text-sm'>{errors.title.message}</p>
              )}
            </div>

            <div>
              <Textarea
                placeholder='Description'
                {...register('description')}
                className='focus-visible:ring-1'
              />
              {errors.description && (
                <p className='text-red-600 text-sm'>
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className='relative'>
              <Select
                name='priority'
                defaultValue='low'
              >
                <SelectTrigger>
                  <SelectValue placeholder='Prioridad' />
                </SelectTrigger>
                <SelectContent className='bg-white border rounded-md shadow-md z-50'>
                  <SelectItem value='low'>Low</SelectItem>
                  <SelectItem value='medium'>Medium</SelectItem>
                  <SelectItem value='high'>High</SelectItem>
                </SelectContent>
              </Select>

              {errors.priority && (
                <p className='text-red-600 text-sm'>
                  {errors.priority.message}
                </p>
              )}
            </div>

            <Button
              type='submit'
              disabled={loading}
              className='w-full bg-blue-500 text-white cursor-pointer hover:bg-blue-700 font-bold py-2 px-4 rounded'
            >
              {loading ? 'Creating...' : 'Create Ticket'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Error Modal */}
      <ErrorDialog
        open={errorOpen}
        onClose={() => setErrorOpen(false)}
        message={errorMessage}
      />
    </>
  );
}
