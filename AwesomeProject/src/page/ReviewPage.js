import React, {Component} from 'react';
import styles from '../style/CommonCss';
import {SafeAreaView,View, Modal, Image, TextInput} from 'react-native';
import { Text, Button } from 'native-base';
import ReviewAPI from '../api/ReviewAPI';
import StarRating from '../components/StarRating';


export default class ReviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentContent:'',
      imageUrl:'',
      modalVisible: false,
      productInfo: {},
      conditionLevel: 0,
      cleanliness: 0,
      satisfaction: 0
    };
  }

  setConditionLevel(conditionLevel) {
    this.setState({conditionLevel})
  }

  setCleanliness(cleanliness) {
    this.setState({cleanliness})
  }
  setSatisfaction(satisfaction) {
    this.setState({satisfaction})
  }

  setProductInfo() {
    let productInfo = this.state.productInfo;
    productInfo.conditionLevel = this.state.conditionLevel;
    productInfo.cleanliness = this.state.cleanliness;
    productInfo.satisfaction = this.state.satisfaction;
    productInfo.comment = this.state.commentContent;
    this.setState({productInfo});
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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
            <Text style={{fontSize:25, padding: 20}}>Upload Successfully!</Text>
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
  uploadReview() {
    this.setProductInfo();
    ReviewAPI.uploadReview(this.state.productInfo).then((response) =>{
      if(response){    
        this.setModalVisible(true);    
      }
    }) 
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
     ReviewAPI.getImage().then((response) =>{
      let  imageUrl =  `https://config.epm-wb2c.projects.epam.com/api/v1${response.picAddress}`;
      console.log('imageurl',imageUrl);
      
      // let  imageUrl =  `http://10.72.64.109:8085${response.picAddress}`;
      this.setState({imageUrl});
      this.setState({productInfo: response});
    });
  }

  componentDidMount() {
    this.getImageUrl();
  }
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.EvaluatePage_productContainer}>
          <Image
            style={styles.EvaluatePage_productImage}
            resizeMode={'contain'}
            source={{uri: this.state.imageUrl}}/>
        </View>
        <View style={[styles.ProductPage_bottomContainer]}>
          <View>
            <Text style={styles.ReviewPage_starRating_text}>Write your comment</Text>
            {this.displayComment()}
          </View>
          <View style={styles.ReviewPage_starRating}>
            <Text style={styles.ReviewPage_starRating_text}>Condition Level</Text>
            <StarRating
              maxStars={5}
              rating={0}
              disabled={false}
              starSize={25}
              onStarChange={(value) => this.setConditionLevel(value)}
            />
          </View>
          <View style={styles.ReviewPage_starRating}>
            <Text style={styles.ReviewPage_starRating_text}>Cleanliness</Text>
            <StarRating
              maxStars={5}
              rating={0}
              disabled={false}
              starSize={25}
              onStarChange={(value) => this.setCleanliness(value)}
            />
          </View>
          <View style={styles.ReviewPage_starRating}>
            <Text style={styles.ReviewPage_starRating_text}>Your Satisfaction</Text>
            <StarRating
              maxStars={5}
              rating={0}
              disabled={false}
              starSize={25}
              onStarChange={(value) => this.setSatisfaction(value)}
            />
          </View>
          <Button 
            onPress={() =>{
              this.uploadReview();
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