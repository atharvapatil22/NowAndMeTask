import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Post from "../Components/Post";
import { normalize, colors } from "../theme";
import EmoticonBubble from "../Components/EmoticonBubble";
import BottomModal from "../Components/BottomModal";
import AuthForm from "../Components/AuthForm";

const Home = () => {
  const [user, setUser] = useState("Jane");
  const [postContent, setPostContent] = useState("");
  const [showModal, setShowModal] = useState(true);

  return (
    <View>
      <ScrollView contentContainerStyle={styles.wrapper}>
        {!!showModal && (
          <BottomModal
            children={<AuthForm onClose={() => setShowModal(false)} />}
            onRequestClose={() => setShowModal(false)}
          />
        )}

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
        <Pressable style={styles.newPost} onPress={() => setShowModal(true)}>
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
                color: "grey",
                fontSize: normalize(17),
                paddingLeft: "3%",
                width: "93%",
              }}
            />
          </View>

          <TouchableOpacity
            style={styles.postBtn}
            onPress={() => setShowModal(true)}
          >
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
        </Pressable>

        {/* List Of User Posts */}
        {Posts.map((post, index) => (
          <Pressable onPress={() => setShowModal(true)} key={index}>
            <Post data={post} />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const { height, width } = Dimensions.get("window");
const heightSc = height / 1000;
const widthSc = width / 1000;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: heightSc * 80,
    paddingBottom: heightSc * 120,
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
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: "4%",
    paddingVertical: heightSc * 45,
  },
  textInput: {
    backgroundColor: colors.black_3,
    fontSize: normalize(20),
    flexDirection: "row",
    paddingVertical: heightSc * 12,
    paddingHorizontal: "4%",
    borderRadius: 8,
    marginTop: heightSc * 20,
  },
  postBtn: {
    backgroundColor: colors.blue_1,
    paddingVertical: heightSc * 13,
    width: "30%",
    marginLeft: "70%",
    borderRadius: 6,
    marginTop: heightSc * 20,
  },
});

// Simulatiing API response
const Posts = [
  {
    authorImage:
      "https://media.istockphoto.com/photos/pleasant-young-indian-woman-freelancer-consult-client-via-video-call-picture-id1300972573?k=20&m=1300972573&s=612x612&w=0&h=Tiwi8Y0q8FBg8nL0i5GL_GslELTVLKkEB2e6m63Jlcg=",
    authorName: "Theresa Webb",
    postedAt: "5 mins ago",
    edited: false,
    emoji: "👋",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi aperiam deserunt voluptas, ipsa minus labore ipsam porro pariatur quidem, dicta impedit quaerat cumque, corporis fuga!",
    commentsCount: 24,
  },
  {
    authorImage:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    authorName: "Marvin McKinney",
    postedAt: "8 mins ago",
    edited: true,
    emoji: "😔",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repudiandae distinctio blanditiis saepe error, aperiam ullam, quas consequatur quaerat similique delectus fuga autem, placeat unde?",
    commentsCount: 24,
  },
];
