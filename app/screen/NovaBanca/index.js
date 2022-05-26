import { View, Text } from 'react-native';
import React, { useState } from 'react';
import {
    Container,
    TextoPadrao,
    TituloInput,
    BoxForm,
    TxtInput,
    BtnPrimary,
    TxtBtnDefalt,
    BoxFormInput,
    ConatinerSelect,
    BoxSelect,
    RadioSelectTrue,
    RadioSelectFalse,
} from '../../style';
import { HeaderApp } from '../../components';

export default function NovaBanca() {
    const [nomeNovaBanca, setNomeNovaBanca] = useState('');
    const [moeda, setMoeda] = useState('');

    const SelecionaMoedaDolar = (moeda) => {
        if (moeda === 'D') {
            return (
                <RadioSelectTrue />
            );
        } else {
            return <RadioSelectFalse />
        }
    }
    const SelecionaMoedaReal = (moeda) => {
        if (moeda === 'R') {
            return (
                <RadioSelectTrue />
            );
        } else {
            return <RadioSelectFalse />
        }
    }

    return (
        <Container>
            <HeaderApp titulo='Nova Banca' />
            <BoxForm>
                <BoxFormInput>
                    <TituloInput>Nome da nova banca</TituloInput>
                    <TxtInput value={nomeNovaBanca} onChangeText={txt => setNomeNovaBanca(txt)} />
                </BoxFormInput>
                <BoxFormInput>
                    <TituloInput>Moeda</TituloInput>
                    <ConatinerSelect>
                        <BoxSelect onPress={() => {
                            setMoeda('D');
                        }}>
                            {SelecionaMoedaDolar(moeda)}
                            <TextoPadrao>Dólar</TextoPadrao>
                        </BoxSelect>
                        <BoxSelect onPress={() => {
                            setMoeda('R');
                        }}>
                            {SelecionaMoedaReal(moeda)}
                            <TextoPadrao>Real</TextoPadrao>
                        </BoxSelect>
                    </ConatinerSelect>
                </BoxFormInput>
                <BoxFormInput>
                    <TituloInput>Valor inicial da banca</TituloInput>
                    <TxtInput value={nomeNovaBanca} onChangeText={txt => setNomeNovaBanca(txt)} />
                </BoxFormInput>
                <BoxFormInput>
                    <TituloInput>Taxa stop win</TituloInput>
                    <TxtInput value={nomeNovaBanca} onChangeText={txt => setNomeNovaBanca(txt)} />
                </BoxFormInput>
                <BoxFormInput>
                    <TituloInput>Taxa por entrada</TituloInput>
                    <TxtInput value={nomeNovaBanca} onChangeText={txt => setNomeNovaBanca(txt)} />
                </BoxFormInput>
                <BoxFormInput>
                    <BtnPrimary>
                        <TxtBtnDefalt onPress={() => { alert('Salvo em bancas') }}>Salvar</TxtBtnDefalt>
                    </BtnPrimary>
                </BoxFormInput>
            </BoxForm>
        </Container>
    )
}