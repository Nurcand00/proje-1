import { Assets as NavigationAssets } from "@react-navigation/elements";
import { Asset } from "expo-asset";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { Navigation, StoreNavigation } from "./navigation";
import "./global.css";
import { View } from "react-native";
import useStore from "./store/store";

Asset.loadAsync([
	...NavigationAssets,
	require("./assets/newspaper.png"),
	require("./assets/bell.png"),
]);

SplashScreen.preventAutoHideAsync();

export function App() {
	const { loggedIn } = useStore();
	if (loggedIn) {
		return (
			<View className=" flex-1">
				<Navigation
					linking={{
						enabled: "auto",
						prefixes: [
							// Change the scheme to match your app's scheme defined in app.json
							"helloworld://",
						],
					}}
					onReady={() => {
						SplashScreen.hideAsync();
					}}
				/>
			</View>
		);
	} else {
		return (
			<View className=" flex-1">
				<StoreNavigation
					linking={{
						enabled: "auto",
						prefixes: [
							// Change the scheme to match your app's scheme defined in app.json
							"helloworld://",
						],
					}}
					onReady={() => {
						SplashScreen.hideAsync();
					}}
				/>
			</View>
		);
	}
}
