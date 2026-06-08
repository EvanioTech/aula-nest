import {View, Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

const Button = ({title, onPress, variant = 'primary'}: ButtonProps) => {
  return (
    <TouchableOpacity className=" w-72" onPress={onPress}> 
          <View className={variant === 'primary' ? "bg-purple-500 p-2 rounded   items-center" : " p-2 rounded-full   items-center "}>
            
              <Text className={variant === 'primary' ? "text-white font-bold py-2" : "text-black font-bold py-2"}>{title}</Text>
            
          </View>
          </TouchableOpacity>
  );
};

export default Button;