import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CounterScreen = () => {
  //using hooks
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />

      {/* values */}
      <Text> The value of count is :{counter}</Text>
    </View>
  );
};

export default CounterScreen;
