import React from 'react';
import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

export default class FreeModeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: null,
      lives: null,
      counter: null,
      txtRespuesta: '',
      Respuesta: ''
    };
  }

  render() {
    return (

      <KeyboardAvoidingView behavior ="padding" style={{alignItems: 'center', flex: 4}}>
      
        <Text style={{marginTop: 20, fontSize: 30, fontFamily: 'Roboto', color: 'rgba(47, 69, 98, 0.8)', flex: .4}}> ¿Dónde? </Text>
        <View style={{ flex: 2, backgroundColor: 'rgba(0,0,0,0)', alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{height: 200}} source={require('../../../imgs/app/logo.png')}/>
        </View>
        <View style={{marginTop: 20, flex: 1}}>
          <TouchableOpacity></TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    );
  }
}

const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  //... // more users here
 ]