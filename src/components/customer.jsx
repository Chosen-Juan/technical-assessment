'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useCustomers } from '@/context/customerContext';
import { getStatusClass } from '@/lib/utils';

export const TableHeaders = () => (
  <TableHeader>
    <TableRow>
      <TableHead>Company</TableHead>
      <TableHead>Contact</TableHead>
      <TableHead>Industry</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Health Score</TableHead>
      <TableHead>Subscription</TableHead>
    </TableRow>
  </TableHeader>
);

export const CustomerRowsSkeleton = ({ currentLength }) => {
  const row = Array.from({ length: 6 }).map((_, i) => (
    <TableCell key={`loader-${i}`}>
      <div className="h-8 w-full bg-gray-200 rounded-md animate-pulse" />
    </TableCell>
  ));

  const rows = Array.from({ length: currentLength || 10 }).map((_, i) => (
    <TableRow key={`loader-${i}`}>{row}</TableRow>
  ));

  return <TableBody>{rows}</TableBody>;
};

export const CustomerRows = () => {
  const { customers, setSearchParams } = useCustomers();
  const onClickStatus = (status) => {
    setSearchParams({ status });
  };
  const onClickIndustry = (industry) => {
    setSearchParams({ industry });
  };
  return (
    <TableBody>
      {customers.map((customer) => (
        <TableRow key={customer.id}>
          <TableCell>{customer.name}</TableCell>
          <TableCell>
            <div>{customer.contact.name}</div>
            <div className="text-gray-500 text-xs">
              {customer.contact.email}
            </div>
          </TableCell>
          <TableCell onClick={() => onClickIndustry(customer.industry)}>
            {customer.industry}
          </TableCell>
          <TableCell onClick={() => onClickStatus(customer.status)}>
            <span
              className={`px-2 py-1 rounded-full text-xs ${getStatusClass(customer.status)}`}
            >
              {customer.status}
            </span>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <div className="h-2 w-24 rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-blue-500"
                  style={{ width: `${customer.health_score}%` }}
                />
              </div>
              <span>{customer.health_score}%</span>
            </div>
          </TableCell>
          <TableCell>{customer.subscription}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export const CustomerTable = () => {
  const { customers, loading, error } = useCustomers();

  if (loading) {
    return (
      <Table>
        <TableHeaders />
        <CustomerRowsSkeleton currentLength={customers?.length} />
      </Table>
    );
  }

  if (error) {
    return (
      <Table>
        <TableHeaders />
        <TableBody>
          <TableRow>
            <TableCell colSpan={6} className="text-center py-4">
              Error: {error.message}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }

  if (!customers || customers.length === 0) {
    return (
      <Table>
        <TableHeaders />
        <TableBody>
          <TableRow>
            <TableCell colSpan={6} className="text-center py-4">
              No customers found
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }

  return (
    <Table>
      <TableHeaders />
      <CustomerRows />
    </Table>
  );
};
