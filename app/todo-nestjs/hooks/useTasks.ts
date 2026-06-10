import { useState } from 'react';

const initialTasks = [
  { id: '1', title: 'Buy groceries', completed: false },
  { id: '2', title: 'Walk the dog', completed: true },
  { id: '3', title: 'Finish project', completed: false },
];

const useTasks = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const completeTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return { tasks, completeTask, deleteTask };
};

export default useTasks;