'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

const CustomerContext = createContext();

export function CustomerProvider({ children }) {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [params, setParams] = useState({
    query: '',
    status: '',
    industry: '',
  });
  const [statuses, setStatuses] = useState([]);
  const [industries, setIndustries] = useState([]);

  const setSearchParams = useCallback((params) => {
    setParams((prevParams) => ({ ...prevParams, ...params }));
  }, []);

  const fetchCustomers = async (query = '', status = '', industry = '') => {
    setLoading(true);
    setError(null);
    try {
      const url = new URL('/api/customers', window.location.origin);
      query && url.searchParams.set('query', query);
      status && url.searchParams.set('status', status);
      industry && url.searchParams.set('industry', industry);
      const response = await fetch(url);
      const data = await response.json();
      setCustomers(data.customers);
      setStatuses(data.statuses);
      setIndustries(data.industries);

    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers(params.query, params.status, params.industry);
  }, [params]);

  return (
    <CustomerContext.Provider
      value={{
        customers,
        loading,
        error,
        fetchCustomers,
        setSearchParams,
        searchParams: params,
        statuses,
        industries,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}

export function useCustomers() {
  const context = useContext(CustomerContext);
  if (context === undefined) {
    throw new Error('useCustomers must be used within a CustomerProvider');
  }
  return context;
}
