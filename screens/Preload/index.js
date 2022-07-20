import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { styles, LoadingIcon } from "./styles";
import AsyncStorage from "@react-native-community/async-storage";

export default function MainStack() {
  // Para verificar o token
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
    };
    checkToken();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/work.png")} />
      <LoadingIcon size="large" color="#FFFFFF" />
    </View>
  );
}
