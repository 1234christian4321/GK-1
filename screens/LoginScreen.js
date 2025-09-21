import React, { useState } from 'react';
import { View, Button, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useAuth } from '../context/AuthContext';
import { styles } from '../styles/styles';
import FooterList from '../components/FooterList';

export default function LoginScreen({ navigation }) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Log ind</Text>

        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          style={styles.input}
          theme={{ colors: { 
            primary: '#6a63f9ff', 
            text: '#fff', 
            placeholder: '#efe5e5ff', // <-- placeholder color here
            background: '#e1e6f5ff' 
          }}}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          label="Adgangskode"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          style={styles.input}
          theme={{ colors: { primary: '#c8c7d0ff', text: '#fff', placeholder: '#aaa', background: '#23262F' } }}
          secureTextEntry
        />

        <View style={styles.buttonWrapper}>
          <Button 
            title="Log ind" 
            color="#6C63FF"
            onPress={() => login({ email })} 
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          activeOpacity={0.7}
        >
          <Text style={styles.linkText}>Har du ikke en konto? Opret dig</Text>
        </TouchableOpacity>

        <FooterList />
      </View>
    </TouchableWithoutFeedback>
  );
}
