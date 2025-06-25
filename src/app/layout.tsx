import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'sonner';
import { Inter } from 'next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const queryClient = new QueryClient();

export const metadata = {
  title: 'Customer Portal',
  description: 'A modern customer portal built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <QueryClientProvider client={queryClient}>
        <html lang="en">
          <body className={inter.className}>
            {children}
            <Toaster position="top-right" />
          </body>
        </html>
      </QueryClientProvider>
    </ClerkProvider>
  );
}
