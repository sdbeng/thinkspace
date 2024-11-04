import { useSearchParams } from "expo-router/build/hooks";
import { Text, View } from "react-native";
import { thinkspaces } from "@/data";

//create detail page for meditation to navigate to whenever i click on a meditation row in the list
export default function MeditationDetailScreen (){
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    console.log('detail id:', id);
    const thinkspace = thinkspaces.find(thethinkspace => thethinkspace.id === Number(id));

    return (
        <View>
            <Text className="text-3xl ">{thinkspace?.title} </Text>
        </View>
    )
}