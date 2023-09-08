import LottieView from "lottie-react-native";
import { StyleSheet, Text, View } from "react-native";

export default function ErrorComponent() {
  return (
    <View style={styles.container}>
      <View>
        <LottieView
          style={styles.animation}
          source={require("../assets/lottie/error.json")}
          autoPlay
          loop
        />
        <Text style={styles.text}>An error occurred.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  animation: {
    width: 200,
    height: 200,
  },
  text: {
    color: "#FFF",
    textAlign: "center",
  },
});
