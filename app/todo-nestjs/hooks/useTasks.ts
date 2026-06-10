import { useState, useEffect } from 'react';
import { getTasks, deleteTask, completeTask, createTask } from '@/services/tasks';


interface TaskAPI {
  id: number;
  user_id: number;
  title: string;
  completed: 0 | 1;
  created_at: string;
}

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(([]));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTasks()
      .then((data: TaskAPI[]) => {
        const formattedTasks = data.map(task => ({
          id: task.id.toString(),
          title: task.title,
          completed: task.completed === 1,
        }));
        setTasks(formattedTasks);
      })
      .catch(() => setError('Erro ao carregar tarefas'))
      .finally(() => setLoading(false));
  }, []);

    const handleComplete = async (id: string) => {
    try {
      await completeTask(Number(id));
      setTasks(prev =>
        prev.map(task =>
          task.id === id ? { ...task, completed: true } : task
        )
      );
    } catch {
      setError('Erro ao completar tarefa');
    }  
    
}

    const handleCreate = async (title: string) => {
  try {
    const newTask = await createTask(title);
   
    setTasks(prev => [...prev, {
      id: newTask.id.toString(),
      title: newTask.title,
      completed: false,
    }]);
  } catch (e) {
    console.log('erro:', e); // ← ou caiu aqui?
    setError('Erro ao criar tarefa');
  }
};

    const handleDelete = async (id: string) => {
    try {
      await deleteTask(Number(id));
      setTasks(prev => prev.filter(task => task.id !== id));
    } catch {
      setError('Erro ao deletar tarefa');
    }

    
    };

return { tasks, loading, error, completeTask: handleComplete, deleteTask: handleDelete, createTask: handleCreate };
  
}

export default useTasks;