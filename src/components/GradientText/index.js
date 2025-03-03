import React from "react";
import { Text } from "react-native";
import MaskedView from "@react-native-community/masked-view";
import { LinearGradient } from "expo-linear-gradient";

const GradientText = ({ style, text }) => {
  const convertLinearGradient = (cssGradient) => {
    const regex = /linear-gradient\(([^,]+),\s*([^,]+),\s*([^)]+)\)/;
    const matches = cssGradient.match(regex);
    if (!matches) return { colors: [], locations: [] };

    const angle = matches[1].trim();
    const color1 = matches[2].trim();
    const color2 = matches[3].trim();

    const angleInDegrees = angle.includes("deg") ? parseFloat(angle) : 0;
    const start = { x: 0, y: 0 };
    const end = {
      x: Math.cos((angleInDegrees * Math.PI) / 180),
      y: Math.sin((angleInDegrees * Math.PI) / 180),
    };

    return {
      colors: [color1, color2],
      start,
      end,
    };
  };

  // Example usage
  const cssGradient = "linear-gradient(90deg, #476fd6, #1c3f99)";
  const { colors, start, end } = convertLinearGradient(cssGradient);
  console.log("colors, start, end ", colors, start, end);

  return (
    <MaskedView
      maskElement={
        <Text style={[style, { backgroundColor: "transparent" }]}>{text}</Text>
      }
    >
      <LinearGradient colors={colors} start={start} end={end}>
        <Text>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );
  // </LinearTextGradient>
};

export default GradientText;
