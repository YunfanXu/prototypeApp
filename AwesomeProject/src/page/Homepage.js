import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Icon,
  Tabs,
  Tab,
} from 'native-base';
import styles from '../style/CommonCss';
import {Col, Row, Grid} from 'react-native-easy-grid';
export default class Homepage extends Component {
  static navigationOptions = {
    title: 'Homepage',
  };
  constructor(props) {
    super(props);
    this.state = {
      currentMenuSection: 0,
    };
    this.menuElements = ['衣服', '裤子', '鞋子', '书本文具', '数码产品'];
  }
  render() {
    return (
      <Container>
        <View style={styles.HomepageCSS_header}>
          <Text style={styles.HomepageCSS_header_text}>捐赠物品</Text>
        </View>
        <Content>{this.homepageMainMenu()}</Content>
        {this.footerPart()}
      </Container>
    );
  }

  homepageMainMenu = elements => {
    return (
      <Grid>
        <Col size={1}>
          <Button
            style={[styles.HomepageCSS_button_container]}
            bordered
            full
            onPress={() => {
              this.setState({currentMenuSection: 0});
            }}>
            <Text>衣服</Text>
          </Button>
          <Button
            style={styles.HomepageCSS_button_container}
            bordered
            full
            onPress={() => {
              this.setState({currentMenuSection: 1});
            }}>
              <Text>裤子</Text>
            </Button>
          <Button
            style={styles.HomepageCSS_button_container}
            bordered
            full
            onPress={() => {
              this.setState({currentMenuSection: 2});
            }}>
            <Text>鞋子</Text>
          </Button>
          <Button
            style={styles.HomepageCSS_button_container}
            bordered
            full
            onPress={() => {
              this.setState({currentMenuSection: 3});
            }}>
            <Text>书本</Text>
          </Button>
          <Button
            style={styles.HomepageCSS_button_container}
            bordered
            full
            onPress={() => {
              this.setState({currentMenuSection: 4});
            }}>
            <Text>文具</Text>
          </Button>
          <Button
            style={styles.HomepageCSS_button_container}
            bordered
            full
            onPress={() => {
              this.setState({currentMenuSection: 5});
              console.log(this.state.currentMenuSection);
            }}>
            <Text>数码产品</Text>
          </Button>
        </Col>
        <Col size={3}>
          <Text>{this.state.currentMenuSection}</Text>
        </Col>
      </Grid>
    );
  };

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
