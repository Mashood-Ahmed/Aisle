import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./splash/_layout";
import "google-fonts/";
import {
  Raleway_800ExtraBold,
  Raleway_900Black,
  useFonts,
} from "@expo-google-fonts/raleway";
import {
  NunitoSans_300Light,
  NunitoSans_400Regular,
} from "@expo-google-fonts/nunito-sans";
import { Stack } from "expo-router";

export default function Index() {
  let [fontsLoaded] = useFonts({
    Raleway_800ExtraBold,
    NunitoSans_400Regular,
    NunitoSans_300Light,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="signup" />
    </Stack>
  );
}
