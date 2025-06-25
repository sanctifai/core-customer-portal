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

## 🌐 Deployment on Render

This project includes a `render.yaml` configuration file for easy deployment on Render.

### Prerequisites

1. Create a [Render account](https://render.com)
2. Set up a [Clerk account](https://clerk.dev) and create an application
3. Set up a [Supabase account](https://supabase.com) and create a project

### Deployment Steps

1. Fork or clone this repository
2. Connect your GitHub account to Render
3. Create a new Web Service on Render
4. Choose "Deploy from GitHub" and select this repository
5. Render will automatically detect the configuration from `render.yaml`
6. Add the following environment variables in the Render dashboard:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
7. Click "Create Web Service"

The application will be automatically deployed and available at your Render URL.

### Custom Domain (Optional)

1. Go to your Web Service settings in Render
2. Navigate to the "Custom Domain" section
3. Add your domain and follow the DNS configuration instructions

## 📝 License

MIT
