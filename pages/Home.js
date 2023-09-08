import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Post from "../components/Post";
import Loading from "../components/Loading";
import ErrorComponent from "../components/ErrorComponent";

export default function Home({ navigation }) {
  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
    initialData: [],
  });

  const onRefresh = useCallback(() => {
    refetch();
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
      {data !== 0 && (
        <ScrollView
          refreshControl={
            <RefreshControl
              tintColor={"#FFF"}
              size={"large"}
              refreshing={isFetching}
              onRefresh={onRefresh}
            />
          }
        >
          <FlatList
            scrollEnabled={false}
            style={styles.list}
            data={data}
            renderItem={(post) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Post", {
                    id: post.item.id,
                    title: post.item.title,
                    body: post.item.body,
                  })
                }
              >
                <Post post={post.item} />
              </TouchableOpacity>
            )}
            keyExtractor={(post) => post.id}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  list: {
    padding: 20,
  },
});
