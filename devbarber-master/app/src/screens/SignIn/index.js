import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';

import Api from '../../Api';
import {UserContext} from '../../contexts/UserContext';

import SignInput from '../../components/SignInput';

import ReciclarLogo from '../../assets/caixa-de-plastico.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext); //dispatch(renomeado para userDispatch) constante para enviar informações para Context
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = async () => {
    if (emailField !== '' && passwordField !== '') {
      let json = await Api.signIn(emailField, passwordField);
      console.log(json);

      if (json.token) {
        await AsyncStorage.setItem('token', json.token); //Salva token no async storage

        userDispatch({
          type: 'setAvatar', //ação definida no reducer
          payload: {
            avatar: json.data.avatar, //avatar que será salvo no context
          },
        });

        navigation.reset({
          //impede usuário voltar para tela login
          routes: [{name: 'MainTab'}],
        });
      } else {
        alert('E-mail e/ou senha errados!');
      }
    } else {
      alert('Preencha os campos!');
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      //Navega o usuário para uma rota e não permite voltar. Ao pressionar botão voltar, o aplicativo fecha/segundo plano.
      routes: [{name: 'SignUp'}],
    });
  };

  return (
    <Container>
      <ReciclarLogo width="100%" height="160" />

      <InputArea>
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
        />

        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          password={true}
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
