import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { Onboarding, DestinationDetails } from "./screens";
import { COLORS, SIZES } from "./constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import icons from "./constants/icons";

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		border: "transparent",
	},
};

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer theme={theme}>
			<Stack.Navigator initialRouteName={"Onboarding"}>
				{/* Screens */}
				<Stack.Screen
					name="Onboarding"
					component={Onboarding}
					options={{
						title: null,
						headerStyle: {
							backgroundColor: COLORS.white,
						},
						headerLeft: null,
						headerRight: () => (
							<TouchableOpacity
								style={{ marginRight: SIZES.padding }}
								onPress={() => {
									console.log("Bar-Menu Pressed");
								}}>
								<Image
									source={icons.barMenu}
									resizeMode="contain"
									style={{ width: 25, height: 25 }}
								/>
							</TouchableOpacity>
						),
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
