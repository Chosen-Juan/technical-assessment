import { customers } from '@/lib/data';
import { NextResponse } from 'next/server';

export async function GET(request) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Get search params
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query')?.toLowerCase() || '';
  const status = searchParams.get('status') || '';
  const industry = searchParams.get('industry') || '';
  
  // Filter customers based on query parameters
  let filteredCustomers = [...customers];
  
  if (query) {
    filteredCustomers = filteredCustomers.filter(customer => 
      customer.name.toLowerCase().includes(query) || 
      customer.contact.name.toLowerCase().includes(query)
    );
  }
  
  if (status) {
    filteredCustomers = filteredCustomers.filter(customer => 
      customer.status.toLowerCase() === status.toLowerCase()
    );
  }
  
  if (industry) {
    filteredCustomers = filteredCustomers.filter(customer => 
      customer.industry.toLowerCase() === industry.toLowerCase()
    );
  }
  
  return NextResponse.json({
    customers: filteredCustomers,
    total: filteredCustomers.length,
    industries: [...new Set(customers.map(c => c.industry))],
    statuses: [...new Set(customers.map(c => c.status))]
  });
}