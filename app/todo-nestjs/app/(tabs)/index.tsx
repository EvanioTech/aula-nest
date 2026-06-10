import "./../../global.css";
import {LinearGradient} from "expo-linear-gradient";
import TaskList from "@/components/tasks/TaskList";
import useTasks from "@/hooks/useTasks";

export default function TabOneScreen() {
  const { tasks, completeTask, deleteTask, createTask } = useTasks();

  return (
    <LinearGradient
    colors={['#6a11cb', '#2575fc']}
    style={{ flex: 1 }}
  >
    
      <TaskList
        tasks={tasks}
        onComplete={completeTask}
        onDelete={deleteTask}
        onCreate={createTask}
      />
        
   
  </LinearGradient>
  );
}


