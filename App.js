import React, {useCallback} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import {SplashScreen} from 'expo-splash-screen'
import { Jost_400Regular_Italic } from '@expo-google-fonts/jost';
import {Kreon_400Regular, Kreon_700Bold} from '@expo-google-fonts/kreon'
import {Montserrat_400Regular_Italic, Montserrat_500Medium,
Montserrat_900Black, Montserrat_600SemiBold
} from '@expo-google-fonts/montserrat';
import { LuckiestGuy_400Regular } from '@expo-google-fonts/luckiest-guy';
import { Satisfy_400Regular } from '@expo-google-fonts/satisfy';
import { useFonts } from 'expo-font';

import HomeRotas from './src/rotas/HomeRotas';


export default function App() {
  
  let [fontsLoaded, error] = useFonts({
    Jost_400Regular_Italic,
    Kreon_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_900Black,
    Montserrat_600SemiBold,
    Kreon_700Bold,
    LuckiestGuy_400Regular,
    Satisfy_400Regular
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();    }
  }, [fontsLoaded])

    if(!fontsLoaded){
      return null
    }
  return (
    <>
    <HomeRotas/>
    </>
  );
};