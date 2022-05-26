import React from 'react';
import {DrawerLayoutAndroid} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//===============================//
//========== Telas ==============//
//===============================// 
import Home from './screen/Home';
import Banca from './screen/Banca';
import NovaBanca from './screen/NovaBanca';
import NovaOperacao from './screen/NovaOperacao';
import Operacoes from './screen/Operacoes';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{ headerTransparent: false, headerShown: false }} />
        <Stack.Screen name='Banca' component={Banca} options={{ headerTransparent: false, headerShown: false }} />
        <Stack.Screen name='NovaBanca' component={NovaBanca} options={{ headerTransparent: false, headerShown: false }} />
        <Stack.Screen name='NovaOperacao' component={NovaOperacao} options={{ headerTransparent: false, headerShown: false }} />
        <Stack.Screen name='Operacoes' component={Operacoes} options={{ headerTransparent: false, headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}