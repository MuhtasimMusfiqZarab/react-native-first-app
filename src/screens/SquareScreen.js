import React, { useState } from "react";
import { View, Text } from "react-native";
//reusable component
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(red);

  //here are the color states

  return (
    <View>
      {/* These three will change the rgb values in the state */}
      <ColorCounter
        onIncrease={() => setRed(red + 1)}
        onDecrease={() => setRed(red - 1)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + 1)}
        onDecrease={() => setGreen(green - 1)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + 1)}
        onDecrease={() => setBlue(blue - 1)}
        color="Green"
      />
    </View>
  );
};

export default SquareScreen;
