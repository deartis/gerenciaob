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

export default function Ano({setDados, valor}) {

    const dados = (mes) => {
        setDados(mes);
    }
    
    return (
        <Card>
            <CardContentCenter>
                <TextoPadrao>Ano</TextoPadrao>
                <TextoGVerde>2022</TextoGVerde>
            </CardContentCenter>
            <Divisor />
            <CadContentRow>
                <TextoPadrao>Janeiro</TextoPadrao>
                <LinkText onPress={() => { dados("Janeiro")}}>
                    <TextoPAzul >Visualizar</TextoPAzul>
                </LinkText>
            </CadContentRow>
            <CadContentRow>
                <TextoPadrao>Fevereiro</TextoPadrao>
                <LinkText  onPress={() => { dados("Fevereiro")}}>
                    <TextoPAzul>Visualizar</TextoPAzul>
                </LinkText>
            </CadContentRow>
            <CadContentRow>
                <TextoPadrao>Março</TextoPadrao>
                <LinkText  onPress={() => { dados("Março")}}>
                    <TextoPAzul>Visualizar</TextoPAzul>
                </LinkText>
            </CadContentRow>
        </Card>
    )
}