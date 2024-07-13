import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link, Navigator } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("@/assets/images/Logo.png")}
          ></Image>
        </View>
        <Text style={styles.title}>Aisle</Text>
        <Text style={styles.subtitle}>
          Every product at your doorstep with trust in Aisle.
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Let's get Started</Text>
        </TouchableOpacity>
        <View style={styles.subTextContainer}>
          <Text style={styles.subText}>I already have an account</Text>
          <Link style={styles.subTextIcon} href="signup">
            <Ionicons name="arrow-forward" size={24} color="white" />
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 50,
  },
  section: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    width: 250,
    height: 250,
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  title: {
    fontSize: 90,
    marginBottom: 20,
    fontFamily: "Raleway_800ExtraBold",
  },
  subtitle: {
    fontFamily: "NunitoSans_300Light",
    fontSize: 20,
    paddingHorizontal: 40,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.light.primary,
    paddingHorizontal: 70,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: Colors.light.secondary,
    fontFamily: "NunitoSans_300Light",
    fontSize: 30,
  },
  subTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  subText: {
    fontSize: 20,
    fontFamily: "NunitoSans_300Light",
    marginRight: 10,
  },
  subTextIcon: {
    color: Colors.light.secondary,
    backgroundColor: Colors.light.primary,
    borderRadius: 100,
    padding: 7,
  },
});

export default SplashScreen;
