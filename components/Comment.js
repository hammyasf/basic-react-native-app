import { Image, StyleSheet, Text, View } from "react-native";

export default function Comment({ comment }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `https://api.dicebear.com/7.x/micah/png?seed=${comment.id}`,
          }}
        />
        <View>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
            {comment.name}
          </Text>
          <Text style={styles.email}>{comment.email}</Text>
        </View>
      </View>

      <Text style={styles.body}>{comment.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignContent: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    width: "80%",
  },
  email: {
    fontSize: 14,
    color: "#eef",
    marginBottom: 10,
    marginTop: 5,
  },
  body: {
    fontSize: 16,
    color: "#FFF",
  },
});
