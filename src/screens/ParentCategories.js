import React from 'react';
import {
  FlatList,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';
import GridTile from '../components/GridTile';
import useResources from '../components/useResources';

const Locations = ({ navigation }) => {
  const locations = useResources('locations');

  return (
    <>
      {locations.length > 0 ? (
        <FlatList
          renderItem={(itemData) => (
            <GridTile
              title={itemData.item.title}
              thumbnail={itemData.item.thumbnail}
              onSelect={() => {
                navigation.navigate('Categories', {
                  locationTitle: itemData.item.title,
                });
              }}
            />
          )}
          data={locations}
          numColumns={2}
          keyExtractor={(item) => item._id}
        />
      ) : (
        <View style={[styles.container]}>
          <ActivityIndicator size='large' color='#0000ff' />
          <Text style={[styles.text]}>Chargement...</Text>
        </View>
      )}
    </>
  );
};

Locations.navigationOptions = () => ({
  headerTitle: 'Les Pennes Mirabeau',
  headerLeft: () => (
    <View style={{ flexDirection: 'row' }}>

    </View>
  ),
});
//<Image source={require('../assets/icon-s.png')} style={styles.icon} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 2,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginLeft: 15,
  },
});

export default Locations;
