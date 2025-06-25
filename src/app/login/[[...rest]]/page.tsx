'use client';

import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full">
        <SignIn 
          appearance={{
            elements: {
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-sm normal-case",
              card: "bg-white shadow-md rounded-lg",
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