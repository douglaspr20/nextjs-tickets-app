import { FC } from 'react';

interface Props {
  status: string;
}

const StatusBadge: FC<Props> = ({ status }) => {
  const colors: Record<string, string> = {
    open: 'bg-blue-200 text-blue-800',
    in_progress: 'bg-yellow-200 text-yellow-800',
    closed: 'bg-green-200 text-green-800',
  };

  return (
    <span
      className={`px-2 py-1 rounded text-xs font-semibold ${colors[status]}`}
    >
      {status.replace('_', ' ')}
    </span>
  );
};

export default StatusBadge;
