import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("SignUpOut");
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/back.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <Image
          source={require("../assets/logo.png")}
          style={{
            width: "100%",
            height: 200,
            marginTop: 120,
          }}
        />

        <Text style={styles.text1}>
          --- Fitness <Text style={styles.text2}>| Hub --- </Text>
        </Text>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            marginTop: 12,
            backgroundColor: "#000000c0",
          }}
        >
          <Text style={{ color: "orange", fontSize: 32, fontWeight: "800" }}>
            I
          </Text>
          ntroducing the{" "}
          <Text style={{ color: "orange", fontSize: 18 }}>ultimate</Text> app
          for fitness{" "}
          <Text style={{ color: "orange", fontSize: 16 }}>Ethusiasts!</Text>
        </Text>

        <View style={styles.container2}>
          <Pressable style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 2,
    marginTop: 30,
  },
  text1: {
    color: "orange",
    letterSpacing: 2,
    fontSize: 22,
    textAlign: "center",
  },
  text2: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  container2: {
    marginTop: 99,
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    padding: 10,
    gap: 10,
    borderRadius: 50,
    width: "80%",
  },
  buttonText: {
    color: "white",
    marginRight: 5,
    fontSize: 22,
    marginLeft: 5,
    fontWeight: "bold",
  },
});

export default Signup;
