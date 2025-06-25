'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText, Lightbulb, Palette } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  {
    name: 'Icons Guide',
    href: '/examples/icons',
    icon: Palette,
    description: 'Learn how to use Lucide icons in your application'
  },
  // Add more examples here as we create them
  // {
  //   name: 'Forms',
  //   href: '/examples/forms',
  //   icon: FileText,
  //   description: 'Form handling with React Hook Form and Zod'
  // },
];

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-[calc(100vh-4rem)] flex">
      {/* Sidebar */}
      <div className="w-80 border-r bg-white">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900">Examples</h2>
          <p className="mt-2 text-sm text-gray-600">
            Explore working examples and patterns you can use in your application.
          </p>
        </div>
        <nav className="px-4 pb-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                pathname === item.href
                  ? "bg-gray-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              )}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              <div>
                <div>{item.name}</div>
                <div className="text-xs font-normal text-gray-500">
                  {item.description}
                </div>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
} 