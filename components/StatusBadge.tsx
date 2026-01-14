import { FC } from 'react';
import { Badge } from './ui/badge';

interface Props {
  status: string;
}

const StatusBadge: FC<Props> = ({ status }) => {
  const colors: Record<string, string> = {
    open: 'bg-blue-200 text-blue-800',
    in_progress: 'bg-yellow-200 text-yellow-800',
    closed: 'bg-green-200 text-green-800',
  };

  return <Badge className={colors[status]}>{status.replace('_', ' ')}</Badge>;
};

export default StatusBadge;
