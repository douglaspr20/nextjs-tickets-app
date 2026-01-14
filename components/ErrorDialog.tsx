'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export default function ErrorDialog({
  open,
  onClose,
  message,
}: {
  open: boolean;
  onClose: () => void;
  message: string | null;
}) {
  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Error</DialogTitle>
          <DialogDescription>
            {message || 'Ha ocurrido un error inesperado.'}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
