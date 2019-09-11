import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Welcome to the Home Screen</Text>
      {/* Button only takes values as props */}
      <Button
        title="Go to components demo"
        onPress={() => console.log("Button is pressed")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
