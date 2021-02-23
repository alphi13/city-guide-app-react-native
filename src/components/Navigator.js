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
// import FavoritesScreen from '../screens/FavoritesScreen'

// Default stack options
const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? '#2a1a73' : '',
    height: 50,
  },
  headerTitleStyle: {
    fontFamily: 'nunito-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'nunito-light',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : '#2a1a73',
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
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

// Search navigator
const SearchNavigator = createStackNavigator(
  {
    Search,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

// Info navigator
const InfoNavigator = createStackNavigator(
  {
    Info: AppInfo,
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
      tabBarColor: '#2a1a73',
    },
  },
  Search: {
    screen: SearchNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name='ios-search' size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: '#2a1a73',
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
      tabBarColor: '#2a1a73',
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
          backgroundColor: '#2a1a73',
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: '#ff6f00',
        },
      });

export default createAppContainer(PlacesFavTabNavigator);
