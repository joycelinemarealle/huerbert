import { colors, radius, spacing } from "@/token";
import type { ViewProps } from "react-native";
import { StyleSheet, View } from "react-native";

export default function Card({ style, ...props }: ViewProps) {
  return <View {...props} style={[styles.card, style]} />;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: spacing["3xl"],
  },
});
