'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

interface Props {
  id: number;
  disabled?: boolean;
}

const UpdateTicketButton = ({ id, disabled }: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleUpdate() {
    setLoading(true);
    try {
      const res = await fetch(`/api/tickets/${id}`, {
        method: 'PATCH',
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Error updating ticket');
      }

      router.refresh();
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error('Unknown error', err);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      onClick={handleUpdate}
      disabled={loading || disabled}
      className='mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white'
      variant='secondary'
    >
      {loading ? 'Updating...' : 'Advance status'}
    </Button>
  );
};

export default UpdateTicketButton;
