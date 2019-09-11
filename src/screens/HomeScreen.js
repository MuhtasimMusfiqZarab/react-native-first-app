import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

//getting props from stack navigator(which is react navigation library)(props.navigation)
// we use props.navigation.navigage to navigate to other pages
const HomeScreen = props => {
  const { navigate } = props.navigation;
  return (
    <View>
      <Text style={styles.text}>Welcome to the Home Screen</Text>
      {/* Button only takes values as props */}
      <Button
        title="Go to components demo"
        onPress={() => navigate("Components")}
      />
      <Button title="Go to lists demo" onPress={() => navigate("List")} />
      <Button title="Go to Image demo" onPress={() => navigate("Image")} />
      <Button title="Go to Counter demo" onPress={() => navigate("Counter")} />
      <Button title="Go to Colorr demo" onPress={() => navigate("Color")} />

      <TouchableOpacity onPress={() => navigate("List")}>
        <Text>Go to list demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
