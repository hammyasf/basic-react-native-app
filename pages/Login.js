import LottieView from "lottie-react-native";
import { useState } from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("password");

  function doLogin() {
    if (username === "admin" && password === "password") {
      Alert.alert("Login Successful! 🎉");
      navigation.replace("Home");
    } else {
      Alert.alert("Login Failed! 😢");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          style={styles.animation}
          source={require("../assets/lottie/hello-phone.json")}
          autoPlay
          loop
        />
      </View>
      <Text style={styles.heading}>Login</Text>
      <View>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          placeholder="Username"
        />
        <TextInput
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="Password"
        />
        <TouchableOpacity onPress={doLogin} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  animationContainer: {
    marginTop: -100,
  },
  animation: {
    width: 200,
    height: 200,
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#DBDBD6",
  },
  button: {
    backgroundColor: "#ADADFF",
    padding: 10,
    borderRadius: 3,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
