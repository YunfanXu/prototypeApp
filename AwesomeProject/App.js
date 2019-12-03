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
import TrackLogisticalHistoryPage from './src/page/Homepage';
import TakeImagePage from './src/page/TakeImagePage';

const AppNavigator = createStackNavigator({
  Home: { screen: Homepage },
  TrackLogisticalHistoryPage: { screen: TrackLogisticalHistoryPage },
  TakeImagePage: { screen: TakeImagePage },
});

export default createAppContainer(AppNavigator);