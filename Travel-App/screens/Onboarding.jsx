import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import images from "../constants/images";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const Onboarding = () => {
	const str =
		"Easy solution to buy tickets for your travel, business trips, transportation, lodging and culinary.";
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.insideView}>
				<Image
					source={images.onboardingImage}
					resizeMode="contain"
					style={styles.image}
				/>
			</View>

			<View style={styles.insideView}>
				<View style={styles.textArea}>
					<Text style={styles.text}>Digital Ticket</Text>

					<Text style={styles.subtext}>{str}</Text>

					<TouchableOpacity
						style={styles.button}
						onPress={() => {
							console.log("Button Pressed");
						}}>
						<LinearGradient
							style={styles.gradient}
							colors={["#46aeff", "#5884ff"]}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 1 }}>
							<Text style={styles.buttonText}>Get Started</Text>
							</LinearGradient>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},

	insideView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},

	image: {
		width: "100%",
		height: "100%",
	},

	textArea: {
		alignItems: "center",
		marginHorizontal: SIZES.padding,
	},

	text: {
		...FONTS.h2,
	},

	subtext: {
		...FONTS.body3,
		color: COLORS.gray,
		textAlign: "center",
		marginTop: SIZES.padding,
	},

	button: {
		marginTop: SIZES.padding * 2,
		width: "70%",
		height: 50,
		alignItems: "center",
		justifyContent: "center",
	},

	gradient: {
		height: "100%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 15,
	},
});

export default Onboarding;
