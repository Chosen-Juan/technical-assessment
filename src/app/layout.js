import '@/styles/globals.css'

export const metadata = {
  title: 'Customer Insights Dashboard',
  description: 'Technical assessment for Full Stack Developer position',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <main className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  )
}

