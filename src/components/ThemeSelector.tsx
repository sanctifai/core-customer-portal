'use client';

import { Moon, Sun, Laptop } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col gap-1 p-1">
      <button
        onClick={() => setTheme('light')}
        className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm ${
          theme === 'light'
            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400'
            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
      >
        <Sun className="h-4 w-4" />
        Light
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm ${
          theme === 'dark'
            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400'
            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
      >
        <Moon className="h-4 w-4" />
        Dark
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm ${
          theme === 'system'
            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400'
            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
      >
        <Laptop className="h-4 w-4" />
        System
      </button>
    </div>
  );
} 