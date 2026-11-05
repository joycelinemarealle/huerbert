import { colors, spacing } from "@/token";
import type { ViewProps } from "react-native";
import { Keyboard, Pressable, StyleSheet, View } from "react-native";

type Props = ViewProps & {
  dismissKeyboard?: boolean;
};

export default function Screen({ dismissKeyboard = false, style, ...props }: Props) {
  if (dismissKeyboard) {
    return (
      <Pressable
        {...props}
        style={[styles.container, style]}
        onPress={Keyboard.dismiss}
        accessible={false}
      />
    );
  }

  return <View {...props} style={[styles.container, style]} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
    paddingHorizontal: spacing["2xl"],
    paddingVertical: spacing["4xl"],
  },
});
