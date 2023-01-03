import { parseISO, format } from 'date-fns';

const formatDate = (date: string): string => {
  return format(parseISO(date), 'MMMM dd, yyyy');
};

export { formatDate };
