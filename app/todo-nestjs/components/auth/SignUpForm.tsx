import {View, Text } from 'react-native';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useRouter } from 'expo-router';
import {useSignUp} from '@/hooks/useSignUp';
import { useState } from 'react';

interface SignUpFormProps {
  title?: string;
}

const SignUpForm = ({ title }: SignUpFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
    const { handleSignUp, loading } = useSignUp();
    const router = useRouter();
  return (
    <View className=" justify-center items-center px-2">
      
        <Text className="text-4xl  text-red-300 mb-28">{title}</Text>
        <View className="bg-white bg-opacity-20 p-6 rounded-lg w-full max-w-md items-center">
      <Input label="Nome:" placeholder="Digite seu nome"  onChangeText={setName} />
      <Input label="Email:" placeholder="Digite seu email"  onChangeText={setEmail} />
      <Input label="Senha:" placeholder="Digite sua senha" secureTextEntry={true}  onChangeText={setPassword} />
      <Input label="Confirmar Senha:" placeholder="Digite sua senha novamente" secureTextEntry={true} />
      <Button title="Cadastrar" onPress={() => handleSignUp(name, email, password)} variant="primary" loading={loading}/>
        <Button title="Quero me logar" onPress={() => router.push('/login')} variant="secondary"/>
      </View>
      
    </View>
    );

};

export default SignUpForm;