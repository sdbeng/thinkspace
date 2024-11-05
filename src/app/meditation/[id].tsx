import { useSearchParams, useLocalSearchParams } from "expo-router/build/hooks";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { thinkspaces } from "@/data";
import AntDesign from '@expo/vector-icons/AntDesign';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

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
        <SafeAreaView className="bg-orange-400 flex-1 p-2">
            {/* header */}
            <View className="flex-row items-center justify-between p-10">
                {/* render info icon */}
                <Feather name="info" size={24} color="black" />
                <View className="bg-zinc-800 p-2 rounded-md ">
                    <Text className="font-semibold text-zinc-300">Today's thoughts</Text>
                </View>                
            <AntDesign onPress={() => router.back()} name="close" size={26} color="black"
            />
            </View>
            <Text className="text-3xl mt-10 text-center text-zinc-800 font-semibold">{thinkspace?.title} </Text>
            {/* play pause btn */}
            <Pressable className="bg-zinc-800 self-center w-20 aspect-square  rounded-full justify-center colo items-center">
                <FontAwesome6 name="play" size={24} color="snow" />
            </Pressable>
        </SafeAreaView>
    )
}