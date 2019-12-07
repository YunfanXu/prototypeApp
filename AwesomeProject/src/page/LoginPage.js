import React, { Component } from 'react';
import {TextInput} from 'react-native';
import { Container, ListItem,Button, CheckBox,Header,Text, Body, Title, Content, Form, Item, Input, Label } from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginRole: 'donator',
    };
    this.loginName = '';
    this.loginPassword = '';
  }

  render() {
    return (
      <Container>
        <Header >
          <Body>
            <Title style={{fontSize:25}}>Login</Title>
          </Body>
        </Header>
          <Grid>
            <Row size={1}>
              <Col style={{display:"flex", justifyContent:'center', alignItems:"center"}}>
                <Title style={{fontSize:20}}>Choose Your Role</Title>
              </Col>
            </Row>
            <Row size={1}>
              <Row size={1}>
                <Col>
                <ListItem>
                  <CheckBox
                    checked={this.state.loginRole === 'donator'}
                    onPress={() =>{
                      this.setState({loginRole: 'donator'})
                    }}
                  />
                  <Body>
                    <Text>Donator</Text>
                  </Body>
                </ListItem>
                </Col>
              </Row>
              <Row size={1}>
                <Col>
                  <ListItem>
                  <CheckBox
                    checked={this.state.loginRole === 'Recipient'}
                    onPress={() =>{
                      this.setState({loginRole: 'Recipient'})
                    }}
                    />
                  <Body>
                    <Text>Recipient</Text>
                  </Body>
                </ListItem>
                </Col>
              </Row>
            </Row>
            <Row size={2}>
            <Col style={{width:"90%", marginLeft:"5%"}}>
                <Form>
                  <Item fixedLabel>
                    <Label>Username</Label>
                    <Input 
                      onChangeText={(input) =>{
                        this.loginName = input
                      }}
                    />
                  </Item>
                  <Item fixedLabel last>
                    <Label>Password</Label>
                    <Input
                      secureTextEntry
                      onChangeText={(text) =>{
                        this.loginPassword = text                        
                      }}/>
                  </Item>
                </Form>
              </Col>
            </Row>
            <Row size={3}>
              <Col style={{width:"50%", marginLeft:"25%"}}>
                <Button block
                  onPress={() =>{                    
                    this.state.loginRole === "donator" ? this.props.navigation.push('TakeImagePage') : this.props.navigation.push('ReviewPage');
                  }}>
                  <Text>Sign in</Text>
                </Button>
              </Col>
            </Row>
          </Grid>    
      </Container>
    );
  }
}