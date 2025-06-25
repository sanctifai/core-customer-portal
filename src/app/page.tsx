import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();
  
  // If user is authenticated, redirect to dashboard
  if (userId) {
    redirect("/dashboard");
  }

  // If user is not authenticated, redirect to login
  redirect("/login");
}
