import {
  BrandText,
  Button,
  Caption,
  Card,
  Eyebrow,
  Label,
  Link,
  Screen,
  Subtitle,
  TextInput,
  Title,
} from "@/components/ui";
import { useAuth } from "@/contexts/authContext";
import { spacing } from "@/token";
import { useState } from "react";
import { Alert, Keyboard, StyleSheet, View } from "react-native";

export default function Index() {
  const { session, login, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    Keyboard.dismiss();

    if (!email.trim() || !password) {
      Alert.alert("Missing details", "Please enter your email and password.");
      return;
    }

    login(email.trim());
    setEmail("");
    setPassword("");
  }

  function handleSignOut() {
    logout();
    setEmail("");
    setPassword("");
  }

  return (
    <Screen dismissKeyboard>
      <View style={styles.content}>
        <BrandText style={styles.brand}>huerbert.</BrandText>

        <Card>
          <Eyebrow style={styles.eyebrow}>YOUR SPACE, SIMPLIFIED</Eyebrow>
          <Title>{session ? "You're signed in" : "Welcome back"}</Title>
          <Subtitle style={styles.subtitle}>
            {session
              ? session.user.email
              : "Sign in to pick up where you left off."}
          </Subtitle>

          <View style={styles.form}>
            {session ? (
              <>
                <Link href="/settings">Settings</Link>
                <Button title="Sign out" onPress={handleSignOut} />
              </>
            ) : (
              <>
                <View style={styles.field}>
                  <Label>Email address</Label>
                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    accessibilityLabel="Email address"
                    autoComplete="email"
                    keyboardType="email-address"
                    placeholder="you@example.com"
                  />
                </View>

                <View style={styles.field}>
                  <Label>Password</Label>
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    accessibilityLabel="Password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    password
                  />
                </View>

                <Button title="Sign in" onPress={handleSignIn} />
              </>
            )}
          </View>
        </Card>

        <Caption style={styles.footer}>A little focus. A fresh start.</Caption>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    width: "100%",
    maxWidth: 440,
    gap: spacing["3xl"],
  },
  brand: {
    textAlign: "center",
  },
  eyebrow: {
    marginBottom: spacing.sm,
  },
  subtitle: {
    marginTop: spacing.xs,
  },
  form: {
    gap: spacing.xl,
    marginTop: spacing["4xl"],
  },
  field: {
    gap: spacing.xs,
  },
  footer: {
    textAlign: "center",
  },
});
