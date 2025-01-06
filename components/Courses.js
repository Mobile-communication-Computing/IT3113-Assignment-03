import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { courses } from "../data/StudentsDb";

const Courses = ({}) => {};
export default Courses;
const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 4,
    textAlign: "center",
  },
  image: {
    marginTop: 20,
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  profile_pic: {
    width: 150,
    height: 150,
    borderRadius: 100,
    margin: "auto",
  },
});
