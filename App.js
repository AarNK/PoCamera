import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Camera } from 'expo-camera';
import Home from './screen/Home';
import Kamera from './screen/Kamera';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Home' component={Home} options={{headerShoun : false}}/>
        <Stack.Screen name ='Kamera' component={Kamera} options={{headerShoun : false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );}
