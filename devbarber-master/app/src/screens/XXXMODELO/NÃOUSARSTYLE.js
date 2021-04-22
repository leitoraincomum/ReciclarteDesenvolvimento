///APENAS MODELO
import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #63c2d1;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: #63c2d1;
`;

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  width: 250px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
export const SearchButton = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
`;

export const FinishButtonText = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  background-color: #268596;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding-left: 12;
`;
