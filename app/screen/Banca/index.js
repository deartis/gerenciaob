import { View, Text } from 'react-native';
import React, { useState } from 'react';
import {
  Container,
} from '../../style';
import { HeaderApp } from '../../components';
import { Picker } from '@react-native-picker/picker';

//Telas das bancas
import Banca1 from './index1';
import Banca2 from './index2';

export default function Banca({ navigation }) {
  const [pagina, setPagina] = useState('1');

  const Pagina = (props) => {
    if (props.pagina == '1') {
      return (
        <Banca1 />
      );
    } else if (props.pagina == '2') {
      return (
        <Banca2 />
      );
    }
  }


  return (
    <Container>
      <HeaderApp titulo='Banca' />
      <View>
        <Pagina pagina='2' />
      </View>
    </Container>
  )
}