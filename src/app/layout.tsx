import RootLayoutClient from '@/components/RootLayoutClient';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Customer Portal',
  description: 'A modern customer portal built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayoutClient inter={inter}>{children}</RootLayoutClient>;
}
