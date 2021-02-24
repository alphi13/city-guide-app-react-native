import React from 'react';
import {
  ScrollView,
  Image,
  Text,
  StyleSheet,
  View,
  Platform,
  Linking,
} from 'react-native';
import MapView from 'react-native-maps';
import { MarkdownView } from 'react-native-markdown-view';

const PlaceDetails = ({ navigation }) => {
  const placesTitle = navigation.getParam('placeTitle');
  const placesImage = navigation.getParam('placeImage');
  const placesContent = navigation.getParam('placeContent');
  const placesInfo = navigation.getParam('placeInfo');
  const placesLat = navigation.getParam('placeLat');
  const placesLng = navigation.getParam('placeLng');

  const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });

  const latLng = `${placesLat},${placesLng}`;

  const label = 'Custom Label';

  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });

  return (
    <ScrollView>
      <Image source={{ uri: placesImage }} style={styles.image} />

      <View style={styles.container}>
        <MarkdownView styles={markdownStyles}>{placesContent}</MarkdownView>
      </View>

      <View>
        {placesInfo !== '' && (
          <>
            <Text style={styles.heading3}>Bilgiler</Text>
            <View style={styles.line} />
            <Text style={styles.container}>{placesInfo}</Text>
          </>
        )}
      </View>

      <View>
        {placesLat && placesLat !== '' && (
          <>
            <Text style={styles.heading3}>Harita</Text>
            <View style={styles.line} />
            <MapView
              showsUserLocation
              style={styles.map}
              initialRegion={{
                latitude: placesLat,
                longitude: placesLng,
                latitudeDelta: 0.0022,
                longitudeDelta: 0.0121,
              }}
            >
              <MapView.Marker
                coordinate={{ latitude: placesLat, longitude: placesLng }}
                title={placesTitle}
                onPress={() => Linking.openURL(url)}
              />
            </MapView>
          </>
        )}
      </View>
    </ScrollView>
  );
};

PlaceDetails.navigationOptions = (navData) => {
  const place = navData.navigation.getParam('placeTitle');
  return {
    headerTitle: place,
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  container: {
    padding: 15,
    fontSize: 19,
    lineHeight: 25,
    fontFamily: 'Abel-Regular',
  },
  heading3: {
    fontSize: 20,
    fontFamily: 'Abel-Regular',
    fontWeight: '700',
    paddingLeft: 15,
    marginBottom: 10,
  },
  line: {
    backgroundColor: '#ccc',
    height: 1,
    marginLeft: '4%',
    marginRight: '4%',
    marginBottom: 10,
  },
  map: {
    height: 300,
    margin: 15,
  },
});

const markdownStyles = {
  text: {
    fontSize: 19,
    lineHeight: 25,
    fontFamily: 'Abel-Regular',
  },
  heading2: {
    fontSize: 24,
    fontFamily: 'Abel-Regular',
    marginBottom: 10,
  },
  heading3: {
    fontSize: 20,
    fontFamily: 'Abel-Regular',
    marginBottom: 10,
    textTransform: 'lowercase',
    textTransform: 'capitalize',
  },
  heading4: {
    fontSize: 18,
    fontFamily: 'Abel-Regular',
    marginBottom: 10,
    textTransform: 'lowercase',
    textTransform: 'capitalize',
  },
  imageWrapper: {
    padding: 4,
    width: '100%',
  },
  hr: {
    marginBottom: 10,
  },
};

export default PlaceDetails;
