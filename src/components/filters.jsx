'use client';

import { useEffect, useState } from 'react';
import { useCustomers } from '@/context/customerContext';
import Button from '@/components/ui/Button';
import { Search } from '@/components/search';
import { ChevronRight } from 'lucide-react';
import { useIsDesktop } from '@/hooks/useIsDesktop';

const Skeleton = ({ hidden }) => (
  <aside
    hidden={hidden}
    className={`fixed md:sticky top-0 right-0 h-screen md:h-auto md:relative pl-8 w-64 space-y-4 border-l border-gray-200 bg-white z-20 p-4 transition-all duration-500 ease-in-out transform translate-x-full md:translate-x-0`}
  >
    <div className="flex flex-col space-y-2">
      <h2 className="text-lg font-semibold">Filter</h2>
      <div className="h-8 w-full bg-gray-200 rounded-md animate-pulse" />
      <div className="h-8 w-full bg-gray-200 rounded-md animate-pulse" />
      <div className="h-8 w-full bg-gray-200 rounded-md animate-pulse" />
      <div className="h-8 w-full bg-gray-200 rounded-md animate-pulse" />
      <div className="h-8 w-full bg-gray-200 rounded-md animate-pulse" />
    </div>
  </aside>
);

export const Filters = () => {
  const isDesktop = useIsDesktop();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { statuses, industries, setSearchParams, searchParams, loading } =
    useCustomers();

  useEffect(() => {
    setIsCollapsed(!isDesktop);
  }, [isDesktop]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const isLoading = (!statuses.length && !industries.length) && loading;

  return (
    <>
      <button
        hidden={!isCollapsed || isDesktop}
        onClick={toggleSidebar}
        className="md:hidden fixed right-0 top-1/2 -translate-y-1/2 bg-white rounded-l-full p-2 border border-gray-300 shadow-md hover:bg-gray-100 transition-all transition-discrete duration-300 ease-in-out z-10"
        aria-label="Show sidebar"
      >
        <ChevronRight className="h-5 w-5 rotate-180" />
      </button>
      <Skeleton hidden={!isLoading || isCollapsed} />
      <aside
        hidden={isLoading || isCollapsed}
        className={`fixed md:sticky top-0 right-0 h-screen md:h-auto md:relative pl-8 w-64 space-y-4 border-l border-gray-200 bg-white z-20 p-4 transition-all transition-discrete duration-500 ease-in-out transform ${
          isCollapsed && !isDesktop
            ? 'translate-x-full md:translate-x-0'
            : 'translate-x-0'
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="md:hidden absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 border border-gray-300 shadow-md hover:bg-gray-100 transition-all transition-discrete duration-500 ease-in-out"
          aria-label={isCollapsed ? 'Show sidebar' : 'Hide sidebar'}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="flex flex-col space-y-4 mb-4">
          <div className="md:hidden w-full">
            <Search />
          </div>
          <h2 className="text-lg font-semibold">Filter</h2>

          <div>
            <h3 className="text-sm font-semibold">Industries:</h3>
            <div className="flex flex-col space-y-2">
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
            <div className="flex flex-col space-y-2">
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
    </>
  );
};
