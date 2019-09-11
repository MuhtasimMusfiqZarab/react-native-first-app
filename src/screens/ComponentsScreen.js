import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
const ComponentsScreen = () => {
  const name = "Zarab";
  return (
    <View>
      <Text style={styles.textStyle}>Getting Started With React Native</Text>
      <Text style={{ fontSize: 20 }}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  }
});

export default ComponentsScreen;
