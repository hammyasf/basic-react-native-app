import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerStyle: { backgroundColor: "#000" },
              headerTitleStyle: { color: "#FFF" },
              title: "Welcome",
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Posts",
              headerStyle: { backgroundColor: "#000" },
              headerTitleStyle: { color: "#FFF" },
            }}
          />
          <Stack.Screen
            name="Post"
            component={Post}
            options={{
              title: "Post",
              headerStyle: { backgroundColor: "#000" },
              headerTitleStyle: { color: "#FFF" },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
