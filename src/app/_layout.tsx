import { Stack } from "expo-router";
import "../../global.css"

export default function RootLayout({ children }) {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }}/>
    </Stack>
  );
}