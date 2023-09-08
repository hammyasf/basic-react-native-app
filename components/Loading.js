import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <View>
        <LottieView
          style={styles.animation}
          source={require("../assets/lottie/loading.json")}
          autoPlay
          loop
        />
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
});
