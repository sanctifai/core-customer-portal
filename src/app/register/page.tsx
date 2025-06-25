'use client';

import { SignUp } from "@clerk/nextjs";
import { Card } from "@/components/ui/card";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Get started with your customer portal
          </p>
        </div>
        <Card className="mt-8 p-6 bg-white rounded-lg shadow">
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary: 
                  "bg-blue-600 hover:bg-blue-700 text-sm normal-case",
                card: "bg-white shadow-none",
              },
            }}
            routing="path"
            path="/register"
            signInUrl="/login"
            redirectUrl="/dashboard"
          />
        </Card>
      </div>
    </div>
  );
} 