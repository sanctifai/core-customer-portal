import { auth } from '@clerk/nextjs';
import { supabase } from './supabase';

export async function getUser() {
  const { userId } = auth();
  
  if (!userId) {
    return null;
  }

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('clerk_id', userId)
    .single();

  if (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }

  return profile;
}

export async function createUserProfile(clerkId: string, email: string) {
  const { data, error } = await supabase
    .from('profiles')
    .insert([
      {
        clerk_id: clerkId,
        email: email,
        created_at: new Date().toISOString(),
      },
    ])
    .select()
    .single();

  if (error) {
    console.error('Error creating user profile:', error);
    return null;
  }

  return data;
} 