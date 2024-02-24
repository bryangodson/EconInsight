import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";
import React from "react";
import { colors } from "../assets/defaults";

import { Octicons } from "@expo/vector-icons";

const Tag = ({ title, iconName, action }) => {
  return (
    <View>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(colors.white, false)}
        onPress={() => {
          action();
        }}
      >
        <View style={styles.tag}>
          <Octicons name={iconName} size={18} color={colors.black} />
          <Text style={styles.tagText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  tag: {
    backgroundColor: "#eee",
    width: 110,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    flexDirection: "row",
    columnGap: 5,
  },
  tagText: {
    fontFamily: "quickLight",
  },
});
