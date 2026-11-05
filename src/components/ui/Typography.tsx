import { colors, fontSize, fontWeight } from "@/token";
import type { TextProps } from "react-native";
import { StyleSheet, Text } from "react-native";

type Props = TextProps & {
  variant?: keyof typeof styles;
};

export default function Typography({ variant = "body", style, ...props }: Props) {
  return <Text {...props} style={[styles[variant], style]} />;
}

export function Title(props: TextProps) {
  return <Typography variant="title" {...props} />;
}

export function Subtitle(props: TextProps) {
  return <Typography variant="subtitle" {...props} />;
}

export function BodyText(props: TextProps) {
  return <Typography variant="body" {...props} />;
}

export function Label(props: TextProps) {
  return <Typography variant="label" {...props} />;
}

export function BrandText(props: TextProps) {
  return <Typography variant="brand" {...props} />;
}

export function Eyebrow(props: TextProps) {
  return <Typography variant="eyebrow" {...props} />;
}

export function Caption(props: TextProps) {
  return <Typography variant="caption" {...props} />;
}

const styles = StyleSheet.create({
  body: {
    color: colors.text,
    fontSize: fontSize.lg,
    lineHeight: 22,
  },
  title: {
    color: colors.text,
    fontSize: fontSize["3xl"],
    fontWeight: fontWeight.bold,
    letterSpacing: -0.8,
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: fontSize.lg,
    lineHeight: 22,
  },
  label: {
    color: colors.textSecondary,
    fontSize: fontSize.md,
    fontWeight: fontWeight.semibold,
  },
  brand: {
    color: colors.primary,
    fontSize: fontSize["2xl"],
    fontWeight: fontWeight.extrabold,
    letterSpacing: -1,
  },
  eyebrow: {
    color: colors.textAccent,
    fontSize: fontSize.xs,
    fontWeight: fontWeight.bold,
    letterSpacing: 1.6,
  },
  caption: {
    color: colors.textSubtle,
    fontSize: fontSize.sm,
  },
  button: {
    color: colors.surface,
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
  },
});
