import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Image } from "react-native";

const InputArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: #83d6e3;
  flex-direction: row;
  border-radius: 30px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;
const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #268596;
  margin-left: 10px;
`;

const styles = StyleSheet.create({
  logo: {
    width: 20,
    height: 20,
    opacity: 1,
  },
});

const SignInput = ({ IconSvg, placeholder, value, onChangeText, password }) => {
  return (
    <InputArea>
      <Image style={styles.logo} source={require(`../../assets/${IconSvg}`)} />
      <Input
        placeholder={placeholder}
        placeholderTextColor="#268596"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </InputArea>
  );
};

export default SignInput;
