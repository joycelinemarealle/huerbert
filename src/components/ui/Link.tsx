import { colors, fontSize, fontWeight } from "@/token";
import type { LinkProps } from "expo-router";
import { Link as RouterLink } from "expo-router";
import { StyleSheet } from "react-native";

export default function Link({ style, ...props }: LinkProps) {
  return <RouterLink {...props} style={[styles.link, style]} />;
}

const styles = StyleSheet.create({
  link: {
    color: colors.primary,
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    textDecorationLine: "underline",
  },
});
