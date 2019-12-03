import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Icon,
} from 'native-base';

export default class Homepage extends Component {
  static navigationOptions = {
    title: 'Homepage',
  };
  render() {
    return (
      <Container>
        <Header >
        </Header>
        <Content />
        {this.footerPart()}
      </Container>
    );
  }

  footerPart = () => {
    return (
      <Footer>
        <FooterTab>
          <Button active>
            <Icon type="MaterialIcons" name="store" />
            <Text>Store</Text>
          </Button>
          <Button
            onPress={() => {
              this.props.navigation.push('TakeImagePage');
            }}>
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
          <Button
            onPress={() => {
              this.props.navigation.push('ShippingPage');
            }}>
            <Icon type="FontAwesome" name="truck" />
            <Text>Packages</Text>
          </Button>
          <Button>
            <Icon name="person" />
            <Text>Personal</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  };
}
