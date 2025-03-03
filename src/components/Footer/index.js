import React from "react";
import { View } from "react-native";
import { StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import globalStyles from "../../../style";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const { theme } = useSelector((state) => state.ThemeSlice);
  const { footerContainer, navLinkContainer, copyrightText } =
    stylesHandler(theme);
  const { link } = globalStyles(theme);

  const navigation = useNavigation();
  return (
    <View style={[footerContainer]}>
      <Text style={copyrightText}>© 2025 kiml cards All Rights Reserved</Text>
      <View style={navLinkContainer}>
        <Text style={link}>About Us</Text>
        <Text style={link}>Contact Us</Text>
        <Text style={link}>Product Overview</Text>
        <Text style={link}>Tutorials</Text>
        <Text style={link}>FAQ</Text>
        <Text
          style={link}
          onPress={() => navigation.navigate("TermsAndCondition")}
        >
          Terms & Conditions
        </Text>
        <Text style={link} onPress={() => navigation.navigate("PrivacyPolicy")}>
          Privacy Policy
        </Text>
      </View>
    </View>
  );
};

export default Footer;

const stylesHandler = (theme) =>
  StyleSheet.create({
    footerContainer: {
      backgroundColor: theme.backgroundColor,
      width: "100%",
      alignItems: "center",
      padding: 16,
      gap: 16,
    },
    copyrightText: {
      color: theme.contrastText,
    },
    navLinkContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      rowGap: 16,
      columnGap: 44,
    },
  });
