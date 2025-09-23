import React, { useState } from 'react'; // React + hook til lokal komponent state
import { View, Text, Button, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native'; // Kernekomponenter fra React Native
import { TextInput } from 'react-native-paper'; // Material design input felter med tema support
import { useAuth } from '../context/AuthContext'; // Egen auth context (login/signup state)
import { styles } from '../styles/styles'; // Fælles styling
import FooterList from '../components/FooterList'; // Fast footer komponent

export default function SignupScreen({ navigation }) {
  // Henter signup funktionen fra auth context
  const { signup, error, loadingAction } = useAuth();

  // Lokale state variabler til formularens inputfelter
  const [email, setEmail] = useState(''); // Brugerens email
  const [password, setPassword] = useState(''); // Adgangskode
  const [confirmPassword, setConfirmPassword] = useState(''); // Gentag adgangskode
  const [showPassword, setShowPassword] = useState(false); // Toggle for at vise/skjule adgangskode
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle for bekræft adgangskode
  const [loading, setLoading] = useState(false); // Viser om vi er i gang med at oprette

  // Simpel validering: alle felter skal være udfyldt (trim fjerner mellemrum i kanterne)
  const allFilled = email.trim() && password.trim() && confirmPassword.trim();

  // Funktion der køres når brugeren trykker "Opret konto"
  const handleSignup = async () => {
    if (!allFilled) return;
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match', 'Please make sure both passwords are identical.');
      return;
    }
    setLoading(true);
    try {
      await signup({ email, password });
    } catch (e) {
      // Error already stored in context
    } finally {
      setLoading(false);
    }
  };

  return (
    // Wrapper der fjerner tastaturet når man trykker udenfor inputfelter
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>

        {/* EMAIL FELT */}
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail} // Opdaterer state når brugeren skriver
          mode="outlined"
          style={styles.input}
          textColor="#eeeaeaff"
          autoCapitalize="none" // Forhindrer at første bogstav bliver stort
          autoComplete="email" // Hjælper tastatur/autofill
          keyboardType="email-address" // Viser email-optimeret tastatur
          placeholderTextColor="#fcf7f7ff"
          outlineColor="#818181ff"
          activeOutlineColor="#cbcbccff"
          selectionColor="#fffbfbff"
          textContentType="emailAddress" // iOS hint til email type
          importantForAutofill="yes" // Tillad system-autofill for email
          theme={{
            colors: {
              primary: '#520f0fff', // Fokusfarve
              onSurfaceVariant: '#ceced1ff', // Label farve når ikke fokus
            },
          }}
        />

        {/* ADGANGSKODE FELT */}
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
          selectionColor="#fffbfbff"
          secureTextEntry={!showPassword} // Skjul eller vis tekst
          right={( // Ikon i højre side af feltet til at toggle visning
            <TextInput.Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(p => !p)}
            />
          )}
          textContentType="oneTimeCode" // Forhindrer iOS i at foreslå "stærk adgangskode"
          autoComplete="off" // Deaktiver autofill
          importantForAutofill="no"
          theme={{
            colors: {
              primary: '#520f0fff',
              onSurfaceVariant: '#ceced1ff',
            },
          }}
        />

        {/* BEKRÆFT ADGANGSKODE FELT */}
        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          mode="outlined"
          style={styles.input}
          textColor="#eeeaeaff"
          placeholderTextColor="#fcf7f7ff"
          outlineColor="#818181ff"
          activeOutlineColor="#cbcbccff"
          selectionColor="#fffbfbff"
          secureTextEntry={!showConfirmPassword}
          right={( // Ikon til at vise/skjule bekræft adgangskode
            <TextInput.Icon
              icon={showConfirmPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowConfirmPassword(p => !p)}
            />
          )}
          textContentType="oneTimeCode" // Samme trick som ovenfor for at undgå iOS forslag
          autoComplete="off"
          importantForAutofill="no"
          theme={{
            colors: {
              primary: '#520f0fff',
              onSurfaceVariant: '#ceced1ff',
            },
          }}
        />

        {/* Knappen vises kun når alle felter er udfyldt */}
        {allFilled ? (
          <View style={styles.buttonWrapper}>
            <Button
              title={loadingAction || loading ? 'Creating...' : 'Create Account'} // Skifter tekst når loading
              onPress={handleSignup}
              color="#f1f1f3ff"
              disabled={loadingAction || loading}
            />
          </View>
        ) : null}

        {error ? (
          <Text style={{ color: '#ff6b6b', marginTop: 8, textAlign: 'center', fontSize: 12 }}>{error}</Text>
        ) : null}

        {/* Link til login skærm */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')} activeOpacity={0.7}>
            <Text style={styles.linkText}>Already have an account? Sign in</Text>
        </TouchableOpacity>

        {/* Fælles footer nederst */}
        <FooterList />
      </View>
    </TouchableWithoutFeedback>
  );
}
