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
    TituloInput,
    TextoDetalhe,

} from '../../style';
import { HeaderApp } from '../../components';
import { Picker } from '@react-native-picker/picker';

export default function NovaOperacao() {
    const [valorFinal, setValorFinal] = useState('');

    return (
        <Container>
            <HeaderApp titulo='Nova Operação' />
            <Card>
                <CardContent>
                    <View style={{ alignItems: 'center' }}>
                        <TextoPadrao>Banca</TextoPadrao>
                        <TextoPadrao style={{fontSize: 25, fontWeight: 'bold'}}>Padrão</TextoPadrao>
                        <TextoDetalhe>05/05/2022</TextoDetalhe>
                    </View>
                </CardContent>
                <Divisor />
                <CardContent>
                    <TituloInput>Valor final da operação</TituloInput>
                    <TxtInput value={valorFinal} onChangeText={txt => { setValorFinal(txt) }} />
                </CardContent>
                <CardContent>
                    <TituloInput>Placar</TituloInput>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start'
                    }}>
                        <TxtInput style={{ width: 50, marginRight: 10 }} value={valorFinal} onChangeText={txt => { setValorFinal(txt) }} />
                        <TextoPadrao style={{ fontSize: 30 }}>X</TextoPadrao>
                        <TxtInput style={{ width: 50, marginLeft: 10 }} value={valorFinal} onChangeText={txt => { setValorFinal(txt) }} />
                    </View>
                </CardContent>
                <CardContent>
                    <TituloInput>Estratégia usada</TituloInput>
                    <TxtInput value={valorFinal} onChangeText={txt => { setValorFinal(txt) }} />
                </CardContent>
                <CardContent>
                    <BtnSecundary onPress={() => {}}>
                        <TxtBtnDefalt>Salvar</TxtBtnDefalt>
                    </BtnSecundary>
                </CardContent>
            </Card>
        </Container>
    )
}