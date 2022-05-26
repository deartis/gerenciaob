import { View, Text } from 'react-native';
import React, { useState } from 'react';
import {
  BtnPrimary,
  BtnSecundary,
  Card,
  CardContent,
  Container,
  Divisor,
  TextoPadrao,
  TxtBtn,
  TxtBtnDefalt,
  TxtInput,
  CardContentCenter,
  TextoGAzul,
  TextoPVerde,
  TextoPVermelho,

} from '../../style';
import { HeaderApp } from '../../components';
import {Picker} from '@react-native-picker/picker';

export default function Banca1({navigation}) {
  const [banca, setBanca] = useState();

  return (
    <Container>
      <HeaderApp titulo='Banca' />
      <Card>
        <CardContent>
          <TextoPadrao>Banca</TextoPadrao>
          <Picker style={{backgroundColor:'#fff'}} selectedValue={banca} onValueChange={(itemValor, itemIndex)=>{
            setBanca(itemValor);
            alert("Nome da Banca: " + banca + "\n ID: " + itemIndex);
            
          }}>
            <Picker.Item label="Selecione a banca" value="" />
            <Picker.Item label="De 100 a 100000" value="100a100000" />
            <Picker.Item label="Carro" value="carro" />
            <Picker.Item label="Casa" value="casa" />
            <Picker.Item label="Ar condicionado" value="arcondicionado" />
          </Picker>
        </CardContent>
        <Divisor />
        <CardContentCenter>
          <TextoPadrao>Valor atual da banca</TextoPadrao>
          <TextoGAzul>R$100,00</TextoGAzul>
          <TextoPadrao>Stop Win</TextoPadrao>
          <TextoPVerde>5%</TextoPVerde>
          <TextoPadrao>Stop Loss</TextoPadrao>
          <TextoPVermelho>5%</TextoPVermelho>
        </CardContentCenter>
        <Divisor />
        <CardContent>
        <TextoPadrao>Ainda não registro de operações para o dia de hoje.</TextoPadrao>
        </CardContent>
        <CardContent>
          <BtnSecundary onPress={() => {
            navigation.navigate('NovaOperacao');
          }}>
            <TxtBtnDefalt>Registrar operação</TxtBtnDefalt>
          </BtnSecundary>
        </CardContent>
      </Card>
    </Container>
  )
}