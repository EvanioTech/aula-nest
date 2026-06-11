import { View, Text, TextInput } from 'react-native';
import { ReactNode } from 'react';
import { useState } from 'react';

interface InputProps {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  value?: string;
  icon?: ReactNode;
}

const Input = ({ label, placeholder, secureTextEntry = false, onChangeText, value, icon }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View className="mb-4 w-full px-2">
      <Text className="text-sm text-black font-bold mb-1">{label}</Text>
      <View className={`flex-row items-center border rounded-lg px-4 bg-white ${isFocused ? 'border-purple-500' : 'border-gray-300'}`}>
        {icon && <View className="mr-2">{icon}</View>}
        <TextInput
          className="w-full "
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    </View>
  );
};

export default Input;