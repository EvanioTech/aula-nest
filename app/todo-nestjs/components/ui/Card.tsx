import {View, Text} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

interface CardProps {
  title: string;
  completed: boolean;
  onpress?: () => void;
}

const Card = ({title, completed, onpress}: CardProps) => {
  return (
    
      <View className=" p-4 rounded-lg shadow mb-4 w-full">
        <LinearGradient
          colors={completed ? ['#4CAF50', '#81C784'] : ['#F44336', '#E57373']}
            className="absolute inset-0 rounded-lg"
        />
        <Text className="text-lg font-bold">{title}</Text>
        <Text className="text-gray-500">{completed ? 'Completed' : 'Pending'}</Text>
        
      </View>
    
  );
};

export default Card;