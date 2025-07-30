'use client';

import { useCallback, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { useCustomers } from '@/context/customerContext';

export function Search({ className }) {
  const { setSearchParams, searchParams } = useCustomers();
  const [value, setValue] = useState(searchParams.query);
  const callback = useCallback(
    (value) => setSearchParams({ query: value }),
    [setSearchParams]
  );
  const debouncedSetSearchParams = useMemo(() => debounce(callback, 300), [callback]);

  const onChange = (value) => {
    debouncedSetSearchParams(value);
    setValue(value);
  };
  
  return (
    <div className="flex items-center gap-2 border border-gray-300 rounded-md focus:outline-none">
      <input
        type="text"
        placeholder="Search customers..."
        className={cn('w-full px-4 py-2 focus:outline-none ', className)}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      {value && (
        <Button
          variant="ghost"
          onClick={() => {
            onChange('');
          }}
        >
          &times;
        </Button>
      )}
    </div>
  );  
}
