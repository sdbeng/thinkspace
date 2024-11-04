import { StatusBar, Text, View, StyleSheet, FlatList } from "react-native";
import { thinkspaces } from "../data";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useQuery } from "@tanstack/react-query";

const thinkspaceData = thinkspaces[0];// it will be the first thinkspace object

//define a function to display the thinkspace data
function ThinkspaceListItem(props) {    
    // console.log('props.thinkspaceData:', props.thinkspaceData);    
    const {title, duration} = props.thinkspaceData;
    // console.log('title:', title);    

    // const {data, error, isLoading} = useQuery({queryKey: ['thinkData'], queryFn: () => fetch('data')});
    // if (isLoading) return <Text>Loading...</Text>
    // console.log('tanstck data:', data);
    

    return (
      <View className="flex-row items-center gap-5">
        <View className="bg-green-500 p-1 rounded-full">
        <Ionicons name="shield-checkmark-outline" size={18} color="white" />
        </View>

        <View className="flex-1 p-5 py-5 border-2 border-gray-300 rounded-2xl">            
            <Text className="font-semibold text-2xl mb-2">{title}</Text>
            <View className="flex-row items-center gap-2">
            <FontAwesome6 name="clock" size={16} color="#6B7280" />
            <Text className="text-gray-500">{duration} min</Text>    

            </View>
      </View>
        </View>
    )
}

export default function HomeScreen() {
  return (
    <FlatList 
        data={thinkspaces}
        className="bg-gray-100"
        contentContainerClassName="gap-8 p-3"
        renderItem={({item}) => <ThinkspaceListItem thinkspaceData={item} />}
    />
  );
}