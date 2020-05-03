import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";

const CategoryGridTileThumb = ({ onSelect, image, title }) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.PlaceItem}>
      <TouchableCmp onPress={onSelect}>
        <View>
          <View style={{ ...styles.placeRow, ...styles.placeHeader }}>
            <ImageBackground source={{ uri: image }} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={2}>
                  {title}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  PlaceItem: {
    flex: 1 / 2,
    height: 150,
    width: "100%",
    margin: 1,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 3,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: "nunito-light",
    fontSize: 21,
    color: "white",
    textAlign: "center",
  },
});

export default CategoryGridTileThumb;
