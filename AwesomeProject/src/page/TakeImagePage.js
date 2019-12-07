import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import styles from '../style/CommonCss';
import ImagePicker from 'react-native-image-picker';
import Product from '../api/ProductAPI';

export default class TakeImagePage extends React.Component {
  static navigationOptions = {
    title: 'TakeImagePagePage',
  };
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: null,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            console.log(barcodes);
          }}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}>
            <Text style={{fontSize: 14}}>Snap</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.choosePictureFromLocal()}
            style={styles.capture}>
            <Text style={{fontSize: 14}}> Local Image </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  uploadImage = (uri) =>{
    Product.uploadImage(uri).then((data) =>{
      this.props.navigation.push('EvaluatePage',{data});
    })
  }

  choosePictureFromLocal = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      // Same code as in above section!
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        this.setState({
          imageUrl: response.uri,
        });
        console.log('response.uri:',response.uri);
        
        this.uploadImage(response.uri);
      }
    });
  };
  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      this.setState({
        imageUrl: data.uri,
      });
      console.log(data.uri);
    }
  };
}
