'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className='flex flex-col items-center justify-center h-[60vh] text-red-600 space-y-4'>
      <p>Something went wrong: {error.message}</p>
      <button
        onClick={reset}
        className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700'
      >
        Retry
      </button>
    </div>
  );
}
