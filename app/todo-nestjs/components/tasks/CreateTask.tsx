// components/tasks/CreateTask.tsx
import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

interface CreateTaskProps {
  onCreate: (title: string) => void;
}

const CreateTask = ({ onCreate }: CreateTaskProps) => {
  const [title, setTitle] = useState('');

const handleSubmit = () => {
  if (!title.trim()) return;
  onCreate(title.trim());
  setTitle('');
};

  return (
    <View className="flex-row items-center gap-2 mb-4">
      <TextInput
        className="flex-1 bg-white/20 text-white rounded-lg px-4 py-3"
        placeholder="Nova tarefa..."
        placeholderTextColor="#ffffff80"
        value={title}
        onChangeText={setTitle}
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
      />
      <TouchableOpacity
        className="bg-white/20 rounded-lg px-4 py-3"
        onPress={handleSubmit}
      >
        <Text className="text-white font-bold text-lg">+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateTask;