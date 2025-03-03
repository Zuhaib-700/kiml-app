import { MotiView } from "moti";
import React from "react";
import { View, StyleSheet } from "react-native";
// import { MotiView } from "moti";

const FadeInItemVisible = ({ children, containerStyle, itemStyle }) => {
  return (
    <View style={containerStyle}>
      {children.map((child, index) => (
        <MotiView
          key={index}
          from={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "timing", duration: 300, delay: index * 200 }}
          style={[styles.item, itemStyle]}
        >
          {child}
        </MotiView>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FadeInItemVisible;
