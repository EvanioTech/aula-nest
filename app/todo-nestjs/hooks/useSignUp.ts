import { useState } from 'react';
import { useRouter } from 'expo-router';
import { signup } from '@/services/auth';

export function useSignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (name: string, email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      await signup(name, email, password);
      router.push('/login');
    } catch(e: any) {
      setError(e?.response?.data?.message || 'Erro ao cadastrar');
    } finally {
      setLoading(false);
    }
  };

  return { handleSignUp, loading, error };
}