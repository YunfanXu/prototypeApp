import React, {Component} from 'react';
import styles from '../style/CommonCss';
import RecordElement from './RecordElement';
import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';

export default class ShippingRecords extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.recordData);
    
  }
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <FlatList
          data={this.props.recordData}
          renderItem={({item}) => (
            <RecordElement
              recordType={this.props.recordType}
              recordData={item}
            />
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}
