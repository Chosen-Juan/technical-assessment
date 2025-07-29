'use client';

import { CustomerTable } from '@/components/customer';
import { useCustomers } from '@/context/customerContext';
import { Search } from '@/components/search';
import { Filters } from '@/components/filters';

export default function Home() {
  const { setSearchParams } = useCustomers();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Customer Insights Dashboard</h1>
        <div className="w-72">
          <Search callback={(query) => setSearchParams({ query })} />
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <CustomerTable />
        <Filters />
      </div>
    </div>
  );
}
