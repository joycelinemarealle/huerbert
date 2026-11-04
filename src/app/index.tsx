import { colors, fontSize, fontWeight, radius, spacing } from "@/token";
import { Keyboard, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <Pressable
      style={styles.container}
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <View style={styles.content}>
        <Text style={styles.brand}>huerbert.</Text>

        <View style={styles.card}>
          <Text style={styles.eyebrow}>YOUR SPACE, SIMPLIFIED</Text>
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.subtitle}>Sign in to pick up where you left off.</Text>

          <View style={styles.form}>
            <View style={styles.field}>
              <Text style={styles.label}>Email address</Text>
              <TextInput
                style={styles.input}
                accessibilityLabel="Email address"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="you@example.com"
                placeholderTextColor={colors.placeholder}
                selectionColor={colors.primary}
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                accessibilityLabel="Password"
                autoCapitalize="none"
                autoComplete="current-password"
                autoCorrect={false}
                placeholder="Enter your password"
                placeholderTextColor={colors.placeholder}
                secureTextEntry
                selectionColor={colors.primary}
              />
            </View>

            <Pressable
              accessibilityRole="button"
              onPress={Keyboard.dismiss}
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
            >
              <Text style={styles.buttonText}>Sign in</Text>
            </Pressable>
          </View>
        </View>

        <Text style={styles.footer}>A little focus. A fresh start.</Text>
      </View>
    </Pressable>
  );
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
  content: {
    width: "100%",
    maxWidth: 440,
    gap: spacing["3xl"],
  },
  brand: {
    color: colors.primary,
    fontSize: fontSize["2xl"],
    fontWeight: fontWeight.extrabold,
    letterSpacing: -1,
    textAlign: "center",
  },
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: spacing["3xl"],
  },
  eyebrow: {
    color: colors.textAccent,
    fontSize: fontSize.xs,
    fontWeight: fontWeight.bold,
    letterSpacing: 1.6,
    marginBottom: spacing.sm,
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
    marginTop: spacing.xs,
  },
  form: {
    gap: spacing.xl,
    marginTop: spacing["4xl"],
  },
  field: {
    gap: spacing.xs,
  },
  label: {
    color: colors.textSecondary,
    fontSize: fontSize.md,
    fontWeight: fontWeight.semibold,
  },
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
  buttonText: {
    color: colors.surface,
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
  },
  footer: {
    color: colors.textSubtle,
    fontSize: fontSize.sm,
    textAlign: "center",
  },
});
