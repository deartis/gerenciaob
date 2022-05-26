import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Container,
    Divisor,
    TextoPadrao,
    CardContentCenter,
    TextoGAzul,
    TextoGVerde,
    TextoPVerde,
    TextoPVermelho,
    TextoPAzul,

} from '../../style';
import { HeaderApp } from '../../components';
import { Picker } from '@react-native-picker/picker';

export default function Banca2({ navigation }) {
    const [banca, setBanca] = useState();

    return (
        <Container>
            <Card>
                <CardContent>
                    <TextoPadrao>Banca</TextoPadrao>
                    <Picker style={{ backgroundColor: '#fff' }} selectedValue={banca} onValueChange={(itemValor, itemIndex) => {
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
                    <TextoPadrao>Banca Inicial</TextoPadrao>
                    <TextoGAzul>R$100,00</TextoGAzul>
                    <TextoPadrao>Stop Win</TextoPadrao>
                    <TextoPVerde>5%</TextoPVerde>
                    <TextoPadrao>Stop Loss</TextoPadrao>
                    <TextoPVermelho>5%</TextoPVermelho>
                </CardContentCenter>
                <CardContent>
                    <View>
                        <Pressable onPress={() => { alert('Editar') }}>
                            <TextoPAzul>Editar</TextoPAzul>
                        </Pressable>
                    </View>
                </CardContent>
                <Divisor />
                <CardContentCenter>
                    <TextoPadrao>BANCA ATUAL</TextoPadrao>
                    <TextoGVerde>R$105,00</TextoGVerde>
                </CardContentCenter>
                <CardContent>
                    <View>
                        <Pressable onPress={() => { alert('Editar') }}>
                            <TextoPAzul>Editar</TextoPAzul>
                        </Pressable>
                    </View>
                </CardContent>
                <Divisor />
                <CardContentCenter>
                    <TextoPadrao>LUCRO DO DIA</TextoPadrao>
                    <TextoGVerde>R$5,00</TextoGVerde>
                </CardContentCenter>
                <Divisor />
                <CardContentCenter>
                    <TextoPadrao>PORCENTAGEM GANHA</TextoPadrao>
                    <TextoGVerde>5%</TextoGVerde>
                </CardContentCenter>
                <Divisor />
                <CardContentCenter>
                    <TextoPadrao>PLACAR</TextoPadrao>
                    <TextoGVerde>1 X 3</TextoGVerde>
                </CardContentCenter>

            </Card>
        </Container>
    )
}