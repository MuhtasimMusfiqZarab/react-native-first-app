import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SquareScreen = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={onIncrease} title={`Increase ${color}`}></Button>
      <Button onPress={onDecrease} title={`Increase ${color}`}></Button>
    </View>
  );
};

export default SquareScreen;
