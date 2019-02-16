import React from 'react';
import { Text, View, ActivityIndicator, AsyncStorage, StyleSheet } from 'react-native';
import GLOBALS from '../../../../globals';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class UserTopsScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
    }
    this.obtenerTops().done()
  }

  obtenerTops = async ()=>{

    await AsyncStorage.getItem('usuario').then((data)=>{
      console.info("usuario ID:"+data);
      this.setState({isLoading: false});
    })
  }
    render() {
      if (this.state.isLoading) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
             <ActivityIndicator size="large" />
          </View>
        );
      } else {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>no es true</Text>
          </View>
        );
      }
        
    }
}
