import { Dimensions, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import globalStyles from "../../../style";
import Footer from "../../components/Footer";
import { StyleSheet } from "react-native";
import UnorderedList from "../../components/misc/UnorderedList";
import { productOverView, realTimeData } from "../../constants/staticData";
import { FlatList } from "react-native";

const Overview = () => {
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
  const { overviewText } = styles(theme);
  return (
    <ScrollView style={main}>
      {" "}
      <View style={mainSecondary}>
        {" "}
        <View style={[internalHeadingContainer]}>
          <Text style={[primaryText, internalHeading]}>Product Overview</Text>
          <Text style={[contrastText, overviewText, mainText, textCenter]}>
            KimlCards is designed to simplify how you spend cryptocurrency.
            Whether you're a seasoned crypto user or new to the space, we offer
            a seamless bridge between cryptocurrencies and everyday spending.
          </Text>
        </View>
        <FlatList
          data={productOverView}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                textBoxWrapper,
                {
                  marginBottom: 24,
                  width: Dimensions.get("window").width - 64,
                },
              ]}
            >
              <View style={textBox}>
                <Text style={[primaryText]}>{item.title}</Text>
                {item?.content?.map((data, index) => (
                  <UnorderedList data={data} index={index} />
                ))}
              </View>
            </View>
          )}
        />
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    overviewText: {
      marginVertical: 16,
    },
  });
export default Overview;
