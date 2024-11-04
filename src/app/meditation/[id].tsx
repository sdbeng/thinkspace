import { useSearchParams } from "expo-router/build/hooks";
import { Text, View } from "react-native";

//create detail page for meditation to navigate to whenever i click on a meditation row in the list
export default function MeditationDetailScreen (){
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    console.log('detail id:', id);

    return (
        <View>
            <Text>Detail Page id: {id} </Text>
        </View>
    )
}