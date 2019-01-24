import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

export default class RegionalModeScreen extends React.Component {
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
      <View style={{alignItems: 'center', flex: 4}}>
        <Text style={{marginTop: 20, fontSize: 30, fontFamily: 'Roboto', color: 'rgba(47, 69, 98, 0.8)', flex: .4}}> ¿Dónde? </Text>
        <View style={{ flex: 2, backgroundColor: 'rgba(0,0,0,0)', alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{height: 200}} source={require('../../../imgs/app/logo.png')}/>
        </View>
        <View style={{marginTop: 20, flex: 1}}>
          <TextInput 
            style={{height: 50, width: 290, alignItems: 'center', backgroundColor: 'rgba(47, 69, 98, 0.3)', color: '#fff', paddingHorizontal: 10, paddingLeft: 5, marginBottom: 5, borderRadius: 5}}
            placeholder="Respuesta" 
            onChangeText={ (txtRespuesta) => this.setState({txtRespuesta}) }
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="done"
          />
        </View>
      </View>
    );
  }
}
