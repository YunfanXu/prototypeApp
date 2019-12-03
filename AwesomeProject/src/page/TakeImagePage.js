import React, { Component } from 'react'
import { Container, Header, Content, Button, Text } from 'native-base';
import { RNCamera, FaceDetector } from 'react-native-camera';

export default class TakeImagePage extends React.Component {
  static navigationOptions = {
    title: 'TakeImagePagePage',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header />
        <Content>
          <Button>
            <Text>Click Me!</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}