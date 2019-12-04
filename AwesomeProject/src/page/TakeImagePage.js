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
import {Icon} from 'native-base';

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
          flashMode={RNCamera.Constants.FlashMode.on}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            console.log(barcodes);
          }}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}>
            <Text style={{fontSize: 14}}>拍照</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.choosePictureFromLocal()}
            style={styles.capture}>
            <Text style={{fontSize: 14}}> 选取本地图片 </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
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
        console.log('Response = ', response.uri);
        this.setState({
          imageUrl: response.uri,
        });
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
