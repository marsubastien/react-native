/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import HomeApp from './HelloWorld.';
import Subscribes from './Subscribes';
import UserAccount from './UserAccount';
import Post from './Post';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MenuElement = (route, screen, title, label) => {
  return {
    screen: createStackNavigator({
      [route]: {
        screen: screen,
        navigationOptions: ({ navigation }) => ({
          title: title,
          headerLeft: <Icon onPress={() => navigation.toggleDrawer()} name='bars' size={25} color='black' style={{ marginLeft: 10 }} />,
          headerRight: <Icon onPress={() => navigation.navigate('Account')} name='user' size={25} color='black' style={{ marginLeft: 10 }} />
        })
      }
    }),
    navigationOptions: ({ navigation }) => ({
      drawerLabel: label
    }),
  }
};

const MyDrawer = createDrawerNavigator({
  Home: {
    screen: createStackNavigator({
      Home: {
        screen: HomeApp,
        navigationOptions: ({ navigation }) => ({
          title: 'Bienvenue sur IT-Reddit',
          headerLeft: <Icon onPress={() => navigation.toggleDrawer()} name='bars' size={25} color='black' style={{ marginLeft: 10 }} />,
          headerRight: <Icon onPress={() => navigation.navigate('Account')} name='user' size={25} color='black' style={{ marginRight: 10 }} />
        })
      }
    }),
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Accueil'
    }),
  },
  Subscribes: {
    screen: createStackNavigator({
      Subscribes: {
        screen: Subscribes,
        navigationOptions: ({ navigation }) => ({
          title: 'Mes abonnements',
          headerLeft: <Icon onPress={() => navigation.toggleDrawer()} name='bars' size={25} color='black' style={{ marginLeft: 10 }} />,
          headerRight: <Icon onPress={() => navigation.navigate('Account')} name='user' size={25} color='black' style={{ marginRight: 10 }} />
        })
      }
    }),
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Abonnements'
    }),
  },
}, {
    drawerBackgroundColor: 'lime',
    defaultNavigationOptions: {
      gesturesEnabled: true,
    }
  });

const MainStack = createStackNavigator({
  Home: { screen: MyDrawer },
  Subscribes: { screen: MyDrawer },
  Account: {
    screen: createStackNavigator({
      Account: {
        screen: UserAccount,
        navigationOptions: ({ navigation }) => ({
          title: 'Mon compte',
          headerLeft: <Icon onPress={() => navigation.navigate('Home')} name='arrow-left' size={25} color='black' style={{ marginLeft: 10 }} />,
        })
      }
    }),
  },
  Post: {
    screen: createStackNavigator({
      Post: {
        screen: Post,
        navigationOptions: ({ navigation }) => ({
          title: 'Détail du Post',
          headerLeft: <Icon onPress={() => navigation.navigate('Home')} name='arrow-left' size={25} color='black' style={{ marginLeft: 10 }} />,
        })
      }
    })

  },
},
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      gesturesEnabled: true,
    }
  }
);

const App = createAppContainer(MainStack);
export default App;
