
import {LinearGradient} from 'expo-linear-gradient';
import { cssInterop } from 'nativewind';
import LoginForm from '@/components/auth/LoginForm';


cssInterop(LinearGradient, { className: 'style' });

const LoginScreen = () => {
  return (
    <LinearGradient colors={['#6B46C1', '#B794F4']} className="flex-1 items-center justify-center">
    <LoginForm title="Login" />
    </LinearGradient>
    
  );
}

export default LoginScreen;