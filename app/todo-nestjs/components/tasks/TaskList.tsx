import {FlatList, Text, View} from "react-native";
import Card from "@/components/ui/Card";


interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList = ({tasks}: TaskListProps) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <Card title={item.title} completed={item.completed} />
      )}
    />
  );
};

export default TaskList;