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

import ReciclarLogo from '../../assets/caixa-de-plastico.svg';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';


import Api from '../../Api';

export default () => {
  const navigation = useNavigation();

  const handleLogoutClick = async () => {
    await Api.logout();
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <Container>
      <HeaderTitle numberOfLines={2}>Seu perfil</HeaderTitle>
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
          placeholder="Digite sua senha"
          password={true}
        />

        
          <CustomButtonText>ALTERAR PERFIL</CustomButtonText>
      </InputArea>

        <SignMessageButtonText>Excluir conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Suporte</SignMessageButtonTextBold>
   
      <FinishButton onPress={handleLogoutClick}>
        <FinishButtonText>Sair </FinishButtonText>
      </FinishButton>

    </Container>
  );
};
