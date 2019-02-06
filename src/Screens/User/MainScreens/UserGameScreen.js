import React from 'react';
import { Text, View, TouchableOpacity , StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Constants, Location, Permissions } from 'expo';


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
            <View style={styles.titleContainer}>
              <Text h2 style={styles.title}>Modos de juego</Text>
            </View>
            
            <View style={styles.opcContainer}> 

              <TouchableOpacity onPress={() => this.props.navigation.navigate('RegionalMode')}>
                <View style={styles.opc}>
                  <Ionicons name="md-map" size={64} color="white" style= {{textAlign: 'center'}} />
                  <Text style={styles.text}>
                      Regional
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('FreeMode')}>
                <View style={styles.opc}>
                  <Ionicons name="md-globe" size={64} color="white" style= {{textAlign: 'center'}} />
                  <Text style={styles.text}>
                      Libre
                    </Text>
                </View>
              </TouchableOpacity>
            </View>            
            
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
    color: '#fff',
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
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(47, 69, 98, 0.8)',
    width: 300,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    flex: .5
  }
})