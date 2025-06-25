'use client';

import { toast } from "sonner";
import { 
  AlertCircle,
  CheckCircle2,
  Loader2,
  XCircle,
  Info,
  Bell,
  Timer,
  Trash,
  Undo,
} from "lucide-react";

// Example custom component for toast
const CustomToast = () => {
  return (
    <div className="flex items-center gap-2">
      <Bell className="h-4 w-4" />
      <div className="flex-1">
        <p className="font-medium">New Notification</p>
        <p className="text-sm text-gray-500">You have a new message</p>
      </div>
    </div>
  );
};

export default function ToastExamplePage() {
  // Example async function to demonstrate promise toast
  const simulateAsyncOperation = () => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <div className="container py-10 space-y-10">
      <div>
        <h1 className="text-3xl font-bold mb-6">Toast Notifications Guide</h1>
        <p className="text-gray-600 mb-4">
          Learn how to use Sonner toast notifications in your Next.js application.
          Explore different types, styles, and patterns.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Usage</h2>
        <p className="text-gray-600 mb-4">
          Simple toast notifications with different styles:
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => toast("Default notification")}
            className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Show Default Toast
          </button>
          <button
            onClick={() => toast.success("Operation successful!", {
              icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
            })}
            className="px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200"
          >
            Show Success Toast
          </button>
          <button
            onClick={() => toast.error("Something went wrong!", {
              icon: <XCircle className="h-4 w-4 text-red-500" />,
            })}
            className="px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200"
          >
            Show Error Toast
          </button>
          <button
            onClick={() => toast.info("Here's some information", {
              icon: <Info className="h-4 w-4 text-blue-500" />,
            })}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200"
          >
            Show Info Toast
          </button>
        </div>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {`// Basic toast
toast("Default notification")

// Success toast
toast.success("Operation successful!", {
  icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
})

// Error toast
toast.error("Something went wrong!", {
  icon: <XCircle className="h-4 w-4 text-red-500" />,
})

// Info toast
toast.info("Here's some information", {
  icon: <Info className="h-4 w-4 text-blue-500" />,
})`}
        </pre>
      </section>

      {/* Advanced Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Advanced Usage</h2>
        <p className="text-gray-600 mb-4">
          Advanced toast patterns with custom components and actions:
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => toast(<CustomToast />)}
            className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Custom Component Toast
          </button>
          <button
            onClick={() => {
              toast("Item deleted", {
                icon: <Trash className="h-4 w-4" />,
                description: "The item has been moved to trash",
                action: {
                  label: "Undo",
                  onClick: () => toast.success("Action undone!"),
                },
              });
            }}
            className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Toast with Action
          </button>
          <button
            onClick={() => {
              toast.promise(simulateAsyncOperation, {
                loading: "Loading...",
                success: "Operation completed",
                error: "Operation failed",
              });
            }}
            className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Promise Toast
          </button>
        </div>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {`// Custom component toast
const CustomToast = () => (
  <div className="flex items-center gap-2">
    <Bell className="h-4 w-4" />
    <div className="flex-1">
      <p className="font-medium">New Notification</p>
      <p className="text-sm text-gray-500">You have a new message</p>
    </div>
  </div>
);

toast(<CustomToast />)

// Toast with action
toast("Item deleted", {
  icon: <Trash className="h-4 w-4" />,
  description: "The item has been moved to trash",
  action: {
    label: "Undo",
    onClick: () => toast.success("Action undone!"),
  },
})

// Promise toast
toast.promise(asyncOperation, {
  loading: "Loading...",
  success: "Operation completed",
  error: "Operation failed",
})`}
        </pre>
      </section>

      {/* Customization */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Customization</h2>
        <p className="text-gray-600 mb-4">
          Customize toast appearance and behavior:
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => {
              toast("Persistent notification", {
                duration: Infinity,
                icon: <Timer className="h-4 w-4" />,
                description: "This toast won't dismiss automatically",
                action: {
                  label: "Dismiss",
                  onClick: () => toast.dismiss(),
                },
              });
            }}
            className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Persistent Toast
          </button>
          <button
            onClick={() => {
              toast("Custom styled toast", {
                className: "bg-purple-50 border-purple-200 text-purple-700",
                duration: 5000,
                icon: <AlertCircle className="h-4 w-4 text-purple-500" />,
              });
            }}
            className="px-4 py-2 bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200"
          >
            Custom Styled Toast
          </button>
        </div>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {`// Persistent toast
toast("Persistent notification", {
  duration: Infinity,
  icon: <Timer className="h-4 w-4" />,
  description: "This toast won't dismiss automatically",
  action: {
    label: "Dismiss",
    onClick: () => toast.dismiss(),
  },
})

// Custom styled toast
toast("Custom styled toast", {
  className: "bg-purple-50 border-purple-200 text-purple-700",
  duration: 5000,
  icon: <AlertCircle className="h-4 w-4 text-purple-500" />,
})`}
        </pre>
      </section>
    </div>
  );
} 