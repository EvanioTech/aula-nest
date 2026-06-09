import { useState } from 'react';
import { useRouter } from 'expo-router';
import {createUser} from '@/services/signup';

export function useSignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (name: string, email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      await createUser(name, email, password);
      router.push('/');
    } catch(e: any) {
      setError(e?.response?.data?.message || 'Erro ao cadastrar');
    } finally {
      setLoading(false);
    }
  };

  return { handleSignUp, loading, error };
}