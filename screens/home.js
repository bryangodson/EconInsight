import {
  StyleSheet,
  Text,
  View,
  NativeModules,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { colors } from "../assets/defaults";
const BAR_HEIGHT = NativeModules.StatusBarManager.HEIGHT;
import { Octicons } from "@expo/vector-icons";
import Tag from "../components/tags";
import News from "../components/news";
import { StatusBar } from "expo-status-bar";
import { data } from "../assets/data";

// admob configurations
import {
  InterstitialAd,
  TestIds,
  AdEventType,
  BannerAd,
  BannerAdSize,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : "ca-app-pub-5953493288912761/1115937206";
const bannerADiD = __DEV__
  ? TestIds.ADAPTIVE_BANNER
  : "cca-app-pub-5953493288912761/3056006158";
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
});
const Home = ({ navigation }) => {
  const [name, setName] = useState("Scisca");
  const [news, setNews] = useState(data);
  const [loaded, setLoaded] = useState(false);
  const loadInterstitial = () => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setLoaded(true);
      }
    );

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  };
  useEffect(() => {
    loadInterstitial();
  }, []);
  const showAds = () => {
    if (loaded) {
      interstitial.show();
      setLoaded(false);
    } else {
      loadInterstitial();
    }
  };
  return (
    <View style={styles.container}>
      {/* header components */}
      <StatusBar backgroundColor={colors.white} style="dark" />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            columnGap: 5,
          }}
        >
          <Image
            source={require("../assets/images/profileImage.jpg")}
            style={styles.profileImage}
          />
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={styles.name}>Hello </Text>
            <Text
              style={[
                styles.name,
                {
                  fontFamily: "quickBold",
                },
              ]}
            >
              {name}
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            columnGap: 15,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Settings");
            }}
            style={{
              padding: 8,
            }}
          >
            <Octicons name="bell" size={20} color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Settings");
            }}
            style={{
              padding: 8,
            }}
          >
            <Octicons name="gear" size={20} color={colors.black} />
          </TouchableOpacity>
        </View>
      </View>
      {/* tags starts here */}
      <View style={{ paddingBottom: 5 }}>
        <ScrollView
          horizontal
          contentContainerStyle={{
            height: 50,
            columnGap: 10,
            padding: 10,
          }}
          showsHorizontalScrollIndicator={false}
        >
          <Tag title="Trending" iconName="broadcast" action={() => showAds()} />
          <Tag title="Just In" iconName="clock" action={() => showAds()} />
          <Tag
            title="Insights"
            iconName="light-bulb"
            action={() => showAds()}
          />
          <Tag title="Exclusive" iconName="flame" action={() => showAds()} />
          <Tag
            title="In Focus"
            iconName="device-camera-video"
            action={() => showAds()}
          />
        </ScrollView>
      </View>
      {/* news content */}
      <View>
        <TouchableOpacity onPress={() => showAds()}>
          <Text>{loaded ? "show ads" : "loading add..."}</Text>
        </TouchableOpacity>
        <BannerAd
          unitId={bannerADiD}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{
            networkExtras: {
              collapsible: "bottom",
            },
          }}
        />
      </View>

      <FlatList
        data={news}
        renderItem={({ item }) => {
          return (
            <News
              title={item.headline}
              summary={item.summary}
              likes={45}
              comments={30}
              seen={50}
            />
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: BAR_HEIGHT,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.black,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: colors.white,
    marginBottom: 0,
  },
  name: {
    fontFamily: "quickRegular",
    fontSize: 18,
  },
});
