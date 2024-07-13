import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./splash/_layout";
import "google-fonts/";
import { Raleway_900Black, useFonts } from "@expo-google-fonts/raleway";
import {
  NunitoSans_300Light,
  NunitoSans_400Regular,
} from "@expo-google-fonts/nunito-sans";

export default function Index() {
  let [fontsLoaded] = useFonts({
    Raleway_900Black,
    NunitoSans_400Regular,
    NunitoSans_300Light,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <SplashScreen />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
