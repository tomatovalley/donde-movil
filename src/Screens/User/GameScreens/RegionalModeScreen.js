import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import GLOBALS from '../../../../globals';
export default class RegionalModeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: null,
      lives: null,
      counter: null,
      txtRespuesta: '',
      Respuesta: '',
      Location: null,
      errorMessage: null
    };
  }

  
  getRegionalImage = () =>{
    fetch(GLOBALS.BASE_URL+'getActiveImage',{
      //fetch('http://172.16.13.147:3001/api/getActiveImage',{
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              latitud: this.state.username,
              longitud: this.state.password
          })
      })
      .then((response) =>  response.json())
      .then((res) => {
          if (res.success === true) {
              this.setState({loading: false});
              AsyncStorage.setItem('usuario', res.user);
              this.props.navigation.replace('Home');
          }else{
              this.setState({loading: false});
              Alert.alert(
                  'Alerta!',
                  'Usuario o contraseña no validos',
                  [
                      {text: 'OK'},
                  ],
                  { cancelable: false }
              );
          }
      }).done();
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
