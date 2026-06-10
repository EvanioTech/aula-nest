import "./../../global.css";
import {LinearGradient} from "expo-linear-gradient";
import TaskList from "@/components/tasks/TaskList";

export default function TabOneScreen() {
  return (
    <LinearGradient
    colors={['#6a11cb', '#2575fc']}
    style={{ flex: 1 }}
  >
    
      <TaskList tasks={[
        { id: '1', title: 'Buy groceries', completed: false },
        { id: '2', title: 'Walk the dog', completed: true },
        { id: '3', title: 'Finish project', completed: false },
      ]} />
   
  </LinearGradient>
  );
}


