import React, {Component} from 'react';
import {Container, Header, Content, Text, Tab, Tabs} from 'native-base';
import ShippingRecord from '../components/ShippingRecord';

export default class RecordsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Records History',
  };
  render() {
    return (
      <Container>
        <ShippingRecord recordData={this.props.navigation.state.params.recordData}/>
      </Container>
    );
  }
}
