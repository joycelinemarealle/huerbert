import { Button, Link } from "@/components/ui";
import { useAuth } from "@/contexts/authContext";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Settings() {
  const { session, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Settings" }} />
      <Text style={styles.title}>Settings</Text>
      {session ? (
        <>
          <Text>{session.user.email}</Text>
          <Button title="Sign out" onPress={logout} />
        </>
      ) : (
        <Link href="/">Sign in</Link>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
