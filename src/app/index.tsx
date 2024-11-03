import { StatusBar, Text, View, StyleSheet, FlatList } from "react-native";
import { thinkspaces } from "../data";

const thinkspaceData = thinkspaces[0];// it will be the first thinkspace object

//define a function to display the thinkspace data
function ThinkspaceListItem(props) {    
    // console.log('props.thinkspaceData:', props.thinkspaceData);
    
    const {title} = props.thinkspaceData;
    console.log('title:', title);    

    return (
        <View className="p-5 border-2 border-gray-300 rounded-2xl">
            <Text className="font-semibold text-2xl">{title}</Text>      
        </View>
    )
}

export default function HomeScreen() {
  return (
    <FlatList 
        data={thinkspaces}
        className="bg-gray-100"
        contentContainerClassName="gap-5 p-3"
        renderItem={({item}) => <ThinkspaceListItem thinkspaceData={item} />}
    />
  );
}