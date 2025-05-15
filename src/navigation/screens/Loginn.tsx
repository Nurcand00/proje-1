import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginInput from "../../Components/LoginInput";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Loginn = () => {
	const [isChecked, setIsChecked] = useState(false);

	const toggleCheckBox = () => {
		setIsChecked(!isChecked);
	};

	return (
		<SafeAreaView className=" bg-white flex-1">
			<View className="flex-1 p-6 mt-10 relative">
				<Image
					source={require("../../assets/image/mincake.png")}
					style={{
						position: "absolute",
						top: 15,
						right: -10,
						width: 100,
						height: 150,
						resizeMode: "contain",
					}}
				/>
				<Text className="color-slate-800 mt-8 font-bold text-4xl">Login</Text>
				<Text className="color-slate-500 mb-20   ">
					Please login to contiue
				</Text>
				<LoginInput
					label="Email"
					icon={<AntDesign name="mail" size={24} color="black" />}
				/>
				<LoginInput
					label="Password"
					icon={<Ionicons name="eye-off-outline" size={24} color="black" />}
				/>
				<Pressable
					className="flex-row gap-2 items-center"
					onPress={toggleCheckBox}
				>
					<View className="ml-2">
						{isChecked ? (
							<FontAwesome name="check-square" size={24} color="#654321" />
						) : (
							<FontAwesome name="square-o" size={24} color="#654321" />
						)}
					</View>
					<Text className="text-gray-700">keep me logged in</Text>
				</Pressable>
				<View className="flex-1 items-center">
					<TouchableOpacity className="h-14 w-56 rounded-full py-4 bg-yellow-950 mt-20 ">
						<Text className="text-center text-white font-semibold text-lg">
							Login
						</Text>
					</TouchableOpacity>

					<View className="mt-44 flex-row  justify-center ">
						<Text className="text-slate-500">Don’t have an account?</Text>
						<TouchableOpacity>
							<Text className="text-yellow-950 font-semibold">
								Create Account
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Loginn;
