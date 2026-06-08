import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { cssInterop } from 'nativewind';
import Button from '../../components/ui/button';
import Input from '@/components/ui/input';


cssInterop(LinearGradient, { className: 'style' });

const LoginScreen = () => {
  return (
    <LinearGradient colors={['#6B46C1', '#B794F4']} className="flex-1 items-center justify-center">
    <View className=" justify-center items-center px-2">
      
        <Text className="text-4xl  text-red-300 mb-28">Todo nestjs</Text>
        <View className="bg-white bg-opacity-20 p-6 rounded-lg w-full max-w-md items-center">
      <Input label="Email:" placeholder="Digite seu email" />

      <Input label="Senha:" placeholder="Digite sua senha" secureTextEntry={true} />
      <Button title="Entrar" onPress={() => {}}/>
      </View>
      
    </View>
    </LinearGradient>
    
  );
}

export default LoginScreen;