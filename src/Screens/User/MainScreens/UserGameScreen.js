import React from 'react';
import { Text, View, TouchableOpacity , Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class UserGameScreen extends React.Component {
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