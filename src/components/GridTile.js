import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
} from 'react-native';

const GridTile = ({ title, thumbnail, onSelect }) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.mainContainer}>
      <TouchableCmp onPress={onSelect}>
        <View>
          <ImageBackground source={{ uri: thumbnail }} style={styles.bgImage}>
            <View style={styles.titleContainer}>
              <Text numberOfLines={2} style={styles.title}>
                {title}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1 / 2,
    height: 150,
    width: '100%',
    margin: 1,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 3,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'Abel-Regular',
    fontSize: 20,//taille texte d'un titre de bloc
    color: '#fff',
    textAlign: 'center',
  },
});

export default GridTile;
