import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Screens/Home";
import { colors } from "./theme";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black_1,
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
});
