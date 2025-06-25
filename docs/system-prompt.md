docs/system-prompt.md# System Prompt: Boilerplate Customer Portal Template

## 🧱 General Overview

This project is a boilerplate template designed for quickly spinning up customer portals for clients. It is not a component library, but a reusable base application with modern tooling pre-integrated. It is built for developers coming from a C# or Microsoft background who want to rapidly prototype with the modern TypeScript stack.

### 🔧 Stack Overview

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Library**: shadcn/ui
- **Authentication**: Clerk
- **Backend**: Supabase (PostgreSQL, storage, auth, edge functions)
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide (via shadcn)
- **Toasts**: Sonner (used for user feedback)
- **Hosting**: Render

---

## 📁 Project Structure

```
/app
  /dashboard              → Protected area for authenticated users
  /auth                   → Clerk auth routes if needed
  layout.tsx              → Root layout using ClerkProvider + Tailwind
  page.tsx                → Landing page

/components              → Reusable UI components
/forms                   → Prebuilt forms with React Hook Form + Zod
/hooks                   → Custom hooks (e.g., useUser)
/lib
  supabase.ts             → Supabase client setup
  auth.ts                 → Clerk + Supabase helpers
/schemas                 → Zod schemas
/types                   → Shared TypeScript types
/styles
  globals.css             → Tailwind styles
/public                  → Static assets (e.g., logo, favicon)
/.env.example            → Supabase + Clerk keys
```

---

## 🔐 Authentication (Clerk)

- Use `ClerkProvider` at the root.
- Protect the `/dashboard` route and redirect unauthenticated users.
- Use `useUser()` or `auth()` as needed in client/server contexts.

---

## 🗄️ Supabase Setup

- Connect Supabase client to the app.
- Include example `profiles` table and CRUD logic.
- Use RLS to scope data to the logged-in user (linked via Clerk ID).

---

## 🧩 UI Components

- Use `shadcn/ui` for layout and interactivity:
  - Button, Input, Sheet, Dialog, Toast
- Themeable with Tailwind CSS + shadcn
- Use `lucide-react` for consistent icons

---

## 📄 Forms & Validation

- Use `React Hook Form` + `ZodResolver`
- Example: `UserProfileForm.tsx`
- Place schemas in `/schemas`
- Show error messages, handle submission states

---

## 🌙 Theme & Styling

- Enable dark mode
- Tailwind config pre-wired
- Use `ThemeProvider` from `shadcn/ui` to toggle

---

## ✅ Environment Variables (`.env.example`)

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

---

## 📄 Next Steps

- Build reusable patterns for client-specific customization
- Add CI/CD support (Render deploy hooks or GitHub Actions)
- Optional: Storybook, analytics, audit logs

---

## 🧠 Intended Use

This base project is designed to be cloned per client engagement and modified to fit specific needs while maintaining quality, consistency, and speed.

