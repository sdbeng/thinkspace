import { Stack } from "expo-router";
import "../../global.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>     
    <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }}/>
    </Stack>
    </QueryClientProvider>
  );
}