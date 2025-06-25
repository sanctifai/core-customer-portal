'use client';

import {
  AlertCircle,
  ArrowRight,
  Bell,
  Check,
  ChevronRight,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  X,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Icon component that allows for consistent styling
const Icon = ({ name, className, ...props }: { name: LucideIcon } & LucideProps) => {
  const IconComponent = name;
  return <IconComponent className={cn("h-4 w-4", className)} {...props} />;
};

// Example icon button component
const IconButton = ({
  icon: IconComponent,
  label,
  className,
  ...props
}: {
  icon: LucideIcon;
  label: string;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
        "hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4",
        "bg-transparent border border-input",
        className
      )}
      {...props}
    >
      <IconComponent className="h-4 w-4 mr-2" />
      {label}
    </button>
  );
};

export default function IconsPage() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div>
        <h1 className="text-3xl font-bold mb-6">Lucide Icons Usage Guide</h1>
        <p className="text-gray-600 mb-4">
          This page demonstrates various ways to use Lucide icons in your Next.js application.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Usage</h2>
        <p className="text-gray-600 mb-4">
          Import and use icons directly as components:
        </p>
        <div className="flex gap-4 items-center">
          <User className="h-6 w-6" />
          <Settings className="h-6 w-6" />
          <Bell className="h-6 w-6" />
        </div>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {`import { User, Settings, Bell } from "lucide-react";

<User className="h-6 w-6" />
<Settings className="h-6 w-6" />
<Bell className="h-6 w-6" />`}
        </pre>
      </section>

      {/* Styling */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Styling Icons</h2>
        <p className="text-gray-600 mb-4">
          Icons can be styled using Tailwind classes:
        </p>
        <div className="flex gap-4 items-center">
          <User className="h-8 w-8 text-blue-500" />
          <Settings className="h-8 w-8 text-green-500 animate-spin" />
          <Bell className="h-8 w-8 text-red-500 hover:text-red-600 transition-colors" />
        </div>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {`<User className="h-8 w-8 text-blue-500" />
<Settings className="h-8 w-8 text-green-500 animate-spin" />
<Bell className="h-8 w-8 text-red-500 hover:text-red-600 transition-colors" />`}
        </pre>
      </section>

      {/* With Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Icons in Buttons</h2>
        <p className="text-gray-600 mb-4">
          Using icons with buttons and custom components:
        </p>
        <div className="flex gap-4 items-center">
          <IconButton icon={Plus} label="Add Item" />
          <IconButton icon={Trash} label="Delete" className="hover:bg-red-50 hover:text-red-600" />
          <IconButton icon={Settings} label="Settings" />
        </div>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {`<IconButton icon={Plus} label="Add Item" />
<IconButton 
  icon={Trash} 
  label="Delete" 
  className="hover:bg-red-50 hover:text-red-600" 
/>
<IconButton icon={Settings} label="Settings" />`}
        </pre>
      </section>

      {/* Loading States */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Loading States</h2>
        <p className="text-gray-600 mb-4">
          Icons can be used to indicate loading states:
        </p>
        <div className="flex gap-4 items-center">
          <Loader2 className="h-6 w-6 animate-spin" />
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading...
          </button>
        </div>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {`<Loader2 className="h-6 w-6 animate-spin" />
<button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md">
  <Loader2 className="h-4 w-4 animate-spin" />
  Loading...
</button>`}
        </pre>
      </section>

      {/* Common Icon Sets */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Common Icon Sets</h2>
        <p className="text-gray-600 mb-4">
          Frequently used icon combinations:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2 p-4 border rounded-lg">
            <File className="h-5 w-5 text-gray-500" />
            <span>Documents</span>
          </div>
          <div className="flex items-center gap-2 p-4 border rounded-lg">
            <Image className="h-5 w-5 text-gray-500" />
            <span>Images</span>
          </div>
          <div className="flex items-center gap-2 p-4 border rounded-lg">
            <CreditCard className="h-5 w-5 text-gray-500" />
            <span>Billing</span>
          </div>
          <div className="flex items-center gap-2 p-4 border rounded-lg">
            <User className="h-5 w-5 text-gray-500" />
            <span>Account</span>
          </div>
        </div>
      </section>

      {/* Theme Icons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Theme Icons</h2>
        <p className="text-gray-600 mb-4">
          Icons commonly used for theme switching:
        </p>
        <div className="flex gap-4 items-center">
          <button className="p-2 hover:bg-gray-100 rounded-md">
            <SunMedium className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-md">
            <Moon className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-md">
            <Laptop className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
} 