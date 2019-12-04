import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    minWidth: 100,
  },
  shippingRecordButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  HomepageCSS_header: {
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(205,225,249,1)',
  },
  HomepageCSS_header_text: {
    color: 'rgb(60, 60, 60)',
  },
  HomepageCSS_button_tab: {
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  HomepageCSS_button_container:{
    height: 100,
    borderRadius:10
  },
  Homepage_button_active:{
    backgroundColor: 'black'
  }
});

module.exports = styles;
