import {View, Text } from 'react-native';
import Input from '../ui/Input';
import Button from '../ui/Button';
import {useAuth} from '@/hooks/useAuth';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';


interface LoginFormProps {
  title?: string;
}

const LoginForm = ({ title }: LoginFormProps) => {
    const router = useRouter();
  const { handleLogin, loading, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   
  return (
    <View className=" justify-center items-center px-2">
      <Ionicons name="person-circle" size={94} color="#fff" className="mb-6" />
        <Text className="text-4xl  text-white mb-28">{title}</Text>
        <View className="bg-white bg-opacity-20 p-6 rounded-lg w-full max-w-md items-center">
      <Input
  label="Email:"
  placeholder="Digite seu email"
  icon={<Ionicons name="mail-outline" size={20} color="#9ca3af" />}
  onChangeText={setEmail}
  value={email}
/>
<Input
  label="Senha:"
  placeholder="Digite sua senha"
  icon={<Ionicons name="lock-closed-outline" size={20} color="#9ca3af" />}
  secureTextEntry={true}
  onChangeText={setPassword}
  value={password}
/>
      {error && <Text className="text-red-500 mb-2">{error}</Text>}
      <Button title="Entrar" onPress={() => handleLogin(email, password)} variant="primary" loading={loading}/>
        <Button title="Quero me cadastrar" onPress={() => router.push('/signup')} variant="secondary"/>
      </View>
      
    </View>
    );

};

export default LoginForm;