import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TelaHome from './Componentes/TelaHome';
import TelaSobre from './Componentes/TelaSobre';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer style = {styles.container}>
      <Drawer.Navigator>
        <Drawer.Screen name = "Tela Home" component = {TelaHome} />
        <Drawer.Screen name = "Tela Sobre" component = {TelaSobre} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
