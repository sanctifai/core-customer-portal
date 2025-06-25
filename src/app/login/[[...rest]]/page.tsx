'use client';

import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full">
        <SignIn 
          appearance={{
            elements: {
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-sm normal-case",
              card: "bg-white dark:bg-gray-900 shadow-md rounded-lg",
              headerTitle: "text-gray-900 dark:text-white",
              headerSubtitle: "text-gray-600 dark:text-gray-400",
              socialButtonsBlockButton: "dark:hover:bg-gray-800 dark:border-gray-700",
              socialButtonsBlockButtonText: "dark:text-white",
              formFieldLabel: "text-gray-700 dark:text-gray-300",
              formFieldInput: "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white",
              footerActionText: "text-gray-600 dark:text-gray-400",
              footerActionLink: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300",
              dividerLine: "bg-gray-200 dark:bg-gray-700",
              dividerText: "text-gray-600 dark:text-gray-400",
            },
          }}
          path="/login"
          routing="path"
          signUpUrl="/register"
          redirectUrl="/dashboard"
        />
      </div>
    </main>
  );
} 