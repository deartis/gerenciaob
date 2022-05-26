import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Cores from '../../style/cores';

export default function Header(props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>{props.titulo}</Text>
    </View>
  )
}

const estilo = StyleSheet.create({
  container: {
    borderBottomColor: Cores.linhasBordas,
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 20,
    marginBottom: 10,

  },
  titulo: {
    color: Cores.texto,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});