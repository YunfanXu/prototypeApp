import React, {Component} from 'react';
import styles from '../style/CommonCss';
import {SafeAreaView, View, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body } from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

export default class EvaluatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productArray:[]
    };
    
  }
  getProductCard = (item) => {
    let uri = `https://config.epm-wb2c.projects.epam.com/api/v1${item.picAddress}`
    // let uri = `http://10.72.64.109:8085${item.picAddress}`

    return (
      <TouchableOpacity
        onPress={() =>{
          this.props.navigation.push('ProductPage', {item, productId:this.props.navigation.state.params.data.id,productPicAddress:this.props.navigation.state.params.data.picAddress, imageUrl: uri})
        }}>
        <Card style={{flex: 0, paddingBottom: 5}}>
          <CardItem>
            <Body>
              <Image resizeMode={'contain'} source={{uri}} style={{width: '100%', height:200,flex: 1}}/>
              <Text style={styles.EvaluatePage_text_price}>Evaluated price: {item.price}</Text>
              <Text>
                {item.description}
              </Text>
            </Body>
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