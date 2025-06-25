import { FileText, Palette } from 'lucide-react';
import Link from 'next/link';

const examples = [
  {
    name: 'Icons Guide',
    description: 'Learn how to use Lucide icons in your application. Includes examples of basic usage, styling, animations, and common patterns.',
    href: '/examples/icons',
    icon: Palette,
  },
  // Add more examples here as we create them
  // {
  //   name: 'Form Handling',
  //   description: 'Examples of form handling with React Hook Form and Zod validation. Includes form layouts, validation, and submission handling.',
  //   href: '/examples/forms',
  //   icon: FileText,
  // },
];

export default function ExamplesPage() {
  return (
    <div className="container py-10">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900">
          Example Patterns & Components
        </h1>
        <p className="mt-4 text-gray-600">
          Explore working examples and patterns that you can use as a reference for building your application.
          Each example is self-contained and can be copied and modified to suit your needs.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {examples.map((example) => (
          <Link
            key={example.name}
            href={example.href}
            className="group relative rounded-lg border border-gray-200 p-6 hover:border-blue-500 hover:shadow-sm transition-all"
          >
            <div>
              <span className="inline-flex rounded-lg bg-blue-50 p-3">
                <example.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">
                {example.name}
                <span className="absolute inset-0" />
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {example.description}
              </p>
            </div>
            <span
              className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-blue-500"
              aria-hidden="true"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
} 