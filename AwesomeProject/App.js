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
import LoginPage from './src/page/LoginPage';
import Homepage from './src/page/Homepage';
import ShippingPage from './src/page/ShippingPage';
import TakeImagePage from './src/page/TakeImagePage';
import RecordsPage from './src/page/RecordsPage';
import EvaluatePage from './src/page/EvaluatePage';
import ProductPage from './src/page/ProductPage';
import ReviewPage from './src/page/ReviewPage';

const AppNavigator = createStackNavigator({
  LoginPage: { screen: LoginPage },
  Home: { screen: Homepage },
  ShippingPage: { screen: ShippingPage },
  TakeImagePage: { screen: TakeImagePage },
  EvaluatePage: { screen: EvaluatePage },
  ProductPage: { screen: ProductPage },
  ReviewPage: { screen: ReviewPage },

  RecordsPage: { screen: RecordsPage }
});

export default createAppContainer(AppNavigator);
