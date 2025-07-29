
'use client';

import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function Home() {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.customers))
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }, []);
    

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Customer Insights Dashboard</h1>
          <div className="w-72">
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <Table>
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
          <TableBody>
            {customers?.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>
                  <div>{customer.contact.name}</div>
                  <div className="text-gray-500 text-xs">{customer.contact.email}</div>
                </TableCell>
                <TableCell>{customer.industry}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {customer.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-24 rounded-full bg-gray-200">
                      <div 
                        className="h-2 rounded-full bg-blue-500" 
                        style={{width: `${customer.health_score}%`}}
                      />
                    </div>
                    <span>{customer.health_score}%</span>
                  </div>
                </TableCell>
                <TableCell>{customer.subscription}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }