import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { cssInterop } from 'nativewind';
import Button from '../../components/ui/button';


cssInterop(LinearGradient, { className: 'style' });

const LoginScreen = () => {
  return (
    <LinearGradient colors={['#6B46C1', '#B794F4']} className="flex-1 items-center justify-center">
    <View className=" justify-center items-center px-2">
      
        <Text className="text-4xl  text-red-300 mb-28">Todo nestjs</Text>
        <View className="bg-white bg-opacity-20 p-6 rounded-lg w-full max-w-md items-center">
      <View className="mb-4 p-4 flex flex-row  rounded-lg w-full  gap-2 px-4 border border-gray-300">
        <Text className="text-lg text-black font-bold mb-2">Email:</Text>
        <TextInput
          className="bg-white p-2 rounded w-72"
          placeholder="Digite seu email"
        />
      </View>

      <View className="mb-4  p-4 flex flex-row  rounded-lg w-full gap-2 px-4 border border-gray-300">
        <Text className="text-lg  text-black font-bold ">Senha:</Text>
        <TextInput
          className="bg-white p-2 rounded w-72"
          placeholder="Digite sua senha"
          secureTextEntry
        />
        
      </View>
      <Button title="Entrar" onPress={() => {}}/>
      </View>
      
    </View>
    </LinearGradient>
    
  );
}

export default LoginScreen;