import React from 'react';
import { Text, View, TouchableOpacity , Image, StatusBar } from 'react-native';

export default class GameResultScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      puntuacion: null,
      
    }
  }
    render() {
      if(this.props.navigation.state.params.res.isAnswerCorrect){
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Le atino</Text>
            <Text>{this.props.navigation.state.params.res.value}</Text>
            
          </View>
        );
      }else{
        return( <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>no le atino</Text>
          </View>)
      }
        
    }
}