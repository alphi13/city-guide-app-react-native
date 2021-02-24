import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Locations from '../screens/ParentCategories';
import Categories from '../screens/Categories';
import Places from '../screens/Places';
import PlaceDetails from '../screens/PlaceDetails';
import Search from '../screens/Search';
import SearchResults from '../screens/SearchResults';
import AppInfo from '../screens/AppInfo';
import InfoUtil from '../screens/InfoUtil';
// import FavoritesScreen from '../screens/FavoritesScreen'

// Default stack options
const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? '#ffffff' : '',
    height: 60,
  },
  headerTitleStyle: {
    fontFamily: 'Abel-Regular',
    fontSize: 20,//taille texte d'un titre global
  },
  headerBackTitleStyle: {
    fontFamily: 'Abel-Regular',
  },
  headerTintColor: Platform.OS === 'android' ? '#2D58DB' : '#2D58DB',
};

// Main navigator
const Navigator = createStackNavigator(
  {
    Home: {
      screen: Locations,
    },
    Categories: {
      screen: Categories,
    },
    CategoryPlaces: {
      screen: Places,
    },
    PlaceDetail: {
      screen: PlaceDetails,
    },
    Search: {
      screen: Search,
    },
    SearchResult: {
      screen: SearchResults,
    },
    Info: {
      screen: AppInfo,
    },
    InfoUtil: {
      screen: InfoUtil,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

// Search navigator
const SearchNavigator = createStackNavigator(
  {
    'Recherche': Search,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

// Info navigator
const InfoNavigator = createStackNavigator(
  {
    'Crédits': AppInfo,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

// Info navigator
const InfoUtilNavigator = createStackNavigator(
  {
    'Infos Pratiques': InfoUtil,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

// Bottom tab navigator
const tabScreenConfig = {
  Places: {
    screen: Navigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name='ios-home' size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: '#2D58DB',
    },
  },
  InfoUtil: {
    screen: InfoUtilNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name='at-circle-outline' size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: '#2D58DB',
    },
  },
  Search: {
    screen: SearchNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name='ios-search' size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: '#2D58DB',
    },
  },
  Info: {
    screen: InfoNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons
          name='ios-information-circle-outline'
          size={25}
          color={tabInfo.tintColor}
        />
      ),
      tabBarColor: '#2D58DB',
    },
  },
};

// Tab navigator options
const PlacesFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true,
        labeled: false,
        barStyle: {
          backgroundColor: '#2D58DB',
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: '#ff6f00',
        },
      });

export default createAppContainer(PlacesFavTabNavigator);
