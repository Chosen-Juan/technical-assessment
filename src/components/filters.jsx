'use client';

import { useCustomers } from '@/context/customerContext';
import Button from '@/components/ui/Button';

export const Filters = () => {
  const { statuses, industries, setSearchParams, searchParams, loading } =
    useCustomers();

if ((!statuses.length || !industries.length) && loading) {
    return (
        <aside className="pl-8 w-64 space-y-4 border-l border-gray-200">
            <div className="flex flex-col space-y-2">
                <h2 className="text-lg font-semibold">Filter</h2>
                <div className="h-8 w-full bg-gray-200 rounded-md animate-pulse" />
                <div className="h-8 w-full bg-gray-200 rounded-md animate-pulse" />
                <div className="h-8 w-full bg-gray-200 rounded-md animate-pulse" />
                <div className="h-8 w-full bg-gray-200 rounded-md animate-pulse" />
                <div className="h-8 w-full bg-gray-200 rounded-md animate-pulse" />
            </div>
        </aside>
    )
}
  return (
    <aside className="pl-8 w-64 space-y-4 border-l border-gray-200">
      <div className="flex flex-col space-y-2">
        <h2 className="text-lg font-semibold">Filter</h2>

        <div>
          <h3 className="text-sm font-semibold">Industries:</h3>
          <div className="flex flex-col space-y-1">
            {statuses.map((s) => (
              <label key={s} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="status"
                  value={s}
                  checked={searchParams.status === s}
                  onChange={() => setSearchParams({ status: s })}
                />
                <span className="text-sm">{s}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Status:</h3>
          <div className="flex flex-col space-y-1">
            {industries.map((i) => (
              <label key={i} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="industry"
                  value={i}
                  checked={searchParams.industry === i}
                  onChange={() => setSearchParams({ industry: i })}
                />
                <span className="text-sm">{i}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      {searchParams.status || searchParams.industry ? (
        <Button
          variant="secondary"
          onClick={() => setSearchParams({ industry: '', status: '' })}
          className="w-full"
        >
          Reset filters
        </Button>
      ) : null}
    </aside>
  );
};
