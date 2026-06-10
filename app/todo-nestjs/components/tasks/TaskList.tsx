import { FlatList, Text } from 'react-native';
import Card from '../ui/Card';


interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
  return (
    
    <FlatList
    
      data={tasks}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <Text className="text-2xl font-bold text-pink-500 my-8 text-center">
          My To-Do List
        </Text>
      }
      renderItem={({ item }) => (
        <Card title={item.title} completed={item.completed} />
      )}
      contentContainerStyle={{ 
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 16

       }}
    />
    
  );
};

export default TaskList;