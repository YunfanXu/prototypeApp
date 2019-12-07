import React, {Component} from 'react';
import styles from '../style/CommonCss';
import {SafeAreaView, View, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import { Container, Header, Content, Form, Item, Input, Label,DatePicker,Text, Button } from 'native-base';
import ReviewAPI from '../api/ReviewAPI';
import StarRating from 'react-native-starrating';

export default class ReviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentContent:'',
    };
    this.imageUrl = '';
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  onStarRatingPress(value) {
    console.log('Rated ' + value + ' stars!');
  }

  displayComment = () =>{
    return(
      <View>
       <TextInput
        onChangeText={(input) =>{
          this.setState({commentContent: input});          
        }}
            placeholder = {'Type here'} 
            placeholderTextColor = {'#BBBBBB'}
            style = {{paddingVertical: 0, paddingLeft: 5, fontSize: 25}}
         />
      </View>
    )
  }

  getImageUrl = () =>{
    ReviewAPI.getImageUrl().then((response) =>{
      console.log('REVIEW IMAGE:',response.picAddress);
      return  `http://10.72.64.109:8085${response.picAddress}`
      ;
    });
  }

  componentDidMount() {
    this.imageUrl = this.getImageUrl();
  }
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.EvaluatePage_productContainer}>
          <Image
            style={styles.EvaluatePage_productImage}
            resizeMode={'contain'}
            source={{uri: this.imageUrl}}/>
        </View>
        <View style={[styles.ProductPage_bottomContainer]}>
          <View>
            <Text style={{fontSize:22}}>Write your comment</Text>
            {this.displayComment()}
          </View>
          <View>
            <StarRating
              maxStars={5}
              rating={3}
              disabled={false}
              starSize={15}
              onStarChange={(value) => this.onStarRatingPress(value)}
            />
          </View>
          <Button style={[styles.ProductPage_Button,styles.centerDisplay]}>
            <Text>Confirm</Text>
          </Button>
        </View>
      </SafeAreaView>
    )
  }
}