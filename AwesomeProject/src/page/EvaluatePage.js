import React, {Component} from 'react';
import styles from '../style/CommonCss';
import {SafeAreaView, View, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body } from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

const DATA =[[1,2],[3,4],[5,6],[7]]
export default class EvaluatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productArray:[]
    };
    
  }
  getProductCard = (item) => {
    let uri = `http://10.72.64.109:8085${item.picAddress}`
    return (
      <TouchableOpacity
        onPress={() =>{
          this.props.navigation.push('ProductPage', {item, productId:this.props.navigation.state.params.data.id,imageUrl: uri})
        }}>
        <Card style={{flex: 0}}>
          <CardItem>
            <Left>
              <Body>
                <Text>{item.name}</Text>
                {/* <Text note>April 15, 2016</Text> */}
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
                {/* <Icon name="logo-github" /> */}
            <Text>Price: {item.price}</Text>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image resizeMode={'contain'} source={{uri}} style={{width: '100%', height:200,flex: 1}}/>
              <Text>
                {item.description}
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
                {/* <Icon name="logo-github" /> */}
                <Text>Choose it</Text>
            </Left>
          </CardItem>
        </Card>
      </TouchableOpacity>
    )
  }

  displayProduct = (items) => {
    console.log('items:',items);
    return (
      <Row>
        <Col>{this.getProductCard(items[0])}</Col>
        <Col>{ items.length >= 2 && this.getProductCard(items[1])}</Col>
      </Row>
    )
  }
  initizeData= () =>{
    let products = this.props.navigation.state.params.data.relatedProductList;
    let resultArray = [];
    let tempArray = [];
    products.map((product,index) =>{
      if(index % 2 === 0) {
        tempArray.push(product);
      }else{
        tempArray.push(product);
        resultArray.push(tempArray);
        tempArray = [];
      }
    })
    if(products.length % 2 === 1){
      resultArray.push([products[products.length -1]]);
    }
    console.log('resultArray',resultArray);
    this.setState({productArray: resultArray})
  }

  componentDidMount() {
    this.initizeData();
  }
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <FlatList
          data={this.state.productArray}
          renderItem={({item}) => this.displayProduct(item)}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
  }
}