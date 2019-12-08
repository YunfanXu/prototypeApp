import React, {Component} from 'react';
import styles from '../style/CommonCss';
import {SafeAreaView, View, Image, TextInput, StyleSheet, Modal} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import { Container, Header, Content, Form, Item, Input, Label,DatePicker,Text, Button } from 'native-base';
import ProductApi from '../api/ProductAPI';

export default class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      conditionLevel: 0,
      modalVisible: false,
    };
    this.productData = this.props.navigation.state.params.item;
    this.setDate = this.setDate.bind(this);
    this.setConditionLevel = this.setConditionLevel.bind(this);
    console.log('this.props.navigation.state.params.imageUrl',this.props.navigation.state.params.imageUrl);
    this.imgUrl = this.props.navigation.state.params.imageUrl;
    console.log('this.imgUrl',this.imgUrl);
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
              textStyle={{fontSize: 18,lineHeight: 30, color: "black" }}
              placeHolderTextStyle={{ fontSize: 18, color: "#d3d3d3" }}
              onDateChange={this.setDate}
              disabled={false}
              />
          </View>
    )
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  getEvaluatedData = () =>{
    let data = this.productData;
    data.boughtDate = this.state.chosenDate;
    data.itemCondition= this.state.conditionLevel;
    data.picAddress = this.props.navigation.state.params.productPicAddress;
    data.id = this.props.navigation.state.params.productId;
    return data;
  }

  confirmEvaluating = () =>{
    let productInfo = this.getEvaluatedData();
    ProductApi.imageEvaluate(productInfo).then((response) =>{
      if(response){    
        this.setModalVisible(true);    
      }
    });
  }

  displayMessage () {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
        <View style={[styles.centerDisplay,styles.Modal_Container]}>
          <View>
            <Text style={{fontSize:25, padding: 20}}>Thanks for your donation!</Text>
            <Button
              style={styles.centerDisplay}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
                this.props.navigation.popToTop()
              }}>
              <Text>Confirm</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </View>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.EvaluatePage_productContainer}>
        <Image
            style={styles.EvaluatePage_productImage}
            resizeMode={'contain'}
            source={{uri: this.imgUrl}}/>
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
          {this.displayMessage()}
        </View>
      </SafeAreaView>
    )
  }
}