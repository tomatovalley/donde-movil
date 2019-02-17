import React from 'react';
import { Text, View, ActivityIndicator, AsyncStorage, StyleSheet } from 'react-native';
import GLOBALS from '../../../../globals';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class UserTopsScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      myInfo: null,
      message: null,
      isInfo: true,
      posiciones: null
    }
    this.obtenerTops().done()
  }

  obtenerTops = async ()=>{

    await AsyncStorage.getItem('usuario').then((data)=>{
      fetch(GLOBALS.BASE_URL+`getTops?_id=${data}`, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }).then((response) => response.json())
      .then((res)=>{
        if (res.success) {
          this.setState({myInfo: res.current_user},()=>{
            this.setState({posiciones: res.usuarios}, ()=>{
              this.setState({isLoading: false});
              this.setState({isInfo: true});
            }) 
          });
        } else {
          this.setState({message: res.msg}, ()=>{
            this.setState({isLoading: false});
            this.setState({isInfo: false});
          })
        }
        
        
      });
      //console.info("usuario ID:"+data);
      //this.setState({isLoading: false});
    })
  }
  

  /**
   * Esta funcion retorna 
   */
  showPositions(){
    if (this.state.posiciones != null) {
      let positionNuber = 0;
      return this.state.posiciones.map((usuario)=>{
        return(
          <View style={{flex: 1, flexDirection: "row", alignSelf: "center", borderBottomColor: 'black', borderBottomWidth: 1}}>
            <View style={styles.mpHeader}>
              <Text style={styles.txt}>{usuario.position}</Text>
            </View>

            <View style={styles.mpHeader} >
              <Text style={styles.txt}>{usuario.User}</Text>
            </View>

            <View style={styles.mpHeader} >
              <Text style={styles.txt}>{usuario.totalScore}</Text>
            </View>
        </View>
        );
        
      })
    } else {
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="small" />
      </View>
    }
  }

  /**
   * esta funcion muestra tu posicion aparte de las demas posiciones
   * (si es que trae datos el )
   */
  showProfile(){
    
    if (this.state.myInfo != null) {
      return (
        <View style={{flex: 1, flexDirection: "row", alignSelf: "center", borderBottomColor: 'black', borderBottomWidth: 1}}>
          <View style={styles.mpHeader}>
            <Text style={styles.txt}>{this.state.myInfo.position}</Text>
          </View>

          <View style={styles.mpHeader} >
            <Text style={styles.txt}>{this.state.myInfo.User}</Text>
          </View>

          <View style={styles.mpHeader} >
            <Text style={styles.txt}>{this.state.myInfo.totalScore}</Text>
          </View>
        </View>
      );
    } else {
      return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
             <ActivityIndicator size="small" />
        </View>
      );
    }
  }
  /**
   * esta funcion muestra un mensaje en caso de que no se haya hecho bien la consulta
   */
  showMessage(){
    if (this.state.message != null) {
      return <Text>{this.state.message}</Text>
    } else {
      return <ActivityIndicator size="large" />
    }
  }
    render() {
      if (this.state.isLoading) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
             <ActivityIndicator size="large" />
          </View>
        );
      } else {
        if (this.state.isInfo) {
          return (
            <View style={styles.container}>
              
              <View style={styles.tableContainer}>
                <View style={{flex: 1, flexDirection: "row", alignSelf: "center"}}>
                  <View style={styles.tableHeader}>
                    <Text style={styles.textHeader}>Posición</Text>
                  </View>
  
                  <View style={styles.tableHeader} >
                    <Text style={styles.textHeader}>Usuario</Text>
                  </View>
  
                  <View style={styles.tableHeader} >
                    <Text style={styles.textHeader}>Puntos</Text>
                  </View>
                </View>
                {this.showPositions()}
  
              </View>
  
              <View style={styles.myPositionContainer}>
                <View style={{flex: 1, flexDirection: "row", alignSelf: "center"}}>
                  <View style={styles.myPositionHeader}>
                    <Text style={styles.textHeader}>Mi posición</Text>
                  </View>
                </View>
                {this.showProfile()}
              </View>
  
            </View>
          );
        } else {
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
             {this.showMessage()}
          </View>
        }
        
      }
        
    }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    flex: 1
  },
  myPositionContainer:{
    width: wp('90%'),
    height: hp('10%'),
    marginTop: 10, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  myPosition: {

  },
  tableContainer:{
    marginTop: 30,
    width: wp('90%'),
    height: hp('55%'),
    marginBottom: 30
    
  },
  textHeader:{
    color: '#fff',
  },
  myPositionHeader: {
    height: hp('5%'),
    flex: 1, 
    backgroundColor: 'rgba(47, 69, 98, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableHeader: {
    height: hp('5%'),
    flex: 1, 
    backgroundColor: 'rgba(47, 69, 98, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: 'rgba(47, 69, 98, 1)',
  },
  mpHeader: {
    height: hp('5%'),
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});