import { useSearchParams, useLocalSearchParams } from "expo-router/build/hooks";
import { router } from "expo-router";
import { Text, View } from "react-native";
import { thinkspaces } from "@/data";
import AntDesign from '@expo/vector-icons/AntDesign';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Feather from '@expo/vector-icons/Feather';

//create detail page for meditation to navigate to whenever i click on a meditation row in the list
export default function MeditationDetailScreen (){
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const { top } = useSafeAreaInsets();   
    const thinkspace = thinkspaces.find(thethinkspace => thethinkspace.id === Number(id));

    if(!thinkspace){
        return <Text>Thinkspace not found!</Text>
    }

    return (
        <SafeAreaView className="bg-orange-400 flex-1">
            {/* header */}
            <View className="flex-row items-center justify-between p-10">
                {/* render info icon */}
                <Feather name="info" size={24} color="black" />
                <View className="bg-zinc-900 p-2 rounded-md ">
                    <Text className="font-semibold text-zinc-300">Today's thoughts</Text>
                </View>
                
            <AntDesign onPress={() => router.back()} name="close" size={24} color="black"
            />
            </View>
            <Text className="text-3xl mt-10">{thinkspace?.title} </Text>
        </SafeAreaView>
    )
}