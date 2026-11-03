import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "About" }} />
      <Text style={styles.title}>About Huerbert</Text>
      <Text>A simple app built with Expo and React Native.</Text>
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
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
