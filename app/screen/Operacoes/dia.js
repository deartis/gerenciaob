import { View, Text } from 'react-native';
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardContentCenter,
  Container,
  Divisor,
  TextoGVerde,
  TextoPadrao,
  TextoPAzul,
  CadContentRow,
  LinkText,
} from '../../style';
import { HeaderApp } from '../../components';
import { Picker } from '@react-native-picker/picker';

export default function Dia({ navigation }) {
  return (
    <Container>
      <HeaderApp titulo='Operações' />
      <Card>
        <CardContentCenter>
          <TextoPadrao>Ano</TextoPadrao>
          <TextoGVerde>2022</TextoGVerde>
        </CardContentCenter>
        <Divisor />
        <CadContentRow>
          <TextoPadrao>Janeiro</TextoPadrao>
          <LinkText onPress={() => { alert('Link de Janeiro') }}>
            <TextoPAzul>Visualizar</TextoPAzul>
          </LinkText>
        </CadContentRow>
        <CadContentRow>
          <TextoPadrao>Fevereiro</TextoPadrao>
          <LinkText onPress={() => { alert('Link de Fevereiro') }}>
            <TextoPAzul>Visualizar</TextoPAzul>
          </LinkText>
        </CadContentRow>
        <CadContentRow>
          <TextoPadrao>Março</TextoPadrao>
          <LinkText onPress={() => { alert('Link de Março') }}>
            <TextoPAzul>Visualizar</TextoPAzul>
          </LinkText>
        </CadContentRow>
      </Card>
    </Container>
  )
}