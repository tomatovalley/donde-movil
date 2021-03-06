import React from 'react';
import { Text, View, TouchableOpacity , StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Constants, Location, Permissions } from 'expo';
import {  Card } from 'react-native-elements'


export default class UserGameScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: null,
      errorMessage: null
    }
  }

      /**
     * Esta funcion pregunta al usuario si está de acuerdo
     * que se use su localización y los datos de location se guardan en 
     * el state location
     */
    _getLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState({
          errorMessage: 'Permission to access location was denied',
        });
      }else{
          this.setState({checked: !this.state.checked})
          let location = await Location.getCurrentPositionAsync({});
          this.setState({location});
          alert(JSON.stringify(this.state.location.coords));
      }
  
    };
    render() {
        return (
          <View style={{ flex: 8,  alignItems: 'center' }}>
          <ScrollView>
            <View style={styles.opcContainer}> 

              <TouchableOpacity onPress={() => this.props.navigation.navigate('FreeMode',{puntuacion: 0})} activeOpacity={.7} >
                <Card
                  containerStyle={styles.opc}
                  titleStyle={{color: 'rgba(47, 69, 98, 1)'}}
                  title='LIBRE'
                  image={require('../../../imgs/app/fondo.jpg')}>
                  <Text style={{marginBottom: 10, color: 'rgba(47, 69, 98, 1)'}}>
                    Imagenes aleatorias de todo el mundo, suma la mayor cantidad de puntos.
                  </Text>
                </Card>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => this.props.navigation.navigate('RegionalMode')} activeOpacity={.7} >
                <Card
                  containerStyle={styles.opc}
                  titleStyle={{color: 'rgba(47, 69, 98, 1)'}}
                  title='REGIONAL'
                  image={require('../../../imgs/app/regional.jpg')}>
                  <Text style={{marginBottom: 10, color: 'rgba(47, 69, 98, 1)'}}>
                    Imagen regional de la semana, ¿Conoces tu región?
                  </Text>
                </Card>
              </TouchableOpacity>
              
            </View>            
          </ScrollView>
          </View>
        );
    }
}


const styles = StyleSheet.create({
  opcContainer: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    color: 'rgba(47, 69, 98, 1)',
    fontSize: 19,
    fontFamily: 'Roboto',
  },
  title: {
    color: 'rgba(47, 69, 98, 0.8)',
   fontSize: 20,
    margin: 20,
    fontFamily: 'Roboto',
  },
  opc: {
    backgroundColor: 'rgba(47, 69, 98, 0.2)',
    borderRadius: 8,
    marginTop: 20
  },

})