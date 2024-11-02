import { StatusBar, Text, View, StyleSheet, FlatList } from "react-native";
import { thinkspaces } from "../data";

const thinkspaceData = thinkspaces[0];// it will be the first thinkspace object

//define a function to display the thinkspace data
function ThinkspaceListItem(props) {
    console.log('=========');
    console.log('props.thinkspaceData:', props.thinkspaceData);
    console.log('=========');
    const {title} = props.thinkspaceData;
    console.log('title:', title);
    

    return (
        <View >
            <Text className="font-bold text-2xl">{title}</Text>      
        </View>
    )
}

export default function HomeScreen() {
  return (
    <FlatList 
        data={thinkspaces}
        renderItem={({item}) => <ThinkspaceListItem thinkspaceData={item} />}
    />
  );
}