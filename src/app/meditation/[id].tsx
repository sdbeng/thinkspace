import { useSearchParams, useLocalSearchParams } from "expo-router/build/hooks";
import { router } from "expo-router";
import { Text, View } from "react-native";
import { thinkspaces } from "@/data";
import AntDesign from '@expo/vector-icons/AntDesign';

//create detail page for meditation to navigate to whenever i click on a meditation row in the list
export default function MeditationDetailScreen (){
    const searchParams = useSearchParams();
    const id = searchParams.get('id');    
    const thinkspace = thinkspaces.find(thethinkspace => thethinkspace.id === Number(id));

    if(!thinkspace){
        return <Text>Thinkspace not found!</Text>
    }

    return (
        <>
            <AntDesign onPress={() => router.back()} name="close" size={24} color="black" className="absolute top-16 right-10"/>
            <Text className="text-3xl mt-16">{thinkspace?.title} </Text>
        </>
    )
}