import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; // Realtime Database
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase konfiguration (offentlig client config – IKKE hemmelig)
const firebaseConfig = {
  apiKey: 'AIzaSyD5ik532zaJRXd2gttV5AQkPAU0meBF3yw',
  authDomain: 'diffd-e19db.firebaseapp.com',
  projectId: 'diffd-e19db',
  storageBucket: 'diffd-e19db.firebasestorage.app',
  messagingSenderId: '522007835026',
  appId: '1:522007835026:web:ac1968509d113b29aa914b',
  // Tilføjet for at undgå region warning (din RTDB ligger i europe-west1):
  databaseURL: 'https://diffd-e19db-default-rtdb.europe-west1.firebasedatabase.app'
};

// Undgå at initialisere flere gange (Expo fast refresh)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Auth med AsyncStorage persistence (gemmer login mellem app restarts)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Realtime Database instance (tilbage fra Firestore til RTDB som ønsket)
// Brug explicit databaseURL så SDK ikke prøver US endpoint først
const db = getDatabase(app, firebaseConfig.databaseURL);

export { auth, db };