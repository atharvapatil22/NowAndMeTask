import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Post from "../Components/Post";
import { normalize, colors } from "../theme";
import EmoticonBubble from "../Components/EmoticonBubble";

const Home = () => {
  const [user, setUser] = useState("Jane");
  const [postContent, setPostContent] = useState("");

  return (
    <View style={styles.screenWrapper}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: heightSc * 80,
        }}
      >
        {/* Heading */}
        <View>
          <Text style={{ color: "white", fontSize: normalize(32) }}>
            Hello {user}
          </Text>
          <Text style={styles.message}>
            How are you doing today? Would you like to share something with the
            community 🤗
          </Text>
        </View>

        {/* New Post */}
        <View style={styles.newPost}>
          <Text style={{ color: "white", fontSize: normalize(26) }}>
            Create Post
          </Text>
          <View style={styles.textInput}>
            <EmoticonBubble emoji={"💬"} />
            <TextInput
              value={postContent}
              onChangeText={(txt) => setPostContent(txt)}
              placeholder="How are you feeling today?"
              placeholderTextColor={colors.blueAsh}
              style={{
                color: "white",
                fontSize: normalize(17),
                paddingLeft: "3%",
                width: "93%",
              }}
            />
          </View>

          <TouchableOpacity style={styles.postBtn}>
            <Text
              style={{
                color: "white",
                fontSize: normalize(17),
                textAlign: "center",
              }}
            >
              Post
            </Text>
          </TouchableOpacity>
        </View>

        {/* List Of User Posts */}
        <Post />
        <Post />
      </ScrollView>
    </View>
  );
};

export default Home;

const { height, width } = Dimensions.get("window");
const heightSc = height / 1000;
const widthSc = width / 1000;

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    width: "100%",
    paddingHorizontal: "4%",
  },
  message: {
    color: "lightgray",
    fontSize: normalize(16),
    marginTop: heightSc * 10,
  },
  newPost: {
    backgroundColor: colors.black_2,
    marginTop: heightSc * 30,
    borderColor: colors.blueAsh,
    borderWidth: 1.2,
    borderRadius: 8,
    paddingHorizontal: "4%",
    paddingVertical: heightSc * 45,
  },
  textInput: {
    backgroundColor: colors.black_1,
    fontSize: normalize(20),
    flexDirection: "row",
    paddingVertical: heightSc * 12,
    paddingHorizontal: "4%",
    borderRadius: 8,
    marginTop: heightSc * 20,
  },
  postBtn: {
    backgroundColor: colors.blue_1,
    paddingVertical: heightSc * 10,
    width: "30%",
    marginLeft: "70%",
    borderRadius: 6,
    marginTop: heightSc * 20,
  },
});
