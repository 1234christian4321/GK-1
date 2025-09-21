import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Stack navigator fra React Navigation
import { useAuth } from '../context/AuthContext'; // Henter auth state
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator(); // Opretter en stack instance

export default function RootNavigator() {
  const { user } = useAuth(); // Hvis user != null er man logget ind

  return (
    <Stack.Navigator screenOptions={{
    headerShown: true,
    headerStyle: { backgroundColor: '#181A20' },   // Mørk baggrund
    headerTitleStyle: { color: '#fdf9f9ff' },        // Hvid titel
    headerTintColor: '#fcf7f7ff',                    // Ikoner / back-knap
    headerShadowVisible: false,                    
    contentStyle: { backgroundColor: '#181A20' }   
  }}>

      {/* Hvis logget ind -> kun profilskærm, ellers login + signup */}
      {user ? (
        <Stack.Screen name="Profile" component={ProfileScreen} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
