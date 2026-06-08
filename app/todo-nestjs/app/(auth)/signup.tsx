import {View, Text} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import SignUpForm from '@/components/auth/SignUpForm';



const SignupScreen = () => {
  return (
    <LinearGradient colors={['#6B46C1', '#B794F4']} className="flex-1 items-center justify-center">
      <SignUpForm title="Cadastro" />
      </LinearGradient>
  );
}

export default SignupScreen;