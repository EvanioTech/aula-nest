import {View, Text } from 'react-native';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface LoginFormProps {
  title?: string;
}

const LoginForm = ({ title }: LoginFormProps) => {
  return (
    <View className=" justify-center items-center px-2">
      
        <Text className="text-4xl  text-red-300 mb-28">{title}</Text>
        <View className="bg-white bg-opacity-20 p-6 rounded-lg w-full max-w-md items-center">
      <Input label="Email:" placeholder="Digite seu email" />

      <Input label="Senha:" placeholder="Digite sua senha" secureTextEntry={true} />
      <Button title="Entrar" onPress={() => {}}/>
      </View>
      
    </View>
    );

};

export default LoginForm;