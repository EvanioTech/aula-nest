import {View, Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity className=" w-72" >
          <View className="bg-purple-500 p-2 rounded   items-center">
            
              <Text className="text-white font-bold py-2">{title}</Text>
            
          </View>
          </TouchableOpacity>
  );
};

export default Button;