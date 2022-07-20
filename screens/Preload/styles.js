import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const styles = StyleSheet.create({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6ad0de",
  },
  logo: {
    width: 250,
    height: 350,
    opacity: 1,
  },
});

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;
