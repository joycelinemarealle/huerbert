import Typography from "@/components/ui/Typography";
import { colors, radius, spacing } from "@/token";
import type { PressableProps } from "react-native";
import { Pressable, StyleSheet } from "react-native";

type Props = Omit<PressableProps, "children"> & {
  title: string;
};

export default function Button({ title, style, ...props }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      {...props}
      style={(state) => [
        styles.button,
        state.pressed && styles.buttonPressed,
        typeof style === "function" ? style(state) : style,
      ]}
    >
      <Typography variant="button">{title}</Typography>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: radius.sm,
    minHeight: 52,
    marginTop: spacing.xxs,
    padding: spacing.md,
  },
  buttonPressed: {
    backgroundColor: colors.primaryPressed,
  },
});
