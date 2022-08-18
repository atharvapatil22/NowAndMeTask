import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import { colors, normalize } from "../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import EmoticonBubble from "./EmoticonBubble";
import { Entypo } from "@expo/vector-icons";

const Post = ({ data }) => {
  return (
    <View style={styles.wrapper}>
      {/* Header */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image style={styles.authorImage} source={{ uri: data.authorImage }} />
        <View style={{ marginLeft: "5%" }}>
          <Text style={{ color: "white", fontSize: normalize(20) }}>
            {data.authorName}
          </Text>
          <Text style={{ color: "grey", fontSize: normalize(16) }}>
            {`${data.postedAt} ${data.edited ? "• Edited" : ""}`}
          </Text>
        </View>
        <Entypo
          name="dots-three-horizontal"
          size={normalize(20)}
          color="grey"
          style={{ position: "absolute", right: "2%" }}
        />
      </View>

      {/* Content */}
      <View style={styles.postContent}>
        <View style={{ marginLeft: "3%" }}>
          <EmoticonBubble emoji={data.emoji} />
        </View>

        <Text style={styles.contentText}>{data.content}</Text>
      </View>

      {/* Comments */}
      <View style={styles.comments}>
        <MaterialCommunityIcons
          name="message-reply-outline"
          size={normalize(18)}
          color="grey"
        />
        <Text
          style={{ color: "grey", fontSize: normalize(16), marginLeft: "4%" }}
        >
          {data.commentsCount} Comments
        </Text>
      </View>
    </View>
  );
};

export default Post;

const { height, width } = Dimensions.get("window");
const heightSc = height / 1000;
const widthSc = width / 1000;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.black_2,
    marginTop: heightSc * 30,
    borderColor: colors.blueAsh,
    borderWidth: 1.2,
    borderRadius: 8,
    paddingHorizontal: "4%",
    paddingVertical: heightSc * 36,
  },
  authorImage: {
    width: normalize(40),
    height: normalize(40),
    borderRadius: "100%",
  },
  postContent: {
    flexDirection: "row",
    backgroundColor: colors.black_3,
    paddingVertical: heightSc * 25,
    borderRadius: 8,
    marginTop: heightSc * 20,
  },
  contentText: {
    color: "grey",
    fontSize: normalize(14),
    width: "80%",
    marginHorizontal: "3%",
  },
  comments: {
    marginTop: heightSc * 20,
    flexDirection: "row",
  },
});
