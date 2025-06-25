import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
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
        baseTheme: undefined,
        variables: { colorPrimary: '#2563eb' },
        elements: {
          card: "bg-white dark:bg-gray-900 dark:text-white",
          navbar: "bg-white dark:bg-gray-900",
          navbarButton: "text-gray-600 dark:text-gray-300",
          headerTitle: "text-gray-900 dark:text-white",
          headerSubtitle: "text-gray-600 dark:text-gray-400",
          dividerLine: "bg-gray-200 dark:bg-gray-700",
          dividerText: "text-gray-600 dark:text-gray-400",
          formFieldLabel: "text-gray-700 dark:text-gray-300",
          formFieldInput: "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white",
          formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
          formButtonReset: "hover:bg-gray-100 dark:hover:bg-gray-800",
          footerActionLink: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300",
          footerActionText: "text-gray-600 dark:text-gray-400",
          userPreviewMainIdentifier: "text-gray-900 dark:text-white",
          userPreviewSecondaryIdentifier: "text-gray-600 dark:text-gray-400",
          userButtonPopoverActionButton: "hover:bg-gray-100 dark:hover:bg-gray-800",
          userButtonPopoverActionButtonText: "text-gray-600 dark:text-gray-300",
          userButtonPopoverActionButtonIcon: "text-gray-600 dark:text-gray-300",
          formFieldInputPlaceholder: "text-gray-500 dark:text-gray-400",
          alternativeMethodsBlockButton: "dark:hover:bg-gray-800",
          socialButtonsBlockButton: "dark:hover:bg-gray-800 dark:border-gray-700",
          socialButtonsBlockButtonText: "dark:text-white",
          socialButtonsBlockButtonArrow: "dark:text-white",
          otpCodeFieldInput: "dark:bg-gray-900 dark:text-white dark:border-gray-700",
          identityPreviewEditButtonIcon: "dark:text-white",
          formFieldSuccessText: "dark:text-green-400",
          formFieldErrorText: "dark:text-red-400",
          formFieldWarningText: "dark:text-yellow-400",
          selectButton: "dark:bg-gray-900 dark:text-white dark:border-gray-700",
          selectButtonText: "dark:text-white",
          selectOptionsContainer: "dark:bg-gray-900 dark:border-gray-700",
          selectOption: "dark:text-white dark:hover:bg-gray-800",
          selectOptionText: "dark:text-white",
          selectOptionIcon: "dark:text-white",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider>
            <div className="min-h-screen bg-white dark:bg-gray-950">
              <Toaster richColors position="top-right" theme="system" />
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
