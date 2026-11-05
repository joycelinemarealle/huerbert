import { colors, fontSize, radius, spacing } from "@/token";
import type { TextInputProps } from "react-native";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

type Props = TextInputProps & {
  password?: boolean;
};

export default function TextInput({ password = false, style, ...props }: Props) {
  return (
    <NativeTextInput
      autoCapitalize="none"
      autoCorrect={false}
      placeholderTextColor={colors.placeholder}
      selectionColor={colors.primary}
      secureTextEntry={password}
      {...props}
      style={[styles.input, style]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.surfaceMuted,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    borderRadius: radius.sm,
    color: colors.text,
    fontSize: fontSize.xl,
    minHeight: 52,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
});
