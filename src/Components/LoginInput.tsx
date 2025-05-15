import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native";

const LoginInput = (props: { icon: any; label: string }) => {
	return (
		<View className="mb-8 ">
			<Text className=" ml-1 text-slate-700 font-medium">{props.label}</Text>
			<View className="mt-5 bg-gray-300 flex-row p-3 rounded-lg">
				<TextInput className="flex-1 " placeholder={props.label} />
				<View className="">{props.icon} </View>
			</View>
		</View>
	);
};

export default LoginInput;
