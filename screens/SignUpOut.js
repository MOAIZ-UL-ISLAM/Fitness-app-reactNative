import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import auth from "@react-native-firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const SignUpOut = () => {
  const navigation = useNavigation();

  const [email, setemail] = useState("");
  const [userpass, setuserpass] = useState("");

  // success message
  const [successMessage, setSuccessMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // end

  const createUser = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, userpass)
      .then((userCredential) => {
        const user = userCredential.user;
        // message

        setSuccessMessage("User created successfully!");
        setShowSuccessMessage(true);
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSuccessMessage(false);
        }, 5000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const handlenavigation = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView>
      <View>
        <Image
          source={require("../assets/img.png")}
          style={{ width: "100%", height: 320, marginTop: 90 }}
        />
      </View>

      <Text
        style={{
          marginTop: 16,
          marginLeft: 142,
          marginBottom: 30,
          fontSize: 32,
          color: "#F266AB",
          fontWeight: "bold",
        }}
      >
        Sign-Up
      </Text>

      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Ionicons
            name="md-mail"
            size={24}
            color="black"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(txt) => setemail(txt)}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name="md-lock-closed"
            size={24}
            color="black"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            value={userpass}
            onChangeText={(txt) => setuserpass(txt)}
            placeholder="Password"
            secureTextEntry
          />
        </View>
        {showSuccessMessage && (
          <View>
            <Text style={styles.successMessageText}>{successMessage}</Text>
          </View>
        )}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 12,
            marginTop: 30,
          }}
        >
          <TouchableOpacity style={styles.button} onPress={createUser}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={handlenavigation}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpOut;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#000814",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  button2: {
    backgroundColor: "#00f5d4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  // successMessageContainer: {
  //   backgroundColor: "#e6f7ff",
  //   paddingHorizontal: 16,
  //   paddingVertical: 8,
  //   marginBottom: 20,
  //   borderRadius: 5,
  // },
  successMessageText: {
    fontSize: 16,
    color: "#1890ff",
    textAlign: "center",
  },
});
