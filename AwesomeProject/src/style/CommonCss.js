import {StyleSheet} from 'react-native';
import ProductPage from '../page/ProductPage';

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
  centerDisplay:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
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
  },
  EvaluatePage_productContainer:{
    width: '100%',
    height: '30%',
    paddingTop: 10,
    paddingBottom:10,
    paddingLeft:'5%'
    // backgroundColor:'red'
  },
  EvaluatePage_text_price:{
   fontSize: 18,
   lineHeight: 30,
   color: 'red'
    // backgroundColor:'red'
  },
  EvaluatePage_recommendationContainer:{
    width: '100%',
    height: '10%',
    paddingTop: 10,
    paddingBottom:10,
    paddingLeft:'5%'
  },
  EvaluatePage_productImage:{
    height:'100%',
    width: 'auto'
  },
  ProductPage_bottomContainer:{
    display:'flex',
    justifyContent:'space-around',
    alignItems: "center",
    width: '100%',
    height: '70%',
    paddingTop: 10,
    paddingBottom:10,
    paddingLeft:'5%'
  },
  ProductPage_Button:{
    width:'40%',
    height:'10%'
  },
  Modal_Container:{
    width: '100%',
    height: '100%',
    backgroundColor:'rgba(255,255,255,0)'
  },
  ReviewPage_starRating: {
    width: 200,
    height: 40
  },
  ReviewPage_starRating_text:{
    fontSize:22,
    lineHeight: 30
  }
});

module.exports = styles;
