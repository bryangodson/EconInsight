import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
const { width } = Dimensions.get("window");
import { Octicons } from "@expo/vector-icons";
import { colors } from "../assets/defaults";
import { useNavigation } from "@react-navigation/native";
const News = ({ title, summary, likes, comments, seen }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.news}>
      {/* first component of the news */}
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(colors.white, false)}
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <View style={styles.newsTopComponentStyles}>
          {/* left side */}
          <View style={styles.newsTopLeft}>
            <Text style={styles.newsTitle} numberOfLines={3}>
              {title}
            </Text>
            <Text style={styles.newsSummary} numberOfLines={5}>
              {summary}
            </Text>
          </View>
          {/* right image */}
          <Image
            source={require("../assets/images/newsImage.jpg")}
            style={styles.newsImage}
          />
        </View>
      </TouchableNativeFeedback>
      {/* bottom component */}
      <View style={styles.newsReactionButtons}>
        <TouchableOpacity>
          <View style={styles.reactionButton}>
            <Octicons name="thumbsup" size={16} color={colors.black} />
            <Text style={styles.reactionText}>{likes}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.reactionButton}>
            <Octicons name="comment" size={16} color={colors.black} />
            <Text style={styles.reactionText}>{comments}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.reactionButton}>
            <Octicons name="eye" size={16} color={colors.black} />
            <Text style={styles.reactionText}>{seen}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  news: {
    width,
    padding: 10,
    marginTop: 10,
  },
  newsTopComponentStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  newsTopLeft: {
    width: width * 0.6,
  },
  newsImage: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: 12,
  },
  newsReactionButtons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 8,
  },
  reactionButton: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 3,
    padding: 8,
  },
  reactionText: {
    fontFamily: "quickSemiBold",
    color: colors.black,
  },
  newsTitle: {
    fontFamily: "quickBold",
    fontSize: 18,
    marginBottom: 5,
    textTransform: "capitalize",
    color: colors.blueBlack,
  },
  newsSummary: {
    fontFamily: "quickMedium",
    color: colors.black,
  },
});
