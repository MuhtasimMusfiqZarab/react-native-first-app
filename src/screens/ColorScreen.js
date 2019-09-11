import React, { useState } from "react";
import { View, Button, FlatList } from "react-native";

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

const ColorScreen = () => {
  //here are the states
  const [colors, setColors] = useState([]); //initialize as empty object

  return (
    <View>
      <Button
        title="Add color"
        onPress={() => {
          //we cant use push as it modifies the array so...
          setColors([...colors, randomRgb()]);
        }}
      ></Button>

      {/* iterating through the colors  */}
      <FlatList
        keyExtractor={item => item}
        data={colors} // data we are iterationg over
        //function called with every pieces of items on the list => (item, index) as args
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

export default ColorScreen;
