import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const globalStyles = (theme) =>
  StyleSheet.create({
    robotoSlab: {
      fontFamily: "Roboto-Slab",
    },
    link: {
      color: theme?.link,
      fontWeight: 500,
      fontSize: 16,
    },
    logo: {
      width: 170,
      height: 35,
      resizeMode: "stretch",
    },
    internalHeading: {
      fontSize: 24,
    },
    main: {
      backgroundColor: theme?.backgroundColorSecondary,
      width: "100%",
      height: "100%",
    },
    whiteText: {
      color: theme?.textSecondary,
    },
    blockTitle: {
      fontSize: 24,
      padding: 0,
    },
    primaryText: {
      color: theme?.textPrimary,
    },
    contrastText: {
      color: theme?.contrastText,
    },
    textCenter: { textAlign: "center" },
    formViewBox: {
      paddingVertical: 30,
      paddingHorizontal: 24,
      gap: 16,
      textAlign: "center",
    },
    textBox: {
      backgroundColor: theme?.backgroundColor,
      padding: 16,
      borderRadius: 16,
      // width: "100%",
    },
    internalHeadingContainer: {
      fontFamily: "Roboto-Slab",
      alignItems: "center",
    },
    mainText: {
      lineHeight: 14 * 1.6, // Equivalent to line-height: 1.6 in web CSS
    },
    textBoxWrapper: {
      gap: 24,
    },
    mainSecondary: {
      backgroundColor: "#68aef929",
      paddingVertical: 32,
      overflow: "auto",
      alignItems: "center",
      paddingHorizontal: 20,
    },
    formView: {
      backgroundColor: theme?.backgroundColor,
      width: Dimensions.get("window").width - 32,
      borderRadius: 8,
      marginBottom: 32,
      shadowColor: "#171717",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 2,
    },
  });

export default globalStyles;
