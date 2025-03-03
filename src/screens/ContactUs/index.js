import React from "react";
import { Text, ScrollView, View } from "react-native";
import globalStyles from "../../../style";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import DetailLine from "./DetailLine";
import { FlatList } from "react-native";
import { contactusData } from "../../constants/staticData";
import Footer from "../../components/Footer";
import { SafeAreaView } from "react-native";

const ContactUs = () => {
  const { theme, darkMode } = useSelector((state) => state.ThemeSlice);
  const { contactUsHeading } = styles();
  const {
    mainSecondary,
    textBox,
    contrastText,
    textBoxWrapper,
    internalHeading,
    main,
    primaryText,
    textCenter,
    internalHeadingContainer,
    mainText,
  } = globalStyles(theme);
  return (
    <ScrollView>
      {" "}
      <View style={[main, { flex: "2 2" }]}>
        <View style={[mainSecondary]}>
          {" "}
          <View style={[internalHeadingContainer]}>
            <Text style={[primaryText, contactUsHeading, internalHeading]}>
              Contact Us
            </Text>
          </View>
          {/* <View style={headingBottomBar} /> */}.{" "}
          <View style={[textBoxWrapper, { flex: 1 }]}>
            <View style={[textBox, { flex: 1 }]}>
              <Text style={[contrastText, mainText]}>KIMEL View HK Ltd</Text>
              <SafeAreaView style={{ flex: 0, marginBottom: 24 }}>
                <FlatList
                  data={contactusData}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <DetailLine image={item.image} text={item.text} />
                  )}
                />
              </SafeAreaView>
              <Text style={[contrastText]}>
                {" "}
                - xmtp.org chat available through{" "}
              </Text>{" "}
              <Text style={[contrastText]}>
                0xF8eC8f7f7D5Ece27130227Bd7846ef24e86E8091
              </Text>
              <Text style={[contrastText]}>kimlview.xyz wallet</Text>
              {/* <DetailLine image="mail" text="support@kimlcards.com" /> */}
            </View>
          </View>{" "}
        </View>{" "}
        <Footer />
      </View>
    </ScrollView>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    contactUsHeading: {
      marginBottom: 16,
    },
  });
export default ContactUs;
