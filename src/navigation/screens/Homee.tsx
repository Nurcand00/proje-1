import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Homee = () => {
	return (
		<SafeAreaView className=" bg-white flex-1">
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
