import React from 'react';
import { View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useFonts } from '@expo-google-fonts/inter';
import AppLoading from "expo-app-loading"

import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter'
import {Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani'

import { Signin } from './src/screens/SignIn';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <Signin/>
  );
}

