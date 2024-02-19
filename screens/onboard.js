import {
  StyleSheet,
  Text,
  View,
  NativeModules,
  TouchableNativeFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors, fontsSettings } from "../assets/defaults";
const BAR_HEIGHT = NativeModules.StatusBarManager.HEIGHT;
import { StatusBar } from "expo-status-bar";
import { MotiView, MotiImage, MotiText } from "moti";
const Onboard = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const onBoardData = [
    {
      image: require("../assets/images/happy.png"),
      title: "We are happy you are here",
      description: `A community of people interested in economics and finance. Get the freedom to be a victor. Here,you will learn and apply from professionals`,
      textColor: "white",
      buttonBackground: "white",
      buttonTextColor: "black",
      background: colors.secondary,
    },
    {
      image: require("../assets/images/world.png"),
      title: "Discover quality news",
      description: `Economic and Financial news to get you updated on world prevailing economic indicators`,
      textColor: "white",
      buttonBackground: "white",
      buttonTextColor: "black",
      background: "#5EA672",
    },
    {
      image: require("../assets/images/happy.png"),
      title: "Financial tracker and budgeting",
      description: `Prepare seamless budgets with the budget maker and track your spending behavior. Our analysts can give you expert advices based on these`,
      textColor: "white",
      buttonBackground: "white",
      buttonTextColor: "black",
      background: "#70559E",
    },
    {
      image: require("../assets/images/Mathematics-bro.png"),
      title: "Economics modules and materials prepared for you",
      description: `Learn economics and discuss with people who are also interested in your topic. Broaden your knowledge base`,
      textColor: "white",
      buttonBackground: "white",
      buttonTextColor: "black",
      background: "#3cb4E5",
    },
  ];
  useEffect(() => {
    let count = 0;
    const intervalId = setInterval(() => {
      count = count + 1 > 3 ? 0 : count + 1;
      setIndex(count);
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <MotiView
      style={[styles.container]}
      animate={{
        backgroundColor: onBoardData[index].background,
      }}
    >
      <StatusBar
        style="light"
        backgroundColor="rgba(0,0,0,0) "
        translucent={true}
      />
      <MotiImage
        source={onBoardData[index].image}
        style={{
          width: "100%",
          height: 300,
          marginTop: -30,
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
        delay={200}
      />
      <View>
        <MotiText
          style={[styles.headerText, { color: onBoardData[index].textColor }]}
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
          delay={250}
        >
          {onBoardData[index].title}
        </MotiText>
        <MotiText
          style={[styles.headerMedium, { color: onBoardData[index].textColor }]}
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
        >
          {onBoardData[index].description}
        </MotiText>
      </View>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(colors.white, false)}
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <MotiView
          style={{
            width: "80%",
            height: 50,
            backgroundColor: onBoardData[index].buttonBackground,
            alignSelf: "center",
            alignItems: "center",
            marginTop: 30,
            justifyContent: "center",
            borderRadius: 30,
          }}
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
          delay={350}
        >
          <Text
            style={{
              color: onBoardData[index].buttonTextColor,
              fontSize: fontsSettings.medium,
              fontFamily: "quickRegular",
              textTransform: "uppercase",
            }}
          >
            get started
          </Text>
        </MotiView>
      </TouchableNativeFeedback>
    </MotiView>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  container: {
    padding: 10,

    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    gap: 20,
  },
  headerText: {
    textAlign: "center",
    fontSize: fontsSettings.veryBig,
    marginBottom: 10,
    fontFamily: "quickBold",
    lineHeight: 30,
  },
  headerMedium: {
    textAlign: "center",
    fontSize: fontsSettings.medium,
    color: colors.white,
    fontFamily: "quickRegular",
    lineHeight: 25,
  },
});
