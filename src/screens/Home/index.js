import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { FlatList } from "react-native";
import BannerLight from "../../../assets/images/banner_light.png";
import BannerDark from "../../../assets/images/banner_dark.png";
import IconButton from "../../components/IconButton";
import GradientButton from "../../components/GradientButton";
import Timeline from "../../components/Timeline";
import { useSelector } from "react-redux";
import globalStyles from "../../../style";
import Footer from "../../components/Footer";
import { homeIconBtnData } from "../../constants/staticData";

export default function HomeScreen() {
  const { theme, darkMode } = useSelector((state) => state.ThemeSlice);
  const {
    robotoSlab,
    main,
    blockTitle,
    formView,
    mainSecondary,
    formViewBox,
    primaryText,
    whiteText,
    textCenter,
  } = globalStyles(theme);
  const { imageContainer, bannerImg } = styles(theme);
  return (
    <ScrollView style={main}>
      <View style={mainSecondary}>
        <View style={formView}>
          <View style={imageContainer}>
            {" "}
            <Image
              key={`banner_${darkMode}`}
              style={bannerImg}
              source={darkMode ? BannerDark : BannerLight}
              resizeMode="cover"
            />
          </View>

          <View style={formViewBox}>
            {/* {darkMode ? ( */}
            <Text style={[primaryText, blockTitle, textCenter, robotoSlab]}>
              Kimlcards
            </Text>
            {/* // ) : (
            //   <GradientText style={[blockTitle, textCenter]} text="Kimlcards" />
            // )} */}

            <Text style={[primaryText, textCenter]}>
              Spend crypto with the ease of cash
            </Text>

            <Text style={[whiteText, textCenter]}>
              Use your crypto like cash with our
              <Text style={primaryText}> free </Text>
              Kiml Card — pay anywhere, anytime
            </Text>
            <GradientButton text="Get My Card" />
          </View>
        </View>{" "}
        <View style={[formView]}>
          <View style={formViewBox}>
            <Text style={[primaryText, blockTitle, textCenter]}>
              Crypto, Meet Reality
            </Text>

            <Text style={[whiteText, textCenter]}>
              Kiml Cards bridges the gap between your digital assets and
              everyday life. Use your crypto to shop, dine, and pay at your
              favorite places, including:
            </Text>
            <FlatList
              data={homeIconBtnData}
              renderItem={({ item }) => <IconButton {...item} />}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>{" "}
        <Timeline />
        <View style={[formView]}>
          <View style={formViewBox}>
            <Text style={[primaryText, blockTitle, textCenter]}>
              Earn Rewards While You Share
            </Text>

            <Text style={[whiteText, textCenter]}>
              Invite friends and family to Kiml Cards and earn up to 3% in
              referral fees. With user-friendly referral tools and transparent
              tracking, earning rewards is easier than ever
            </Text>
            <Text style={[primaryText, blockTitle, textCenter]}>
              Join the Affiliate Program Now
            </Text>
          </View>
        </View>
        <View style={[formView]}>
          <View style={formViewBox}>
            <Text style={[primaryText, blockTitle, textCenter]}>
              Experience the Future of Spending
            </Text>

            <Text style={[whiteText, textCenter]}>
              Kiml Cards gives you the freedom to use your crypto without
              limits. From online stores to luxury brands, the possibilities are
              endless
            </Text>

            <GradientButton text="Get My card" />
            <GradientButton text="Discover more" />
          </View>
        </View>
        {/* <Footer />{" "} */}
      </View>{" "}
      <Footer />
    </ScrollView>
  );
}

const styles = (theme) =>
  StyleSheet.create({
    imageContainer: {
      width: "100%",
      height: 75,
    },
    bannerImg: {
      width: "100%",
      height: "100%",
      // borderRadius: 8,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      // resizeMode: "stretch",
    },
  });
