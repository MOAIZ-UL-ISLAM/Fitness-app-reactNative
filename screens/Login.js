import {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";

const Login = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(true);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Logged in " + user.email);
        navigation.navigate("Home");
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const isLoginButtonActive = username !== "" && password !== "" && isChecked;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../assets/d.png")}
          style={{ width: "100%", height: 260 }}
        />
        <Ionicons
          style={{ position: "absolute", top: 20, left: 20 }}
          name="arrow-back-outline"
          size={28}
          onPress={() => navigation.goBack()}
          color="white"
        />
        <Text
          style={{
            position: "absolute",
            top: 200,
            color: "white",
            fontSize: 18,
          }}
        >
          𝚄𝚗𝚕𝚎𝚊𝚜𝚑 𝚈𝚘𝚞𝚛 𝙸𝚗𝚗𝚎𝚛 𝙵𝚒𝚛𝚎!
        </Text>
        <Image
          source={require("../assets/2626372-removebg-preview.png")}
          style={{ width: "50%", height: 120, marginTop: 20 }}
        />

        <Text
          style={{
            color: "#900C3F",
            marginTop: 30,
            fontSize: 28,
            marginBottom: 30,
            fontWeight: "bold",
            borderBottomWidth: 5,
            borderTopWidth: 3,
          }}
        >
          👀 𝕃𝕠𝕘 𝕀𝕟 👋
        </Text>
        <View style={styles.container2}>
          <View style={styles.inputContainer}>
            <Ionicons
              name="person-circle-outline"
              size={28}
              color="#888"
              style={styles.icon}
            />
            <TextInput
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color="#888"
              style={styles.icon}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.input}
            />
          </View>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity onPress={toggleCheckbox} style={styles.checkbox}>
              {isChecked && (
                <Ionicons name="checkmark" size={18} color="#FFAA33" />
              )}
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>Remember Me</Text>
          </View>
          <TouchableOpacity
            onPress={handleLogin}
            style={[
              styles.loginButton,
              isLoginButtonActive ? styles.activeButton : null,
            ]}
            disabled={!isLoginButtonActive}
          >
            <Text style={styles.buttonText}>𝙻𝚘𝚐 𝚒𝚗</Text>
          </TouchableOpacity>
          <View style={styles.container3}>
            <View style={styles.logoContainer}>
              <Ionicons name="logo-google" size={24} color="#66FF00" />
            </View>
            <View style={styles.logoContainer}>
              <Ionicons name="logo-facebook" size={24} color="#0165E1" />
            </View>
            <View style={styles.logoContainer}>
              <Ionicons name="logo-instagram" size={24} color="#AA0000" />
            </View>
            <View style={styles.logoContainer}>
              <Ionicons name="logo-twitter" size={24} color="#00CCFF" />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginTop: 33,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderBottomColor: "#888",
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 11,
    marginBottom: 18,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#888",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#525252",
    paddingHorizontal: 90,
    paddingVertical: 10,
    borderRadius: 12,
    marginBottom: 30,
  },
  activeButton: {
    backgroundColor: "#007AFF",
  },
  buttonText: {
    color: "#fff",
    fontSize: 22,
    letterSpacing: 2,
    fontWeight: "600",
    alignItems: "center",
  },
  container3: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 25,
    padding: 10,
    marginHorizontal: 14,
  },
});
