import {
  StyleSheet,
  Text,
  View,
  NativeModules,
  TextInput,
  Dimensions,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors, fontsSettings } from "../assets/defaults";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
const BAR_HEIGHT = NativeModules.StatusBarManager.HEIGHT;
import { Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width } = Dimensions.get("window");
import { MotiView, MotiImage, MotiText } from "moti";

const Register = ({ navigation }) => {
  const [showNot, setShowNot] = useState(true);
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync(colors.white);
  }, []);

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <StatusBar backgroundColor={colors.white} />

      <View
        style={{
          padding: 20,
        }}
      >
        <MotiImage
          source={require("../assets/images/world.png")}
          style={{
            width: "100%",
            height: 250,
          }}
          resizeMode="contain"
          from={{
            transform: [{ scale: 0 }],
          }}
          animate={{
            transform: [{ scale: 1 }],
          }}
          transition={{
            type: "spring",
            duration: 350,
          }}
          delay={300}
        />
        <Text style={styles.signInText}>Sign In</Text>

        <View style={styles.textInputContainer}>
          <Octicons name="mail" size={18} color={colors.black} />
          <TextInput
            keyboardType="email-address"
            placeholder="Email address..."
            style={{
              width: "90%",
              height: "100%",
              paddingHorizontal: 5,
              fontFamily: "quickRegular",
              borderRadius: 15,
            }}
            cursorColor={colors.black}
            placeholderTextColor={colors.black}
          />
        </View>
        <View
          style={[
            styles.textInputContainer,
            {
              marginBottom: 5,
            },
          ]}
        >
          <Octicons name="lock" size={18} color={colors.black} />
          <TextInput
            placeholder="Password..."
            style={{
              width: "85%",
              height: "100%",
              paddingHorizontal: 5,
              fontFamily: "quickRegular",
              borderRadius: 15,
            }}
            cursorColor={colors.black}
            placeholderTextColor={colors.black}
            secureTextEntry={showNot}
          />
          <TouchableOpacity
            onPress={() => {
              setShowNot(!showNot);
            }}
          >
            <Octicons
              name={showNot ? "eye" : "eye-closed"}
              size={18}
              color={colors.black}
            />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={{
                textAlign: "right",
                fontFamily: "quickRegular",
                color: colors.black,
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(colors.white, false)}
          onPress={() => {
            navigation.navigate("Tabs");
          }}
        >
          <View style={styles.login}>
            <Text style={styles.loginText}>Log in</Text>
          </View>
        </TouchableNativeFeedback>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={{
                textAlign: "left",
                fontFamily: "quickRegular",
                color: colors.black,
              }}
            >
              I am not signed up.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: BAR_HEIGHT,
    paddingHorizontal: 10,
  },
  textInputContainer: {
    width: "100%",
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 50,
    gap: 6,
    paddingHorizontal: 10,
    borderRadius: 30,
    marginBottom: 10,
  },
  login: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: colors.secondary,
    marginTop: 20,
    borderRadius: 30,
  },
  loginText: {
    fontFamily: "quickBold",
    fontSize: fontsSettings.medium,
    color: colors.white,
    textTransform: "uppercase",
  },
  signInText: {
    fontFamily: "quickBold",
    fontSize: fontsSettings.big,
    color: colors.big,
    textAlign: "center",
    marginBottom: 25,
  },
});
