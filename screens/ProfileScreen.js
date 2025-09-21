import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { styles } from '../styles/styles';
import FooterList from '../components/FooterList';

export default function ProfileScreen() {
  const { user, logout } = useAuth ? useAuth() : { user: null, logout: () => {} };

  return (
    <View style={styles?.container || { flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles?.title || { fontSize: 24, fontWeight: 'bold' }}>Profil</Text>
      <Text style={styles?.paragraph || { fontSize: 16 }}>
        Email: {user && user.email ? user.email : 'Ingen bruger logget ind'}
      </Text>
      <Button title="Log ud" onPress={logout} />
      <FooterList />
    </View>
  );
}
