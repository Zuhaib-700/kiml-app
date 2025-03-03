import { ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import globalStyles from "../../../style";
import Footer from "../../components/Footer";
import { StyleSheet } from "react-native";

const AboutUs = () => {
  const { theme, darkMode } = useSelector((state) => state.ThemeSlice);
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
  const { headingBottomBar } = styles(theme);
  return (
    <ScrollView style={main}>
      {" "}
      <View style={mainSecondary}>
        {" "}
        <View style={[internalHeadingContainer]}>
          <Text style={[primaryText, internalHeading]}>About Us</Text>
          <View style={headingBottomBar} />
        </View>
        <View style={[textBoxWrapper]}>
          <View style={textBox}>
            <Text style={[contrastText, mainText, textCenter]}>
              At KimlCards, we're on a mission to make cryptocurrency spending
              simple and accessible for everyone. By connecting
              stablecoins—digital assets pegged to the US dollar—to a credit
              card, we've made it possible to spend crypto anywhere, without the
              volatility or complexity often associated with digital currencies
            </Text>
          </View>
          <View style={textBox}>
            <Text style={[contrastText, mainText, textCenter]}>
              Our seamless approach automatically converts stablecoins at
              checkout, so you can enjoy hassle-free payments that feel just
              like using traditional fiat. We built KimlCards in direct response
              to our clients' demand for a better way to leverage decentralized
              finance (DeFi) in everyday life
            </Text>
          </View>
          <View style={textBox}>
            <Text style={[contrastText, mainText, textCenter]}>
              Security and compliance lie at the heart of our solution. From
              robust KYC processes to advanced fraud protection, we're committed
              to maintaining the highest standards in fintech. Join us at
              KimlCards and experience the future of finance—where stablecoins
              meet the convenience of a credit card
            </Text>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    internalHeading: {
      fontSize: 24,
    },

    headingBottomBar: {
      backgroundColor: theme.textSecondary,
      height: 4,
      width: 80,
      borderRadius: 9999,
      marginVertical: 16,
    },
  });
export default AboutUs;
