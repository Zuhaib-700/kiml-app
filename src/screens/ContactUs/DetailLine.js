import React from "react";
import { Text } from "react-native";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { useSelector } from "react-redux";

const DetailLine = ({ image, text }) => {
  const { theme } = useSelector((state) => state.ThemeSlice);
  const { lineText, contactLineContainer } = styles(theme);
  return (
    <View style={contactLineContainer}>
      {image}

      <Text style={lineText}>{text}</Text>
    </View>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    contactLineContainer: {
      alignItems: "center",
      flexDirection: "row",
      gap: 16,
      width: Dimensions.get("window").width - 64,
      marginTop: 24,
      flex: 2,
    },
    lineText: {
      color: theme.textTertiary,
      flex: 1,
      flexWrap: "wrap",
    },
  });
export default DetailLine;
