import { View, Text, TextInput, Button, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { styles } from '../styles/styles';
import FooterList from '../components/FooterList';

export default function SignupScreen({ navigation }) {
  const { signup } = useAuth();
  const state = { email: '', password: '' };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign up</Text>

        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
          onChangeText={(t) => (state.email = t)}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          onChangeText={(t) => (state.password = t)}
        />

        <Button title="Opret konto" onPress={() => signup({ email: state.email })} />

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Har du allerede en konto? Log ind</Text>
        </TouchableOpacity>

        <FooterList />
      </View>
    </TouchableWithoutFeedback>
  );
}
