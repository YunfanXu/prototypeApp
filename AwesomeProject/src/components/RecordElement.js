import React, {Component} from 'react';
import {Container, Text} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
export default class LayoutExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.ISGET = this.props.recordType === 'Get'
    this.singleRecord = this.props.recordData;    
  }
  render() {
    return (
      <Container style={{height: 200, padding: 10}}>
        <Row>
          <Col
            style={{
              backgroundColor: this.ISGET ? '#F0FFFF' : '#00CE9F',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              flexGrow: 1,
            }}>
            <Text>{this.singleRecord.timeStamp}</Text>
          </Col>
          <Col
            style={{
              backgroundColor: this.ISGET ? '#E6E6FA' : '#635DB7',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              flexGrow: 3,
            }}>
            <Text>{this.singleRecord.address}</Text>
          </Col>
        </Row>
      </Container>
    );
  }
}
