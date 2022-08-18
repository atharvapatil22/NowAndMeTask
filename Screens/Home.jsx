import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Post from "../Components/Post";

const Home = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: heightSc * 50,
      }}
    >
      <View style={styles.heading}></View>
      <View style={styles.newPost}></View>
      <Post />
      <Post />
    </ScrollView>
  );
};

export default Home;

const { height, width } = Dimensions.get("window");
const heightSc = height / 1000;
const widthSc = width / 1000;

const styles = StyleSheet.create({
  heading: {},
  newPost: {},
});
