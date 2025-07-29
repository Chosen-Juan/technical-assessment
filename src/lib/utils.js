import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getStatusClass(status) {
  if (status === 'Active') {
    return 'bg-green-100 text-green-800';
  }
  return 'bg-red-100 text-red-800';
}
