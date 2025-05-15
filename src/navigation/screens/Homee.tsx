import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useStore from "../../store/store";
import AntDesign from "@expo/vector-icons/AntDesign";

const Homee = () => {
	const { setLoggedIn } = useStore();

	const handleLogout = () => {
		setLoggedIn(false);
	};
	return (
		<SafeAreaView className=" bg-white flex-1">
			<TouchableOpacity
				className="absolute top-14 left-4 z-10"
				onPress={handleLogout}
			>
				<AntDesign name="leftcircle" size={24} color="#422006" />
			</TouchableOpacity>

			<View className=" flex-1  relative justify-center items-center">
				<Image
					source={require("../../assets/image/cake.png")}
					className="w-[400px] h-[600px] mt-44 "
					resizeMode="contain"
				/>
			</View>
			<View className="flex-1 mt-44">
				<Text className="mt-32  text-2xl text-center text-gray-800 font-semibold ">
					Deliverying the best
					<Text className="text-yellow-800 font-bold"> bakery</Text>
					{"\n"} food at your doorstep
				</Text>
			</View>
			<TouchableOpacity className="mb-28 self-center bg-yellow-950 p-6 justify-center items-center w-64 h-20 rounded-full ">
				<Text className=" text-white">Get Started </Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default Homee;
function setLoggedIn(arg0: boolean) {
	throw new Error("Function not implemented.");
}
