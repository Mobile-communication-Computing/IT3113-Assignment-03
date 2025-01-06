import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button, Icon, TextInput } from "react-native-paper";
import { students } from "../data/StudentsDb";

const Login = () => {};

export default Login;
const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space between",
  },
  container: {
    flexGrow: 1,
    padding: 20,
    width: "100%",
  },
  footer: {
    backgroundColor: "#4b0150",
    width: "100%",
    color: "#fff",
    padding: 20,
    text: {
      color: "#fff",
      textAlign: "center",
    },
  },
  form: {
    marginTop: 20,
    input: {
      width: "100%",
    },
  },
  h1: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    marginTop: 20,
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#4b0150",
    marginTop: 20,
  },
  error: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f4edf7",
    borderRadius: 5,
    flexDirection: "row",
    gap: 6,
  },
});
