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
import Ano from './ano';
import Mes from './mes';
import Dia from './dia';
import Oper from './operacoes';

export default function Operacoes({ navigation }) {
  const [pagina, setPagina] = useState('ano');
  console.log(pagina);

  const Pagina = (props) => {
    switch (props.pagina) {
      case 'mes':
        return (
          <View>
            <Mes />
          </View>
        );
        break;
      case 'dia':
        return (
          <View>
            <Dia />
          </View>
        );
        break;
      case 'ano':
        return (
          <View>
            <Ano setDados={setPagina} valor={pagina} />
          </View>
        );
        break;
      case 'oper':
        return (
          <View>
            <Oper />
          </View>
        );
        break;
      default:
        return (
          <View>
            <Ano />
            <TextoGVerde>{pagina}</TextoGVerde>
          </View>
        );
        break;
    }
  }
  return (
    <Container>
      <HeaderApp titulo='Operações' />
      <Pagina pagina={pagina} />
    </Container>
  )
}