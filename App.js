import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';


export default class App extends Component 
{
  render()
  {
    return(
      <AppContainer/>
    );
  }
}

const appStackNavigator = createStackNavigator(
  {
    Home:
    {
      screen: HomeScreen,
      navigationOptions: 
      {
        headerShown: false
      }
    },
    Details: 
    {
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(appStackNavigator);
