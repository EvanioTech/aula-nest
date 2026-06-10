import {View, TouchableOpacity, Text} from 'react-native';
import Button from '../ui/Button';
import Card from '../ui/Card';

interface SettingsListProps {
  onLogout: () => void;
}

const SettingsList = ({ onLogout }: SettingsListProps) => {
  return (
    <View className="flex-1 items-center justify-center gap-4 px-4">
      <Text className="text-2xl font-bold text-pink-500">Settings</Text>
      <Card  title="Account" description="Manage your account settings and preferences." />
      <Card title="Notifications" description="Customize your notification preferences." />
      <Card title="Privacy" description="Review and adjust your privacy settings." />
      <Button title="Logout"  onPress={onLogout} variant="secondary" />
    </View>
  );
};

export default SettingsList;