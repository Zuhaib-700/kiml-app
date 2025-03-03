import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./src/screens/Home";
import Header from "./src/components/Header";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import React from "react";
import { Provider, useSelector } from "react-redux";
import store from "./src/redux/store";

import darkLogo from "./assets/logo/kiml_logo_dark.png";
import lightLogo from "./assets/logo/kiml_logo.png";
import { TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import globalStyles from "./style";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import AboutUs from "./src/screens/AboutUs";
import ContactUs from "./src/screens/ContactUs";
import { navLinkData } from "./src/constants/staticData";
import Overview from "./src/screens/Overview";
import TermsConditionsPage from "./src/screens/TermsConditions";
import TermsOfUse from "./src/screens/TermsConditions";
import PrivacyPolicy from "./src/screens/PrivacyPolicy";
function useIsSignedIn() {
  return false;
}
const isSignedIn = useIsSignedIn();

const protectedRoute = (Component) => {
  return isSignedIn ? Component : HomeScreen;
};

const DrawerContent = (props) => {
  const { theme, darkMode } = useSelector((state) => state.ThemeSlice);
  const { logo } = globalStyles(theme);
  const { navLinksContainer, navItem } = stylesHandler(theme);
  // const route = useRoute();
  // console.log(route.name);
  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: theme.backgroundColor }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        <Image style={logo} source={darkMode ? darkLogo : lightLogo} />
      </View>
      <View style={navLinksContainer}>
        <FlatList
          data={navLinkData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => props.navigation.navigate(item.link)}
            >
              {" "}
              <Text style={navItem}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          style={{ width: 250 }}
          drawerContent={(props) => <DrawerContent {...props} />}
          screenOptions={{
            title: "App",
            header: (props) => <Header />,
            drawerStyle: {
              width: 250,
            },
            contentOptions: {
              labelStyle: {},
            },
          }}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="AboutUs" component={AboutUs} />
          <Drawer.Screen name="ContactUs" component={ContactUs} />
          <Drawer.Screen name="ProductOverview" component={Overview} />
          <Drawer.Screen name="TermsAndCondition" component={TermsOfUse} />
          <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const stylesHandler = (theme) =>
  StyleSheet.create({
    navLinksContainer: {
      paddingVertical: 24,
      paddingHorizontal: 12,
    },
    navItem: {
      paddingVertical: 12,
      paddingLeft: 12,
      paddingRight: 16,
      color: theme.contrastText,
    },
  });
