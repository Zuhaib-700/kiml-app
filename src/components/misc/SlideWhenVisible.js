import React, { useEffect, useRef } from "react";
import { Dimensions, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  useAnimatedScrollHandler,
  runOnJS,
} from "react-native-reanimated";

const SlideInWhenVisible = ({ children, style }) => {
  const viewRef = useRef(null);
  const isAnimated = useRef(false);
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(50);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  const checkVisibility = (scrollY, viewPosition) => {
    "worklet";
    const screenHeight = Dimensions.get("window").height;
    const isVisible =
      viewPosition.y < scrollY + screenHeight &&
      viewPosition.y + viewPosition.height > scrollY;

    if (isVisible && !isAnimated.current) {
      opacity.value = withTiming(1, {
        duration: 300,
        easing: Easing.out(Easing.ease),
      });
      translateY.value = withTiming(0, {
        duration: 300,
        easing: Easing.out(Easing.ease),
      });
      isAnimated.current = true;
    }
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      viewRef.current.measure((x, y, width, height, pageX, pageY) => {
        runOnJS(checkVisibility)(event.contentOffset.y, { y: pageY, height });
      });
    },
  });

  return (
    <Animated.View
      ref={viewRef}
      style={[animatedStyle, style]}
      onScroll={scrollHandler}
      onLayout={() => {
        // Initial check when component mounts

        viewRef.current.measure((x, y, width, height, pageX, pageY) => {
          checkVisibility(y, { y: pageY, height });
        });
      }}
    >
      {children}
    </Animated.View>
  );
};

export default SlideInWhenVisible;
