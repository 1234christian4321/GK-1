import React, { useState } from 'react'; // React + hook til lokal komponent state
import { View, Button, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Text } from 'react-native'; // Grundlæggende RN komponenter
import { TextInput } from 'react-native-paper'; // Material design input med tema
import { useAuth } from '../context/AuthContext'; // Egen auth context hook
import { styles } from '../styles/styles'; // Fælles stylesheet
import FooterList from '../components/FooterList'; // Footer liste komponent

export default function LoginScreen({ navigation }) {
  const { login, error, loadingAction } = useAuth(); // Hent login funktion + fejl/loading
  const [email, setEmail] = useState(''); // Email state
  const [password, setPassword] = useState(''); // Password state
  const [showPassword, setShowPassword] = useState(false); // Toggle for at vise/skjule password

  return (
    // Wrapper så tastatur lukkes når man trykker udenfor felter
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>

        {/* EMAIL FELT */}
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail} // Opdater state ved input
          mode="outlined"
          style={[styles.input]} // Bevarer konsistent styling
          textColor="#eeeaeaff"
          placeholderTextColor="#fcf7f7ff"
          outlineColor="#818181ff"
          activeOutlineColor="#cbcbccff"
          cursorColor="#f1f1fcff"
          selectionColor="#fffbfbff"
          autoComplete="email" // Hjælp til autofill
          textContentType="emailAddress" // iOS hint
          importantForAutofill="yes" // Tillad autofill
          theme={{
            colors: {
              primary: '#520f0fff',          // Fokus farve
              onSurfaceVariant: '#ceced1ff', // Label farve når ikke fokus
            },
          }}
        />

        {/* PASSWORD FELT */}
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          style={styles.input}
          textColor="#eeeaeaff"
          placeholderTextColor="#fcf7f7ff"
          outlineColor="#818181ff"
          activeOutlineColor="#cbcbccff"
          cursorColor="#f1f1fcff"
          selectionColor="#fffbfbff"
          secureTextEntry={!showPassword} // Skjul eller vis tekst
          right={(
            <TextInput.Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(p => !p)}
            />
          )}
          textContentType="oneTimeCode" // Trick for at undgå iOS stærk kode forslag
            autoComplete="off" // Deaktiver autofill for password
            importantForAutofill="no"
          theme={{
            colors: {
              primary: '#520f0fff',
              onSurfaceVariant: '#ceced1ff',
            },
          }}
        />

        {/* LOGIN KNAP */}
        <View style={styles.buttonWrapper}>
          <Button
            title={loadingAction ? 'Signing in...' : 'Sign In'}
            color="#ffffffff"
            onPress={() => login({ email, password })}
            disabled={!email || !password || loadingAction}
          />
        </View>

        {error ? (
          <Text style={{ color: '#ff6b6b', marginTop: 8, textAlign: 'center', fontSize: 12 }}>{error}</Text>
        ) : null}

        {/* LINK TIL SIGNUP */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          activeOpacity={0.7}
        >
          <Text style={styles.linkText}>Don't have an account? Create one</Text>
        </TouchableOpacity>

        <FooterList />
      </View>
    </TouchableWithoutFeedback>
  );
}
