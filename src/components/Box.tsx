import { StyleSheet, View } from "react-native";

export default function Box({ color }: { color: string }) {
  return <View style={[styles.box, { backgroundColor: color }]} />;
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "lightgray",
  },
});
