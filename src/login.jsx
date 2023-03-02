import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Login() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onEyePressed = () => {
    if (showPassword === true) {
      setShowPassword = false;
    } else {
      setShowPassword = true;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <TextInput
          placeholder="email"
          style={styles.input}
          onChangeText={(text) => setEmailInput(text)}
        />
        <View style={styles.passwordCon}>
          <TextInput
            placeholder="password"
            secureTextEntry={showPassword}
            style={styles.passwordInput}
            onChangeText={(text) => setPasswordInput(text)}
          />
          <Ionicons
            size={25}
            color={showPassword ? "orange" : "purple"}
            name={showPassword ? "eye-off" : "eye"}
            onPress={onEyePressed}
          />
        </View>
      </View>
    </View>
  );
}
export { Login };

const styles = StyleSheet.create({
  container: { flex: 1 },

  loginForm: {
    flex: 1,
    padding: 10,

    backgroundColor: "pink",
  },
  input: {
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  passwordCon: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  passwordInput: { width: "90%", padding: 10 },
});
