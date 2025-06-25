import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Customer Portal",
  description: "A modern customer portal built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: '#2563eb' },
        elements: {
          card: "bg-white dark:bg-gray-800",
          navbar: "bg-white dark:bg-gray-800",
          navbarButton: "text-gray-600 dark:text-gray-300",
          headerTitle: "text-gray-900 dark:text-white",
          headerSubtitle: "text-gray-600 dark:text-gray-400",
          dividerLine: "bg-gray-200 dark:bg-gray-700",
          dividerText: "text-gray-600 dark:text-gray-400",
          formFieldLabel: "text-gray-700 dark:text-gray-300",
          formFieldInput: "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700",
          formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
          formButtonReset: "hover:bg-gray-100 dark:hover:bg-gray-700",
          footerActionLink: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300",
          footerActionText: "text-gray-600 dark:text-gray-400",
          userPreviewMainIdentifier: "text-gray-900 dark:text-white",
          userPreviewSecondaryIdentifier: "text-gray-600 dark:text-gray-400",
          userButtonPopoverActionButton: "hover:bg-gray-100 dark:hover:bg-gray-700",
          userButtonPopoverActionButtonText: "text-gray-600 dark:text-gray-300",
          userButtonPopoverActionButtonIcon: "text-gray-600 dark:text-gray-300",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} bg-white dark:bg-black text-gray-900 dark:text-white`}>
          <ThemeProvider>
            <Toaster richColors position="top-right" theme="system" />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
