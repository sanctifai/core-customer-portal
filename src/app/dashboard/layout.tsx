import DashboardNav from '@/components/DashboardNav';
import Link from 'next/link';
import { FileText } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link 
            href="/icons" 
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
          >
            <FileText className="h-4 w-4 mr-2" />
            View Icons Guide
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
} 