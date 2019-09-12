import React, { useState } from "react";
import { View, Text } from "react-native";
//reusable component
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  //here are the states
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const COLOR_CHANGE = 15;

  // this will change the color states accordingly (validate changes)
  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        break;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        break;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        break;

      default:
        break;
    }
  };

  return (
    <View>
      {/* These three will change the rgb values in the state */}
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_CHANGE)}
        onDecrease={() => setColor("red", -1 * COLOR_CHANGE)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_CHANGE)}
        onDecrease={() => setColor("green", -1 * COLOR_CHANGE)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_CHANGE)}
        onDecrease={() => setColor("blue", -1 * COLOR_CHANGE)}
        color="Green"
      />

      {/* The box to show  */}
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      />
    </View>
  );
};

export default SquareScreen;
