import React, {Component} from 'react';
import styles from '../style/CommonCss';
import RecordElement from './RecordElement';
import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Button} from 'native-base';

export default class ShippingRecordList extends Component {
  constructor(props) {
    super(props);
    this.ISGET = this.props.recordType === 'Get';
    this.recordList = this.props.records;
  }

  getItem(item) {
    return (
      <Button
        style={{height: 200, padding: 10}}
        onPress={() => {
          this.props.navigation.push('RecordsPage', {recordData: item.detail});
        }}>
        <Row>
          <Col
            style={{
              backgroundColor: this.ISGET ? '#F0FFFF' : '#00CE9F',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              flexGrow: 1,
            }}>
            <Text>{item.title}</Text>
          </Col>
          <Col
            style={{
              backgroundColor: this.ISGET ? '#E6E6FA' : '#635DB7',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              flexGrow: 3,
            }}>
            <Text>{item.status}</Text>
          </Col>
        </Row>
      </Button>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <FlatList
          data={this.props.records}
          renderItem={({item}) => this.getItem(item)}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}
