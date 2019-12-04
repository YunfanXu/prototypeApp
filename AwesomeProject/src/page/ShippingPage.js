import React, {Component} from 'react';
import {Container, Header, Content, Text, Tab, Tabs} from 'native-base';
import ShippingRecordList from '../components/ShippingRecordList';
import DATA from '../assets/data/packageData';

export default class TrackLogisticalHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Package History',
  };
  render() {
    return (
      <Container>
        <Tabs >
          <Tab heading="寄出">
            <ShippingRecordList navigation={this.props.navigation} records={DATA} recordType="Post" />
          </Tab>
          <Tab heading="收货">
            <ShippingRecordList navigation={this.props.navigation} records={DATA} recordType="Get" />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
