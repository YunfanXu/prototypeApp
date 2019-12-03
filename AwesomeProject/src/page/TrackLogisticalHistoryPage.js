import React, { Component } from 'react'
import {Text, View, TouchableOpacity} from 'react-native';

export default class TrackLogisticalHistory extends React.Component {
  static navigationOptions = {
    title: 'TrackLogisticalHistoryPage',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's TrackLogisticalHistoryPage"
        onPress={() =>
          this.props.navigation.pop()
        }
      />
    );
  }
}