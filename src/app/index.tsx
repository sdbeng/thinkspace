import { StatusBar, Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View >
      <Text className="font-bold text-4xl">Hello Thinkspace!</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});