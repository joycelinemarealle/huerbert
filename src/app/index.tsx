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
                placeholderTextColor="#8A9490"
                selectionColor="#245C49"
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
                placeholderTextColor="#8A9490"
                secureTextEntry
                selectionColor="#245C49"
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
    backgroundColor: "#F4F5F0",
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  content: {
    width: "100%",
    maxWidth: 440,
    gap: 28,
  },
  brand: {
    color: "#245C49",
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: -1,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderColor: "#E2E7DF",
    borderWidth: 1,
    borderRadius: 24,
    padding: 28,
  },
  eyebrow: {
    color: "#567362",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.6,
    marginBottom: 12,
  },
  title: {
    color: "#1D3027",
    fontSize: 30,
    fontWeight: "700",
    letterSpacing: -0.8,
  },
  subtitle: {
    color: "#6F7B74",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8,
  },
  form: {
    gap: 20,
    marginTop: 32,
  },
  field: {
    gap: 8,
  },
  label: {
    color: "#34483C",
    fontSize: 13,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#FAFBF8",
    borderColor: "#DCE3DA",
    borderWidth: 1,
    borderRadius: 12,
    color: "#1D3027",
    fontSize: 15,
    minHeight: 52,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#245C49",
    borderRadius: 12,
    minHeight: 52,
    marginTop: 4,
    padding: 14,
  },
  buttonPressed: {
    backgroundColor: "#1B4637",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  footer: {
    color: "#7B867E",
    fontSize: 12,
    textAlign: "center",
  },
});
