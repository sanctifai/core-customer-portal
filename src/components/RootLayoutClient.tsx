'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NextFont } from 'next/dist/compiled/@next/font';
import '../app/globals.css';

interface RootLayoutClientProps {
  children: React.ReactNode;
  inter: NextFont;
}

const queryClient = new QueryClient();

export default function RootLayoutClient({ children, inter }: RootLayoutClientProps) {
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