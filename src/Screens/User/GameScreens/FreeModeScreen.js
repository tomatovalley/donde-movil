import React from 'react';
import { View, Text, Image, ScrollView,  StyleSheet, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class FreeModeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      Respuesta: '',
      imgs:  [
        {
           img: '../../../imgs/app/regional.jpg',
           pRespuestas: [
             {resp: 'romania'},
             {resp: 'USA'}
           ],
           respuesta: 'mexico'
        },
        {
          img: '../../../imgs/app/logo.png',
          pRespuestas: [
            {resp: 'Canda'},
            {resp: 'España'},
            {resp: ''}
          ],
          respuesta: 'china'
        },
        {
          img: '../../../imgs/app/regional.jpg',
          pRespuestas: [
            {resp: 'Brasil'},
            {resp: 'Costa rica'}
          ],
          respuesta: 'rusia'
        },
        //... // more users here
       ]
    };
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.maxContainer}>
      
          <View style={styles.donde}>
            <Text style={styles.text}>¿Dónde?</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../../imgs/app/regional.jpg')}/> 
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity activeOpacity={.7} style={styles.btn}>
              <Text style={{color: "#fff", textAlign: 'center'}}>RESPUESTA 1</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.7} style={styles.btn}>
              <Text style={{color: "#fff", textAlign: 'center'}}>RESPUESTA 2</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.7} style={styles.btn}>
              <Text style={{color: "#fff", textAlign: 'center'}}>RESPUESTA 3</Text>
            </TouchableOpacity>
          </View>
          
      </View>
      </ScrollView>
    );
  }
}



 const styles = StyleSheet.create({
  maxContainer: {
    alignItems: 'center', 
    flex: 1
  },
  donde: {
    width: wp('84.5%'),
    height: hp('10%'),
    marginTop: 10, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 30, 
    fontFamily: 'Roboto', 
    color: 'rgba(47, 69, 98, 0.8)',
  },
  image:{
    width: wp('90%'),
    height: hp('40%'),
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5
  }, 
  imageContainer:{
    marginBottom: 10,
    marginTop: 20,
    
  },
  btn: {
    backgroundColor: 'rgba(47, 69, 98, 0.8)',
    paddingVertical: 15,
    marginBottom: 5,
    borderRadius: 5,
    width: wp('75%'),
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: wp('95%'),
    height: hp('35%'),
  }
 });