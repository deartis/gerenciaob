import * as React from 'react';
import styled from 'styled-components/native';

//Cores Usadas no App
const cores = {
  Verde: '#04CF00',
  Vermelho: '#E83131',
  Azul: '#319BE8',
  FundoApp: '#111D22',
  Linhas: '#173952',
  TextoPadrao:'#FFFFFF',
  DetalheSub: '#454545',
  Placeholded: '#BEBEBE'
};

//=================================
//Configurações Globais
//=================================
export const Container = styled.ScrollView`
  flex: 1;
  background-color: #111D22;
`
export const ContainerCenter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`
export const TextoPadrao = styled.Text`
  color: #fff;
  font-size: 14px;
`
export const TextoGAzul = styled.Text`
  color: #00D2FF;
  font-size: 24px;
`
export const TextoGVerde = styled.Text`
  color: #04CF00;
  font-size: 24px;
`
export const TextoGVermelho = styled.Text`
  color: #E83131;
  font-size: 24px;
`
export const TextoPAzul = styled.Text`
  color: #00D2FF;
  font-size: 14px;
`
export const TextoPVermelho = styled.Text`
  color: #E83131;
  font-size: 14px;
`
export const TextoPVerde = styled.Text`
  color: #04CF00;
  font-size: 14px;
`
export const TextoDetalhe = styled.Text`
  color: #454545;
`

//=================================
//Configuração dos botões iniciais
//=================================
 export const BtnInicial1 = styled.Pressable`
  background-color: #04CF00;
  width: 100%;
  margin-bottom: 30px;
  padding-bottom: 15px;
  padding-top: 15px;
  border-radius: 10px;
 `
 export const BtnInicial2 = styled.Pressable`
  background-color: #319BE8;
  width: 100%;
  margin-bottom: 30px;
  padding-bottom: 15px;
  padding-top: 15px;
  border-radius: 10px;
 `
 export const BtnInicial3 = styled.Pressable`
  background-color: #E83131;
  width: 100%;
  margin-bottom: 30px;
  padding-bottom: 15px;
  padding-top: 15px;
  border-radius: 10px;
 `
 export const TxtBtn = styled.Text`
  color: #FFFFFF;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`
//=================================
//Card App
//=================================
export const Card = styled.View`
  border-radius: 5px;
  border-width: 1px;
  border-color:#173952 ;
  margin: 15px;
`
export const CardContent = styled.View`
  padding: 10px;
`
export const CardContentCenter = styled.View`
  padding: 10px;
  align-items: center;
`
export const CadContentRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`
//=================================
//Divisor App
//=================================
export const Divisor = styled.View`
  height: 1px;
  border-bottom-width: 1px;
  border-bottom-color:#173952 ;
  width: 100%;
`
//=================================
//Configurações dos inputs
//=================================
export const BoxForm = styled.View`
  padding: 20px;
`
export const BoxFormInput = styled.View`
  margin-bottom: 10px;
  margin-top: 10px;
`
export const TituloInput = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-bottom: 6px;
`
export const TxtInput = styled.TextInput`
  background-color: #fff;
  border-radius: 5px;
  border-width: 1px;
  border-color:#173952 ;
  color: #173952;
`
export const ConatinerSelect = styled.View`
  align-items: flex-start;
  flex-direction: row;
`
export const ContentSelect = styled.View`
  align-items: flex-start;
  flex-direction: row;
  margin-right: 30px;
`
export const RadioSelectTrue = styled.View`
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: #04CF00;
  border-color: #fff;
  border-width: 3px;
  margin-right: 5px;
`
export const RadioSelectFalse = styled.View`
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: #454545;
  border-color: #fff;
  border-width: 3px;
  margin-right: 5px;
`
export const BoxSelect = styled.Pressable`
  align-items: flex-start;
  flex-direction: row;
  margin-right: 30px;
`

//=================================
//Configuração Botões
//=================================
export const TxtBtnDefalt = styled.Text`
  color: #FFFFFF;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`
export const BtnPrimary = styled.Pressable`
  background-color: #E83131;
  width: 100%;
  padding-bottom: 10px;
  padding-top: 10px;
  border-radius: 7px;
 `
 export const BtnSecundary = styled.Pressable`
  background-color: #04CF00;
  width: 100%;
  padding-bottom: 15px;
  padding-top: 15px;
  border-radius: 10px;
 `
  //=================================
 //Configuração Link
//=================================
export const LinkText = styled.Pressable`
  align-items: stretch;
`