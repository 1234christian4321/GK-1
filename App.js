import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';
import { AuthProvider } from './context/AuthContext';
import { Provider as PaperProvider, MD3DarkTheme } from 'react-native-paper'; // Global Paper theme

// Globalt tema til react-native-paper komponenter
const theme = {
  ...MD3DarkTheme,
  roundness: 14, // Gør TextInput (outlined) mere runde
};


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <NavigationContainer>
          <RootNavigator />
          <StatusBar style="light" backgroundColor="#181A20" />
        </NavigationContainer>
      </AuthProvider>
    </PaperProvider>
  );
}
