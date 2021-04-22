import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #63c2d1;
`;

export const FinishButton = styled.TouchableOpacity`
  background-color: #268596;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const FinishButtonText = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;
export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #268596;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  height: 30px;
  background-color: #268596;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  padding-left: 22;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: #268596;
`;

export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  color: #268596;
  font-weight: bold;
  margin-left: 5px;
`;
export const HeaderTitle = styled.Text`
  width: 250px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;