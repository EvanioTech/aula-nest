import { useState } from 'react';
import { useRouter } from 'expo-router';
import { login } from '@/services/auth';

export function useAuth() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      await login(email, password);
      
      router.push('/');
      
    } catch {
        
      setError('Email ou senha incorretos');
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading, error };
}