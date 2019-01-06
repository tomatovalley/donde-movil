import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class MainScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  static navigationOptions ={
    
  }
  
  render() {
    return (
      <Text>Aqui está la pagina principal del usuario</Text>
    );
  }
}