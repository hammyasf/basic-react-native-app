import { StyleSheet, Text, View } from "react-native";

export default function Post({ post }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    color: "#FFF",
  },
  body: {
    fontSize: 16,
    color: "#FFF",
  },
});
