import { View, Text } from "react-native";
import { ThinkspaceTypes } from "@/types";

export function fetchThinkspaceListItems ({thinkspaces}: {thinkspaces: ThinkspaceTypes}) {
    return (
        <View>
            <Text>{thinkspaces}</Text>
        </View>
    )
}