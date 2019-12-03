import React, {Component} from 'react';
import {Container, Header, Content, Text, Tab, Tabs} from 'native-base';
import ShippingRecordList from '../components/ShippingRecordList';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    status:'on-goning',
    timeStamp: '2019-12-04 10:11:10',
    address: '1苏州市工业园区星湖街328号',
    detail:[
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        timeStamp: '2019-12-04 10:11:10',
        address: '1苏州市工业园区星湖街328号',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6322',
        title: 'Second Item',
        timeStamp: '2019-12-03 10:11:10',
        address: '2苏州市工业园区星湖街328号',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d7132',
        title: 'Third Item',
        timeStamp: '2019-12-01 10:11:10',
        address: '3苏州市工业园区星湖街328号',
      },
    ],
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6322',
    title: 'Second Item',
    status:'on-goning',
    timeStamp: '2019-12-03 10:11:10',
    address: '2苏州市工业园区星湖街328号',
    detail:[
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        timeStamp: '2019-12-04 10:11:10',
        address: '1苏州市工业园区星湖街328号',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6322',
        title: 'Second Item',
        timeStamp: '2019-12-03 10:11:10',
        address: '2苏州市工业园区星湖街328号',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d7132',
        title: 'Third Item',
        timeStamp: '2019-12-01 10:11:10',
        address: '3苏州市工业园区星湖街328号',
      },
    ],
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7132',
    title: 'Third Item',
    status:'arrived',
    timeStamp: '2019-12-01 10:11:10',
    address: '3苏州市工业园区星湖街328号',
    detail:[
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        timeStamp: '2019-12-04 10:11:10',
        address: '1苏州市工业园区星湖街328号',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6322',
        title: 'Second Item',
        timeStamp: '2019-12-03 10:11:10',
        address: '2苏州市工业园区星湖街328号',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d7132',
        title: 'Third Item',
        timeStamp: '2019-12-01 10:11:10',
        address: '3苏州市工业园区星湖街328号',
      },
    ],
  },
];

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
