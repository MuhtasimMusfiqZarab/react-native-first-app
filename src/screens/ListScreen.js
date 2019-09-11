import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend#1", age: 20 },
    { name: "Friend#2", age: 20 },
    { name: "Friend#3", age: 20 },
    { name: "Friend#4", age: 20 },
    { name: "Friend#5", age: 20 },
    { name: "Friend#6", age: 20 },
    { name: "Friend#7", age: 20 },
    { name: "Friend#8", age: 20 },
    { name: "Friend#9", age: 20 }
  ];

  return (
    //FlatList has 2 required props (data prop & renderItem prop)
    //renderItem, called with a func with every element out of data array
    //friend arg is each friend object
    //inside keyExtractor inspect each obj and return unique key for each one
    <FlatList
      //   horizontal // horizontal listing
      //   showsHorizontalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        //element.item holds the individual item
        return (
          <Text style={styles.testStyle}>
            {item.name}-{item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  testStyle: {
    //adding margin to above & below each list item
    marginVertical: 50
  }
});

export default ListScreen;
