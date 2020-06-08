import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FlatList,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';
import GridTile from '../components/GridTile';

const Locations = ({ navigation }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getLocations = async () => {
      const result = await axios.get(
        'https://tgr-admin.herokuapp.com/api/locations'
      );
      setLocations(result.data);
    };
    getLocations();
  }, []);

  const renderGridItem = (itemData) => (
    <GridTile
      title={itemData.item.title}
      thumbnail={itemData.item.thumbnail}
      onSelect={() => {
        navigation.navigate({
          routeName: 'Categories',
          params: {
            locationTitle: itemData.item.title,
          },
        });
      }}
    />
  );

  return (
    <>
      {locations.length > 0 ? (
        <FlatList
          data={locations}
          renderItem={renderGridItem}
          numColumns={2}
          keyExtractor={(item) => item._id}
        />
      ) : (
        <View style={[styles.container]}>
          <ActivityIndicator size='large' color='#0000ff' />
          <Text style={[styles.text]}>Yükleniyor...</Text>
        </View>
      )}
    </>
  );
};

Locations.navigationOptions = () => ({
  headerTitle: 'Tayland Gezi Rehberi',
  headerLeft: (
    <View style={{ flexDirection: 'row' }}>
      <Image source={require('../assets/icon-s.png')} style={styles.icon} />
    </View>
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginLeft: 15,
  },
});

export default Locations;
