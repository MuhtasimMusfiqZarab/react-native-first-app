import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend#1" },
    { name: "Friend#2" },
    { name: "Friend#3" },
    { name: "Friend#4" }
  ];

  return (
    //FlatList has 2 required props (data prop & renderItem prop)
    //renderItem, called with a func with every element out of data array
    //friend arg is each friend object
    //inside keyExtractor inspect each obj and return unique key for each one
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        //element.item holds the individual item
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
