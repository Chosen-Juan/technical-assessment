'use client';

import { useRef } from 'react';
import debounce from 'lodash.debounce';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

export function Search({ callback, className }) {
  const inputRef = useRef(null);
  return (
    <div className="flex items-center gap-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
      <input
        type="text"
        placeholder="Search customers..."
        className={cn('w-full px-4 py-2 focus:outline-none ', className)}
        onChange={debounce((e) => callback(e.target.value), 300)}
        ref={inputRef}
      />
      {inputRef.current?.value && (
        <Button
          variant="ghost"
          onClick={() => {
            inputRef.current.value = '';
            callback('');
          }}
        >
          &times;
        </Button>
      )}
    </div>
  );
}
