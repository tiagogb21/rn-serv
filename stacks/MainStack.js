import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Preload from "../screens/Preload";
import SignIn from "../screens/Preload";
import SignUp from "../screens/SignUp";

const stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      {/* Preload */}
      <Stack.Screen name="Preload" component={Preload} />
      {/* Login */}
      <Stack.Screen name="SignIn" component={SignIn} />
      {/* Cadastro */}
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
