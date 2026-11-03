import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Settings" }} />
      <Text style={styles.title}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
