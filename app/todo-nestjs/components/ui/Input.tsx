import {View, Text, TextInput} from 'react-native';

interface InputProps {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
}

const Input = ({label, placeholder, secureTextEntry = false, onChangeText}: InputProps) => {
  return (
    <View className="mb-4 p-4 flex flex-row rounded-lg w-full gap-2 px-4 border border-gray-300">
      <Text className="text-lg text-black font-bold">{label}</Text>
      <TextInput
        className="bg-white p-2 rounded flex-1"
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;