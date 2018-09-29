import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Stars(props) {
  return (
    <View>
      <Text>
        Name:
        {props.name}
      </Text>
      <Text>{"★".repeat(props.number)}</Text>
    </View>
  );
}
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Stars</Text>
        <Stars name="Hussein" number={3} />
        <Stars name="Esma" number={4} />
        <Stars name="Oktay" number={3} />
        <Stars name="Hilmi" number={3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
