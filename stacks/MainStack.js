import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Preload from "../screens/Preload";
import SignIn from "../screens/Preload";
import SignUp from "../screens/SignUp";

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      // Estabelecemos a primeira tela a ser renderizada (segurança):
      initialRouteName="Preload"
      screenOptions={{
        // Não queremos que tenha cabeçalho
        headerShown: false,
      }}
    >
      {/* Preload */}
      <Stack.Screen name="Preload" component={Preload} />
      {/* Login */}
      <Stack.Screen name="SignIn" component={SignIn} />
      {/* Cadastro */}
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
