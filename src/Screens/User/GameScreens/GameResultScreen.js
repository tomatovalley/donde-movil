import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class GameResultScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      puntuacion: null,
      
    }
  }
    render() {
      if (this.props.navigation.state.params.mode == 0) {
        if(this.props.navigation.state.params.res.isAnswerCorrect){
          return (
            <View style={styles.content}>
              
              <Text style={styles.headerTxt1}>¡Bien Hecho!</Text>
              <Text>Haz ganado: {this.props.navigation.state.params.res.value } puntos</Text>
              <TouchableOpacity activeOpacity={.7} style={styles.btn} onPress={() => this.props.navigation.goBack()}>
                <Text style={{color: "#fff", textAlign: 'center'}}>IR A INICIO</Text>
              </TouchableOpacity>
            </View>
          );
        }else{
          return( 
            <View style={styles.content}>
              <Text style={styles.headerTxt2}>¡Fallaste!</Text>
              <Text>Mejor suerte a la proxima</Text>
              <TouchableOpacity activeOpacity={.7} style={styles.btn} onPress={() => this.props.navigation.replace('RegionalMode')}>
                <Text style={{color: "#fff", textAlign: 'center'}}>REGRESAR</Text>
              </TouchableOpacity>
            </View>
          );
        }
      } else {
        if (this.props.navigation.state.params.res.correcto) {
          return (
            <View style={styles.content}>
              
              <Text style={styles.headerTxt1}>¡Bien Hecho!</Text>
              <Text>Haz ganado: {this.props.navigation.state.params.res.puntos } puntos</Text>
              <Text>Total de {this.props.navigation.state.params.points } puntos </Text>
              <TouchableOpacity activeOpacity={.7} style={styles.btn} onPress={() => this.props.navigation.replace('FreeMode',{puntuacion: this.props.navigation.state.params.points})}>
                <Text style={{color: "#fff", textAlign: 'center'}}>CONTINUAR</Text>
              </TouchableOpacity>
            </View>
          );
        }else{
          return( 
            <View style={styles.content}>
              <Text style={styles.headerTxt2}>¡Fallaste!</Text>
              <Text>Mejor suerte a la proxima</Text>
              <Text>Haz hecho un total de {this.props.navigation.state.params.points } puntos</Text>
              <TouchableOpacity activeOpacity={.7} style={styles.btn} onPress={() => this.props.navigation.goBack()}>
                <Text style={{color: "#fff", textAlign: 'center'}}>IR AL INICIO</Text>
              </TouchableOpacity>
            </View>
          );
        }
      }
      
    }
}

const styles = StyleSheet.create({
  content: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  headerTxt1: {
    marginTop: 20,
    fontSize: 30, 
    fontFamily: 'Roboto', 
    color: 'rgb(102, 153, 0)',
  },
  headerTxt2: {
    marginTop: 20,
    fontSize: 30, 
    fontFamily: 'Roboto', 
    color: 'rgb(255, 51, 51)',
  },
  btn: {
    backgroundColor: 'rgba(47, 69, 98, 0.8)',
    paddingVertical: 15,
    marginTop: 15,
    borderRadius: 5,
    width: wp('50%'),
  }

});