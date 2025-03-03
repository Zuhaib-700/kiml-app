import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useSelector } from "react-redux";

const timelineData = [
  {
    id: 1,
    title: "Sign Up",
    subTitle: "Apply for your virtual or physical card",
  },
  {
    id: 2,
    title: "KYC",
    subTitle: "Verify yourself",
  },
  {
    id: 3,
    title: "Fund Your Card",
    subTitle: "Send crypto to your Kiml card",
  },
  {
    id: 4,
    title: "Start Spending",
    subTitle: "Use wherever credit cards are accepted",
  },
];

const Timeline = () => {
  const { theme, darkMode } = useSelector((state) => state.ThemeSlice);
  const {
    container,
    formView,
    content,
    primaryText,
    getStartedHeading,
    blockTitle,
    textCenter,
    timeline,
    formViewBox,
    verticalLine,
    timelineItem,
    circle,
    yearText,
    infoText,
    horizontalLine,
    infoTextContainer,
    subtitle,
  } = styles(theme);
  return (
    <ScrollView contentContainerStyle={(container, formView)}>
      <View>
        <Text style={[primaryText, getStartedHeading, blockTitle, textCenter]}>
          {" "}
          Get Started in 4 Simple Steps
        </Text>
      </View>
      <View style={[timeline, formViewBox]}>
        <View style={verticalLine} />
        <FlatList
          data={timelineData}
          ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[timelineItem, { borderLeftColor: item.color || "gray" }]}
            >
              <View
                style={[
                  circle,
                  {
                    backgroundColor: "#3b5998",
                  },
                ]}
              >
                <Text style={yearText}>{item.id}</Text>
                <View style={horizontalLine} />
              </View>
              <View style={content}>
                {/* {expandedYears.includes(item.year) && ( */}
                <Text
                  style={{
                    color: "#56a3eb",
                    fontSize: 20,
                  }}
                >
                  {item.title}
                </Text>
                <Text style={subtitle}>{item.subTitle}</Text>
                {/* //   )} */}
              </View>
            </View>
          )}
        />
      </View>
      <View style={[formViewBox, infoTextContainer]}>
        {" "}
        <Text style={infoText}>
          Pay with Google Pay or Apple Pay, and choose between a virtual or
          physical card. —it's that simple.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      paddingTop: 40,
      paddingBottom: 20,
      // paddingHorizontal: 20,
    },
    timeline: {
      position: "relative",
      paddingHorizontal: 16,
      // paddingTop: 5,
    },
    verticalLine: {
      position: "absolute",
      backgroundColor: "#3b5998",
      width: 1,
      height: "120%",
      left: 55,
      zIndex: -1,
    },
    horizontalLine: {
      position: "absolute",
      backgroundColor: "#3b5998",
      width: 15,
      height: 1,
      left: 40,
      zIndex: -1,
    },
    timelineItem: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
      marginLeft: 10,
      paddingLeft: 10,
    },
    blockTitle: {
      fontSize: 24,
      padding: 0,
    },
    subtitle: {
      color: theme.textSecondary,
      fontSize: 16,
    },
    primaryText: {
      color: "#15a1eb",
    },
    infoText: {
      color: theme.textTertiary,
      textAlign: "center",
      fontSize: 14,
      width: "65%",
      marginTop: 48,
    },
    infoTextContainer: { alignItems: "center" },
    textCenter: { textAlign: "center" },
    formView: {
      backgroundColor: theme.backgroundColor,
      width: Dimensions.get("window").width - 32,
      borderRadius: 8,
      marginBottom: 32,
      paddingVertical: 30,
      // paddingRight: 24,
      // shadowColor: "#171717",
      // shadowOffset: { width: -2, height: 4 },
      // shadowOpacity: 0.2,
      // shadowRadius: 10,
      // elevation: 20,
    },
    getStartedHeading: {
      marginBottom: 24,
    },
    formViewBox: {
      paddingVertical: 30,
      // paddingHorizontal: 24,
      // paddingBottom: 32,
      // gap: 16,
      // textAlign: "center",
    },
    circle: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: "gray",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 35,
    },
    yearText: {
      color: "white",
      fontWeight: "bold",
    },
    content: {
      flex: 1,
      // flexDirection: "row",
      // alignItems: "center",
    },
  });

export default Timeline;
