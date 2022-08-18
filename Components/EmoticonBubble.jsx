import { View, Text } from "react-native";
import React from "react";
import { normalize } from "../theme";

const EmoticonBubble = ({ emoji }) => {
  return (
    <View
      style={{
        backgroundColor: "#27292d",
        borderRadius: 100,
        padding: normalize(8),
      }}
    >
      <Text style={{ textAlign: "center", fontSize: normalize(14) }}>
        {emoji}
      </Text>
    </View>
  );
};

export default EmoticonBubble;
