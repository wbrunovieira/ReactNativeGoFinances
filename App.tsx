import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider  } from 'styled-components'

import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold

 } from '@expo-google-fonts/poppins'

import theme from './src/global/styles/themes';

import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './src/routes/app.routes'


export default function App() {
  const [ fontsloaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsloaded) {
    return <AppLoading />
  }
  return (

    <ThemeProvider theme={theme}>
      <NavigationContainer>

           <AppRoutes />
      </NavigationContainer>
 
    </ThemeProvider>
   
  
  );
}


