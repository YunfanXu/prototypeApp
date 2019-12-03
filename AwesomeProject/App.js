/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Homepage from './src/page/Homepage';
import ShippingPage from './src/page/ShippingPage';
import TakeImagePage from './src/page/TakeImagePage';
import RecordsPage from './src/page/RecordsPage';

const AppNavigator = createStackNavigator({
  Home: { screen: Homepage },
  ShippingPage: { screen: ShippingPage },
  TakeImagePage: { screen: TakeImagePage },
  RecordsPage: { screen: RecordsPage },
});

export default createAppContainer(AppNavigator);