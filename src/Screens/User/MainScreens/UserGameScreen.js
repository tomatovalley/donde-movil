import React from 'react';
import { Text, View, TouchableOpacity , Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class UserGameScreen extends React.Component {
    render() {
        return (
          <View style={{ flex: 1,  alignItems: 'center', flex: 1 }}>
            <Text h2 style={styles.title}>Modos de juego</Text>
            <View style={styles.opcContainer}> 

              <TouchableOpacity>
                <View style={styles.opc}>
                  <Ionicons name="md-map" size={64} color="white" style= {{textAlign: 'center'}} />
                  <Text style={styles.text}>
                      Regional
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  title: {
    color: 'rgba(47, 69, 98, 0.9)',
   fontSize: 30,
    margin: 20,
  },
  opc: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(47, 69, 98, 0.9)',
    width: 300,
    height: 125,
    justifyContent: 'center',
    alignItems: 'center'
  }
})