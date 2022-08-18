import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { normalize, colors } from "../theme";

const AuthForm = ({ onClose }) => {
  return (
    <View style={{ marginBottom: heightSc * 30, paddingHorizontal: "2%" }}>
      <View
        style={{
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={onClose}
          style={{
            width: normalize(32),
            borderRadius: 100,
          }}
        >
          <Text style={styles.closeBtn}>×</Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{ color: "grey", fontSize: normalize(16), textAlign: "center" }}
      >
        WELCOME BACK
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: normalize(17),
          textAlign: "center",
          marginTop: heightSc * 8,
          fontWeight: "bold",
        }}
      >
        Log into your account
      </Text>

      <Text style={styles.label}>Email or Username</Text>
      <TextInput
        style={styles.textInput}
        placeholder={"Enter your Email"}
        placeholderTextColor={colors.blueAsh}
      />

      <View
        style={{
          marginTop: heightSc * 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ ...styles.label, marginTop: 0 }}>Password</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: normalize(14), color: "grey" }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        secureTextEntry
        style={styles.textInput}
        placeholder={"Enter your Password"}
        placeholderTextColor={colors.blueAsh}
      />

      <TouchableOpacity style={styles.actionBtn}>
        <Text
          style={{
            color: "white",
            fontSize: normalize(16),
            textAlign: "center",
          }}
        >
          Login now
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginTop: heightSc * 20,
        }}
      >
        <Text style={{ fontSize: normalize(14), color: colors.blueAsh }}>
          Not registered yet?
        </Text>
        <Text
          style={{
            marginLeft: "3%",
            fontSize: normalize(14),
            color: "grey",
          }}
        >
          Register <AntDesign name="arrowright" size={normalize(16)} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthForm;

const { height, width } = Dimensions.get("window");
const heightSc = height / 1000;
const widthSc = width / 1000;

const styles = StyleSheet.create({
  closeBtn: {
    color: "white",
    fontSize: normalize(24),
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "black",
    borderRadius: 100,
    width: normalize(32),
  },
  label: {
    color: "grey",
    fontSize: normalize(14),
    marginTop: heightSc * 16,
  },
  textInput: {
    borderWidth: 0.8,
    borderColor: colors.blueAsh,
    color: "white",
    fontSize: normalize(17),
    marginTop: heightSc * 10,
    paddingVertical: heightSc * 8,
    paddingHorizontal: "4%",
    borderRadius: 8,
  },
  actionBtn: {
    backgroundColor: colors.blue_1,
    paddingVertical: heightSc * 12,
    borderRadius: 6,
    marginTop: heightSc * 24,
  },
});
