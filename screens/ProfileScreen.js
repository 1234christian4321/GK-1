import React from 'react'; // Funktionelle komponenter mm.
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'; // RN UI komponenter
import { useAuth } from '../context/AuthContext'; // Custom auth hook
import { styles } from '../styles/styles'; // Centraliserede styles
import FooterList from '../components/FooterList'; // Footer komponent

// Logo asset (kan skiftes til brugerens avatar senere)
const logo = require('../assets/diffd_icon.png');

export default function ProfileScreen() {
  const { user, logout } = useAuth(); // Hent bruger + logout funktion
  const email = user?.email || 'Unknown user'; // Fallback hvis ingen bruger
  const initial = email ? email[0].toUpperCase() : '?'; // Bruges hvis man laver initial avatar

  // Midlertidige statistik tal – kan senere hentes fra backend
  const stats = [
    { label: 'Ratings', value: 12 },
    { label: 'Favorites', value: 4 },
    { label: 'Watchlist', value: 9 },
  ];

  return (
    // Yderste wrapper så footer kan ligge udenfor ScrollView (footer skal være fast i bunden)
    <View style={{ flex: 1 }}>
      {/* ScrollView så siden kan udvides med mere indhold uden overflow */}
      <ScrollView style={styles.profileScroll} contentContainerStyle={styles.profileScrollContent}>
        {/* Header sektion med logo og email */}
        <View style={styles.profileHeader}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.title}>Your Profile</Text>
          <Text style={styles.userEmail}>{email}</Text>
        </View>

        {/* Statistik kort i en Listerække */}
        <View style={styles.statRow}>
          {stats.map(s => (
            <View key={s.label} style={styles.statCard}>
              <Text style={styles.statValue}>{s.value}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </View>

        {/* Handlingsknapper til fremtidige features */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionButton} activeOpacity={0.85}>
            <Text style={styles.actionButtonText}>Rate Game</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.actionButtonSecondary]} activeOpacity={0.85}>
            <Text style={styles.actionButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Logout knap */}
        <TouchableOpacity style={[styles.actionButton, styles.logoutButton]} activeOpacity={0.85} onPress={logout}>
          <Text style={styles.actionButtonText}>Log Out</Text>
        </TouchableOpacity>

        {/* Ekstra afstand så indhold ikke skjules bag footer */}
        <View style={{ height: 40 }} />
      </ScrollView>
      {/* Footer ligger udenfor scroll for at være fast i bunden */}
      <FooterList />
    </View>
  );
}
