import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text } from "react-native";

const GradientButton = ({ text }) => {
  const { gradientButton, fullWidth, whiteText } = styles();
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#5caeff", "#3d82f0"]}
      start={[0, 0]}
      end={[1, 1]}
      style={[gradientButton, fullWidth]}
    >
      {" "}
      <Text style={whiteText}>{text}</Text>
    </LinearGradient>
  );
};
const styles = (isLightTheme) =>
  StyleSheet.create({
    gradientButton: {
      padding: 16,
      alignItems: "center",
      borderRadius: 8,
    },
    fullWidth: { alignSelf: "stretch" },
    whiteText: {
      color: "#fff",
    },
  });
export default GradientButton;
