import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Box from "../components/Box";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "red" }}>
        Edit src/app/index.tsx to edit this screen.
      </Text>
      <Box color="blue" />
      <Box color="red" />
      <Link href="./about" style={styles.link}>
        About
      </Link>
      <Link href="./settings" style={styles.link}>
        Settings
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
    gap: 10,
  },
  link: {
    color: "blue",
    padding: 12,
    textDecorationLine: "underline",
  },
});
