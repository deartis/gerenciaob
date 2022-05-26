import { View, Text, Button } from 'react-native';
import React from 'react';
import { Container, TextoPadrao, BtnInicial1, BtnInicial2, BtnInicial3, TxtBtn, ContainerCenter } from '../../style';
import {HeaderApp} from '../../components';

export default function Home({navigation}) {
  return (
    <Container>
      <HeaderApp titulo='Seja Bem Vindo!' />
      <ContainerCenter>
        <BtnInicial1 onPress={() => { navigation.navigate('NovaBanca') }}>
          <TxtBtn>Novo</TxtBtn>
        </BtnInicial1>
        <BtnInicial2 onPress={() => { navigation.navigate('Banca') }}>
          <TxtBtn>Banca</TxtBtn>
        </BtnInicial2>
        <BtnInicial3 onPress={() => { navigation.navigate('Operacoes') }}>
          <TxtBtn>Operações</TxtBtn>
        </BtnInicial3>
      </ContainerCenter>
    </Container>
  )
}