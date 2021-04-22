import React from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, FinishButton, FinishButtonText} from './styles';
import {
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  HeaderTitle,
} from './styles';

import SignInput from '../../components/SignInput';

import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';


export default () => {
  
  return (
    <Container>
      <HeaderTitle numberOfLines={2}>Peça seu Orçamento</HeaderTitle>
      <InputArea>
        <SignInput
          IconSvg={PersonIcon}
          placeholder="Digite seu nome"
        />

        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
        />

        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite seu material"
        />
        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite seu endereço"
        />

        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua observação"
        />
        
          <CustomButtonText>Enviar Pedido de Orçamento</CustomButtonText>
      </InputArea>

        <SignMessageButtonText>Excluir conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Suporte</SignMessageButtonTextBold>
   
    </Container>
  );
};
