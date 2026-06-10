import {View, Text} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

interface CardProps {
  title: string;
  description?: string;
  completed?: boolean;
  onComplete?: () => void;
  onDelete?: () => void;
  onpress?: () => void;
  direction?: 'row' | 'column';
}

const Card = ({title, description, completed, onpress, onComplete, onDelete, direction = 'column'}: CardProps) => {
  return (
    
      <View className={`flex-${direction} gap-4 p-4 rounded-lg shadow mb-4 w-full`}>
       <LinearGradient
  colors={
    completed === true ? ['#4CAF50', '#81C784'] :
    completed === false ? ['#F44336', '#E57373'] :
    ['#9E9E9E', '#BDBDBD']  // cinza quando não passar completed
  }
  className="absolute inset-0 rounded-lg"
/>
        <Text className="text-lg font-bold">{title}</Text>
        {onComplete && (
  <Text className="text-sm text-green-700 mt-2" onPress={onComplete}>
    {completed ? 'Mark as Incomplete' : 'Mark as Complete'}
  </Text>
)}
        {onDelete && (
          <Text className="text-sm text-red-700 mt-2 cursor-pointer" onPress={onDelete}>
            Delete
          </Text>
        )}
        {description && (
          <Text className="text-sm text-gray-500 mt-2">
            {description}
          </Text>
        )}
      </View>
    
  );
};

export default Card;