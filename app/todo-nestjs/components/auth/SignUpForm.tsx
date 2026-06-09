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
  const [confirmPassword, setConfirmPassword] = useState('');
  
    const { handleSignUp, loading,error
     } = useSignUp();
    const router = useRouter();
    const clearFields = () => {
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };
  return (
    <View className=" justify-center items-center px-2">
      
        <Text className="text-4xl  text-red-300 mb-28">{title}</Text>
        <View className="bg-white bg-opacity-20 p-6 rounded-lg w-full max-w-md items-center">
      <Input label="Nome:" placeholder="Digite seu nome"  onChangeText={setName} value={name}/>
      <Input label="Email:" placeholder="Digite seu email"  onChangeText={setEmail} value={email}/>
      <Input label="Senha:" placeholder="Digite sua senha" secureTextEntry={true}  onChangeText={setPassword} value={password}/>
      <Input label="Confirmar Senha:" placeholder="Digite sua senha novamente" secureTextEntry={true} onChangeText={setConfirmPassword} value={confirmPassword} />
      
      {error && <Text className="text-red-500 mb-2">{error}</Text>}
      <Button title="Cadastrar" onPress={() =>{
        if (password !== confirmPassword) {
          alert('As senhas não coincidem'); return
          }  { handleSignUp(name, email, password, clearFields); }}} variant="primary" loading={loading}/>
        <Button title="Quero me logar" onPress={() => router.push('/login')} variant="secondary"/>
      </View>
      
    </View>
    );

};

export default SignUpForm;