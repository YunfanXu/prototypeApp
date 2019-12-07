import React, {Component} from 'react';
import styles from '../style/CommonCss';
import {SafeAreaView, View, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import { Container, Header, Content, Form, Item, Input, Label,DatePicker,Text, Button } from 'native-base';
import ProductApi from '../api/ProductAPI';

const DATA =[[1,2],[3,4],[5,6],[7]]
export default class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      conditionLevel: 0,
    };
    this.productData = this.props.navigation.state.params.item;
    this.setDate = this.setDate.bind(this);
    this.setConditionLevel = this.setConditionLevel.bind(this);
    console.log('this.props.navigation.state.params.imageUrl',this.props.navigation.state.params.imageUrl);
    
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  setConditionLevel(level) {
    this.setState({ conditionLevel: parseInt(level) });
  }
  
  displayComment = () =>{
    return(
      <View>
       <TextInput
            onChangeText={this.setConditionLevel}
            placeholder = {'Condition level: from 1 to 10'} 
            placeholderTextColor = {'#BBBBBB'}
            style = {{padding: 10,borderColor:'grey',color:'grey', height:90, width:250,paddingVertical: 0, fontSize: 16}}
         />
      </View>
    )
  }

  showDatePicker = () => {
    return(
      <View>
            <DatePicker
              defaultDate={new Date()}
              minimumDate={new Date(2010, 1, 1)}
              maximumDate={new Date()}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="When you bought the product?"
              textStyle={{fontSize: 18, color: "green" }}
              placeHolderTextStyle={{ fontSize: 18, color: "#d3d3d3" }}
              onDateChange={this.setDate}
              disabled={false}
              />
          </View>
    )
  }

  getEvaluatedData = () =>{
    let data = this.productData;
    data.boughtDate = this.state.chosenDate;
    data.itemCondition= this.state.conditionLevel;
    data.id = this.props.navigation.state.params.productId;
    return data;
  }
  confirmEvaluating = () =>{
    let productInfo = this.getEvaluatedData();
    ProductApi.imageEvaluate(productInfo).then((response) =>{
      console.log('imageEvaluate:',response);
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.EvaluatePage_productContainer}>
          <Image
            style={styles.EvaluatePage_productImage}
            resizeMode={'contain'}
            source={{uri: this.props.navigation.state.params.imageUrl}}/>
        </View>
        <View style={[styles.ProductPage_bottomContainer]}>
          <View style={[styles.centerDisplay,]}>
            <Text style={{fontSize:22}}>Condition Level</Text>
            {this.displayComment()}
          </View>
          <View style={styles.centerDisplay}>
            <Text style={{fontSize:22}}>Date</Text>
            {this.showDatePicker()}
          </View>
          <Button 
            onPress={() =>{
              this.confirmEvaluating();
            }}
            style={[styles.ProductPage_Button,styles.centerDisplay]}>
            <Text>Confirm</Text>
          </Button>
        </View>
      </SafeAreaView>
    )
  }
}