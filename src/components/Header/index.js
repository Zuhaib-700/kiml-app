import { useNavigation, DrawerActions } from "@react-navigation/native";
import React from "react";
import { Icon } from "react-native-elements";
import darkLogo from "../../../assets/logo/kiml_logo_dark.png";
import lightLogo from "../../../assets/logo/kiml_logo.png";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/slices/theme";

const Header = () => {
  const { theme, darkMode } = useSelector((state) => state.ThemeSlice);
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const style = stylesHandler(insets, theme);

  const handleTheme = () => dispatch(toggleTheme());

  return (
    <View style={style.headerContainer}>
      <View style={style.menuLogo}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Icon name="menu" color={darkMode ? "#fff" : "#989898"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          {" "}
          <Image style={style.logo} source={darkMode ? darkLogo : lightLogo} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleTheme}>
        <Icon name="contrast" color={darkMode ? "#fff" : "#4d4a49"} />
      </TouchableOpacity>
    </View>
  );
};

const stylesHandler = (insets, theme) =>
  StyleSheet.create({
    menuLogo: {
      flexDirection: "row",
      alignItems: "center",
      gap: 15,
    },
    headerContainer: {
      backgroundColor: theme.backgroundColor,
      height: 50,
      elevation: 2,
      marginTop: insets.top,
      paddingLeft: 16,
      paddingRight: 16,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    logo: {
      width: 170,
      height: 35,
      resizeMode: "stretch",
    },
  });

export default Header;
