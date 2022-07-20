import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";

import { styles, LoadingIcon } from "./styles";

export default function MainStack() {
  const [time, setTime] = useState("");
  // Para trabalhar com rotas:
  const navigation = useNavigation();

  setTimeout(() => {
    setTime("a");
  }, 1000);

  // Para verificar o token
  useEffect(() => {
    if (time) {
      const checkToken = async () => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          // Valida o token:
        } else {
          navigation.navigate("SignIn");
        }
      };
      checkToken();
    }
  }, [time]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/work.png")} />
      <LoadingIcon size="large" color="#FFFFFF" />
    </View>
  );
}
