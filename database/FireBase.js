import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";


import {
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
apiKey: "AIzaSyD5ik532zaJRXd2gttV5AQkPAU0meBF3yw",
  authDomain: "diffd-e19db.firebaseapp.com",
  projectId: "diffd-e19db",
  storageBucket: "diffd-e19db.firebasestorage.app",
  messagingSenderId: "522007835026",
  appId: "1:522007835026:web:ac1968509d113b29aa914b"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };