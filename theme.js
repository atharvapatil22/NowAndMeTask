import { Dimensions, Platform, PixelRatio } from "react-native";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const scale = SCREEN_WIDTH / 320;

// This function will normalize fontSize based on OS and ScreenSize
const normalize = (size) => {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

const colors = {
  black_1: "#131319",
  black_2: "#27292d",
  blue_1: "#4a96ff",
  blueAsh: "#414654",
};

module.exports = { colors: colors, normalize: normalize };
