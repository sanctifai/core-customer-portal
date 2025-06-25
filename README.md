# Customer Portal Template

A modern, full-stack customer portal template built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Authentication**: Secure auth with Clerk
- **Database**: Supabase for PostgreSQL database and storage
- **UI Components**: shadcn/ui for beautiful, accessible components
- **Forms**: Type-safe forms with React Hook Form and Zod
- **Styling**: Modern design with Tailwind CSS
- **Feedback**: Toast notifications with Sonner

## 📦 Getting Started

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd customer-portal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Update the environment variables in `.env.local` with your:
   - Supabase URL and anon key
   - Clerk publishable and secret keys

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗄️ Database Setup

1. Create a new Supabase project
2. Create a `profiles` table with the following schema:
   ```sql
   create table profiles (
     id uuid default uuid_generate_v4() primary key,
     clerk_id text not null unique,
     email text,
     created_at timestamp with time zone default timezone('utc'::text, now()) not null
   );
   ```

## 🔒 Authentication Setup

1. Create a new Clerk application
2. Configure your Clerk application settings
3. Add the Clerk keys to your `.env.local` file

## 📚 Project Structure

```
/src
  /app                   → Next.js App Router pages
    /dashboard           → Protected dashboard area
    /auth               → Auth-related pages
    layout.tsx          → Root layout with providers
    page.tsx            → Landing page
  /components           → Reusable UI components
  /forms               → Form components
  /hooks               → Custom React hooks
  /lib                 → Utility functions and configs
  /schemas             → Zod validation schemas
  /types               → TypeScript types
```

## 🛠️ Development

- Run development server: `npm run dev`
- Build for production: `npm run build`
- Start production server: `npm start`
- Lint code: `npm run lint`

## 📝 License

MIT
