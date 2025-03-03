import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

const IconButton = ({ image, text, id }) => {
  const { theme, darkMode } = useSelector((state) => state.ThemeSlice);

  const { fullWidth, btnIcon, iconBtn, whiteText } = styles(theme);
  return (
    <TouchableOpacity
      style={[fullWidth, iconBtn]}
      // onPress={onPress}
    >
      {" "}
      {image && (
        <Image
          key={`btn-dining-ico-${id}`}
          style={btnIcon}
          source={image}
          // resizeMode="cover"
        />
      )}
      <Text style={whiteText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    fullWidth: { alignSelf: "stretch" },
    iconBtn: {
      backgroundColor: theme.secondaryButtonBg,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      gap: 8,
      padding: 16,
      borderRadius: 16,
      marginBottom: 16,
    },
    btnIcon: {
      width: 32,
      height: 32,
    },
    whiteText: {
      color: "#fff",
    },
  });
export default IconButton;
