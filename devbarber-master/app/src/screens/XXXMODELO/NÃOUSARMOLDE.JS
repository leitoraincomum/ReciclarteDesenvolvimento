////////APENAS MODELO
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import StarFull from '../../components/StarFull';

import {
  Container, //////////////////////////////////////////////////
  HeaderArea,
  HeaderTitle,
  FinishButton,
  FinishButtonText,
} from './styles';

import SwiperComponent from '../../components/Swiper';
import SearchIcon from '../../assets/planeta-terra.svg';

export default () => {
  return (
    <Container>
      <HeaderArea>
        <HeaderTitle numberOfLines={2}>Lista de Parceiros</HeaderTitle>
        <SearchIcon width="36px" height="26px" fill="#fff" />
      </HeaderArea>

      <ScrollView style={styles.container}>
        <View style={styles.swiperContent}>
          <SwiperComponent />
        </View>

        <StarFull showNumber={true} />
       
        <View style={styles.headerContent}>
          <ScrollView style={{width: '65%'}}>
            <Text style={styles.house}>Reciclagem Verde</Text>
          </ScrollView>

          <Text style={styles.describ}>Ferraz de Vasconcelos</Text>
          <Text style={styles.description}>
            Empresa a 35 anos no mercado e há 20 em Ferraz de Vasconcelos.
          </Text>

          <View style={{width: '65%'}}>
            <Text style={styles.adress}>Endereço</Text>
          </View>
          <Text style={styles.description}>
            Rua: Rio das Folhas Verdes, Bairro: Nilo do Egito, n°000, CEP:
            00000-000, Cidade: Ferraz de Vasconcelos-SP.
          </Text>

          <View style={{width: '65%'}}>
            <Text style={styles.adress}>Contato</Text>
          </View>
          <Text style={styles.description}>Tel:(88)8888-8888</Text>
          <Text style={styles.description}>Fax:(88)8888-8888</Text>
          <Text style={styles.description}>Whats:(88)8888-8888</Text>
        </View>
        <FinishButtonText>Faça aqui o orçamento na Reciclagem verde </FinishButtonText>

<ScrollView style={styles.container}>
<View style={styles.swiperContent}>
  <SwiperComponent />
</View>

<StarFull showNumber={true} />

<View style={styles.headerContent}>
  <ScrollView style={{width: '65%'}}>
    <Text style={styles.house}>Reciclagem Verde</Text>
  </ScrollView>

  <Text style={styles.describ}>Ferraz de Vasconcelos</Text>
  <Text style={styles.description}>
    Empresa a 35 anos no mercado e há 20 em Ferraz de Vasconcelos.
  </Text>

  <View style={{width: '65%'}}>
    <Text style={styles.adress}>Endereço</Text>
  </View>
  <Text style={styles.description}>
    Rua: Rio das Folhas Verdes, Bairro: Nilo do Egito, n°000, CEP:
    00000-000, Cidade: Ferraz de Vasconcelos-SP.
  </Text>

  <View style={{width: '65%'}}>
    <Text style={styles.adress}>Contato</Text>
  </View>
  <Text style={styles.description}>Tel:(88)8888-8888</Text>
  <Text style={styles.description}>Fax:(88)8888-8888</Text>
  <Text style={styles.description}>Whats:(88)8888-8888</Text>
</View>
<FinishButtonText>Faça aqui o orçamento na Reciclagem verde </FinishButtonText>
<ScrollView style={styles.container}>
<View style={styles.swiperContent}>
  <SwiperComponent />
</View>

<StarFull showNumber={true} />

<View style={styles.headerContent}>
  <ScrollView style={{width: '65%'}}>
    <Text style={styles.house}>Reciclagem Verde</Text>
  </ScrollView>

  <Text style={styles.describ}>Ferraz de Vasconcelos</Text>
  <Text style={styles.description}>
    Empresa a 35 anos no mercado e há 20 em Ferraz de Vasconcelos.
  </Text>

  <View style={{width: '65%'}}>
    <Text style={styles.adress}>Endereço</Text>
  </View>
  <Text style={styles.description}>
    Rua: Rio das Folhas Verdes, Bairro: Nilo do Egito, n°000, CEP:
    00000-000, Cidade: Ferraz de Vasconcelos-SP.
  </Text>

  <View style={{width: '65%'}}>
    <Text style={styles.adress}>Contato</Text>
  </View>
  <Text style={styles.description}>Tel:(88)8888-8888</Text>
  <Text style={styles.description}>Fax:(88)8888-8888</Text>
  <Text style={styles.description}>Whats:(88)8888-8888</Text>
</View>
<FinishButtonText>Faça aqui o orçamento na Reciclagem verde </FinishButtonText>
</ScrollView>
</ScrollView>
</ScrollView>
</Container>
 
  );
};

const styles = StyleSheet.create({
  description: {
    fontFamily: 'Montserrat_500Medium',
    paddingHorizontal: 20,
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 2,
  },
  describ: {
    paddingHorizontal: 20,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 10,
    color: '#000',
  },
  adress: {
    paddingHorizontal: 20,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14,
    marginTop: 22,
    color: '#000',
  },
  swiperContent: {
    flexDirection: 'row',
    height: 240,
    width: '100%',
  },
  headerContent: {
    paddingHorizontal: 20,
    flex: 1,
    width: '100%',
    marginTop: 2,
  },
  house: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#4f4a4a',
  },
});