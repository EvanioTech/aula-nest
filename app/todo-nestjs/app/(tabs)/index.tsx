
import Card from "@/components/ui/Card";
import "./../../global.css";
import {LinearGradient} from "expo-linear-gradient";
import { Text, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <LinearGradient
    colors={['#6a11cb', '#2575fc']}
    style={{ flex: 1 }}
  >
    <View className="flex-1 items-center justify-center px-4 ">
      <Text className="text-2xl font-bold text-pink-500 mb-40">My To-Do List</Text>
      <Card title="Learn Expo Router" completed={false} />
      <Card title="Learn Expo Router" completed={true} />
      <Card title="Learn Expo Router" completed={false} />
    </View>
  </LinearGradient>
  );
}


