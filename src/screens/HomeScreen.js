import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

//getting props from stack navigator(which is react navigation library)(props.navigation)
// we use props.navigation.navigage to navigate to other pages
const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>Welcome to the Home Screen</Text>
      {/* Button only takes values as props */}
      <Button
        title="Go to components demo"
        onPress={() => props.navigation.navigate("Components")}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("Components")}>
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
