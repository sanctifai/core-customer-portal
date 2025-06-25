import DashboardNav from '@/components/DashboardNav';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen 
    ">
      <DashboardNav />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link 
            href="/examples" 
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            View Examples
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
} 