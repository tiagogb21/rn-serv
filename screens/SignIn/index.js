import React, { useState, useEffect, useContext } from "react";
import { Text, View, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../src/contexts/UserContext";

import SignInput from "../components/SignInput";

import {
  styles,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from "./styles";

export default function SignIn() {
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleSignClick = async () => {
    if (!emailField && !passwordField) {
      let json = await Api.signIn(emailField, passwordField);

      if (json.token) {
        await AsyncStorage.setItem("token", json.token);

        userDispatch({
          type: "setAvatar",
          payload: {
            avatar: json.data.avatar,
          },
        });

        navigation.reset({
          routes: [{ name: "MainTab" }],
        });
      } else {
        alert("E-mail e/ou senha errados!");
      }
    } else {
      alert("Preencha os campos!");
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: "SignUp" }],
    });
  };

  return (
    <View style={styles.container}>
      <SignInput
        IconSvg="email.png"
        placeholder="Digite seu e-mail"
        value={emailField}
        onChangeText={(t) => setEmailField(t)}
      />

      <SignInput
        IconSvg="lock.png"
        placeholder="Digite sua senha"
        value={passwordField}
        onChangeText={(t) => setPasswordField(t)}
        password={true}
      />

      <CustomButton>
        <CustomButtonText>LOGIN</CustomButtonText>
      </CustomButton>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>
          Ainda não possui sua conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </View>
  );
}
