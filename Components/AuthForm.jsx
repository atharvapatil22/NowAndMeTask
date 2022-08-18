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
  const [formType, setFormType] = useState("sign-up");

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeFormType = () => {
    setEmail("");
    setUsername("");
    setPassword("");
    setFormType(formType === "login" ? "sign-up" : "login");
  };

  const handleSumbit = () => {
    let payload = {};

    if (formType === "login") {
      payload["email/username"] = email;
    }
    if (formType === "sign-up") {
      payload.email = email;
      payload.username = username;
    }
    payload.password = password;

    // Payload can be sent to POST API when required

    console.log("payload", payload);
  };

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
        {formType === "login" ? "WELCOME BACK" : "SIGN UP"}
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
        {formType === "login"
          ? "Log into your account"
          : "Create an account to continue"}
      </Text>

      <Text style={styles.label}>
        {formType === "login" ? "Email or Username" : "Email"}
      </Text>
      <TextInput
        value={email}
        onChangeText={(txt) => setEmail(txt)}
        style={styles.textInput}
        placeholder={"Enter your Email"}
        placeholderTextColor={colors.blueAsh}
        keyboardType="email-address"
      />

      {formType === "sign-up" && (
        <>
          <Text style={styles.label}>Username</Text>
          <TextInput
            value={username}
            onChangeText={(txt) => setUsername(txt)}
            style={styles.textInput}
            placeholder={"Choose a prefered username"}
            placeholderTextColor={colors.blueAsh}
          />
        </>
      )}

      <View
        style={{
          marginTop: heightSc * 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ ...styles.label, marginTop: 0 }}>Password</Text>
        {formType === "login" && (
          <TouchableOpacity>
            <Text style={{ fontSize: normalize(14), color: "grey" }}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <TextInput
        value={password}
        onChangeText={(txt) => setPassword(txt)}
        secureTextEntry
        style={styles.textInput}
        placeholder={
          formType === "login"
            ? "Enter your Password"
            : "Choose a prefered password"
        }
        placeholderTextColor={colors.blueAsh}
      />

      <TouchableOpacity style={styles.actionBtn} onPress={handleSumbit}>
        <Text
          style={{
            color: "white",
            fontSize: normalize(16),
            textAlign: "center",
          }}
        >
          {formType === "login" ? "Login now" : "Continue"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={changeFormType}
        style={{
          flexDirection: "row",
          marginTop: heightSc * 20,
        }}
      >
        <Text style={{ fontSize: normalize(14), color: colors.blueAsh }}>
          {formType === "login"
            ? "Not registered yet?"
            : "Already have an account?"}
        </Text>
        <Text
          style={{
            marginLeft: "3%",
            fontSize: normalize(14),
            color: "grey",
          }}
        >
          {formType === "login" ? "Register" : "Login"}
          <AntDesign name="arrowright" size={normalize(16)} />
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
