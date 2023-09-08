import { useQuery } from "@tanstack/react-query";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Loading from "../components/Loading";
import ErrorComponent from "../components/ErrorComponent";
import Comment from "../components/Comment";
import { useEffect } from "react";

export default function Post({ route, navigation }) {
  const { id, title, body } = route.params;
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["comments", id],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(
        (res) => res.json()
      ),
    initialData: null,
  });

  useEffect(() => {
    navigation.setOptions({ title: title });
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Loading />
      </SafeAreaView>
    );
  }

  if (isError) {
    return (
      <SafeAreaView style={styles.container}>
        <ErrorComponent />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {data && (
          <View style={styles.innerContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.body}>{body}</Text>
            <Text style={styles.commentTitle}>
              {data.length} Comment{data.length > 1 ? "s" : ""}
            </Text>
            <FlatList
              scrollEnabled={false}
              style={styles.list}
              data={data}
              renderItem={(comment) => <Comment comment={comment.item} />}
              keyExtractor={(comment) => comment.id}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  innerContainer: {
    padding: 20,
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
    marginBottom: 20,
  },
  commentTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    color: "#FFF",
    marginBottom: 10,
  },
});
