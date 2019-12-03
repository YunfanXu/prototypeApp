import React, { Component } from 'react'
import {View, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';
import styles from '../style/CommonCss';

export default class Homepage extends React.Component {
  static navigationOptions = {
    title: 'Homepage',
  };
  render() {
    return (
      <Container
      style={styles.mainContainer}
      >
      <Header />
      <Content >
        <Button
          onPress={()=>{
              this.props.navigation.push('TrackLogisticalHistoryPage', { name: 'Jane' })
            }}>
            <Text>TrackLogisticalHistoryPage</Text>
        </Button>
        <Button
          onPress={()=>{
            this.props.navigation.push('TakeImagePage', { name: 'Jane' })
            }}>
          <Text>TakeImagePage!</Text>
        </Button>
      </Content>
    </Container>
    )
  }
}
