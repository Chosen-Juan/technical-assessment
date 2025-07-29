import '@/styles/globals.css';
import { CustomerProvider } from '@/context/customerContext';

export const metadata = {
  title: 'Customer Insights Dashboard',
  description: 'Technical assessment for Full Stack Developer position',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <CustomerProvider>
          <main className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </CustomerProvider>
      </body>
    </html>
  );
}
