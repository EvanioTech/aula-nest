import { StyleSheet } from 'react-native';
import {router, } from 'expo-router';
import { useAuth } from '@/hooks/useAuth';
import Button from '@/components/ui/Button';
import { Text, View } from '@/components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import Card from '@/components/ui/Card';
import SettingsList from '@/components/settings/SettingsList';

export default function TabTwoScreen() {
  

  return (
   <LinearGradient
    colors={['#6a11cb', '#2575fc']}
    style={{ flex: 1 }}
  >
    <SettingsList onLogout={() => {}} />
      
      
    </LinearGradient>
  );
}


