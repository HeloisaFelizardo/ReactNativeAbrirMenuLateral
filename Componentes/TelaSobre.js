import React from 'react';
import { View, Button } from 'react-native';
import estilo from './styles';

export default function TelaSobre (props) {
  return (
    <View style={estilo.container}>
      <Button
            title = "Abrir menu"
            onPress = { ( ) => { props.navigation.openDrawer( ) } }
        />
    </View>
  );
}