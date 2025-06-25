import { useAuth } from '@clerk/nextjs';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

export function useUser() {
  const { userId } = useAuth();

  const { data: profile, isLoading } = useQuery({
    queryKey: ['profile', userId],
    queryFn: async () => {
      if (!userId) return null;

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('clerk_id', userId)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!userId,
  });

  return {
    profile,
    isLoading,
  };
} 