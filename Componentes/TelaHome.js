import React from 'react';
import { Button, View } from 'react-native';
import estilo from './styles';

export default function TelaHome (props) {
  return (
    <View style={estilo.container}>
        <Button
            title = "Abrir menu"
            onPress = { ( ) => { props.navigation.openDrawer( ) } }
        />
    </View>
  );
}