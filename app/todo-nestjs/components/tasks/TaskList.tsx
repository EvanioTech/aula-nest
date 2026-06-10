import { FlatList, Text,View } from 'react-native';
import Card from '../ui/Card';
import CreateTask from './CreateTask';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onCreate: (title: string) => void;
}

const TaskList = ({ tasks, onComplete, onDelete, onCreate }: TaskListProps) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <View>
          <Text className="text-2xl font-bold text-pink-500 my-8 mt-20 text-center">
            My To-Do List
          </Text>
          <CreateTask onCreate={onCreate} />
        </View>
      }
      renderItem={({ item }) => (
        <Card
          title={item.title}
          completed={item.completed}
          onComplete={() => onComplete(item.id)}
          onDelete={() => onDelete(item.id)}
        />
      )}
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 16,
      }}
    />
  );
};

export default TaskList;