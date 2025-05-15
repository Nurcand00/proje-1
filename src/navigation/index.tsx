import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderButton, Text } from "@react-navigation/elements";
import {
	createStaticNavigation,
	StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import bell from "../assets/bell.png";
import newspaper from "../assets/newspaper.png";
import Homee from "./screens/Homee";
import Loginn from "./screens/Loginn";

const RootStack = createNativeStackNavigator({
	//giriş yapmış kullanıcıların ekranı
	screenOptions: {
		headerShown: false,
	},
	initialRouteName: "Home", //ilk hangı ekranı yazarsam o gözukur. mavi yazan Logın Home kısmını göruyo.
	screens: {
		Home: {
			screen: Homee,
			options: {
				title: "Home",
				tabBarIcon: ({ color, size }) => (
					<Image
						source={newspaper}
						tintColor={color}
						style={{
							width: size,
							height: size,
						}}
					/>
				),
			},
		},
	},
});

const StoreStack = createNativeStackNavigator({
	//giriş yapmamış kulllanıcıların ekranı
	screenOptions: {
		headerShown: false,
	},
	screens: {
		Login: {
			screen: Loginn,
		},
	},
});

export const Navigation = createStaticNavigation(RootStack);
export const StoreNavigation = createStaticNavigation(StoreStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}
