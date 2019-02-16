import React from 'react';
import { View, Text, Image, TextInput, KeyboardAvoidingView, StyleSheet, ActivityIndicator, TouchableOpacity, AsyncStorage } from 'react-native';
import GLOBALS from '../../../../globals';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Location } from 'expo';


export default class RegionalModeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: null,
      lives: null,
      Respuesta: '',
      isLoading: true,
      isImage: true,
      data: null,
      lat: null,
      long: null,
      mensaje: null
    };
    this._loadInitialState().done();
  }
  /***
   * con esta funcion se obtiene la locacion de usuario (longitud y latitud)
   */
  _getLocationAsync = async () => {
    let location = await Location.getCurrentPositionAsync({});
    let data = {lat: location.coords.latitude, long: location.coords.longitude};
    return data;
  };

  /**
   * Con esta funcion checa la imagen disponible(si es que hay)
   */
  _loadInitialState= async () => {
    this._getLocationAsync().then((data)=>{
      let lat = encodeURIComponent(data.lat);
      let long = encodeURIComponent(data.long);
      fetch(GLOBALS.BASE_URL+`getActiveImage?latitud=${lat}&longitud=${long}`, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }).then((response) => response.json())
      .then((res) => {
        if (res.tieneImagen) {
          this.setState({isLoading: false});
          this.setState({isImage: true});
          this.setState({data: res.img[0]});
          console.info(this.state.data);
          //alert(res[0].ImagesM1.URL);
          console.info(res.img[0].ImagesM1.URL);
          //alert(this.state.lat);
          //alert("hola");
          
      }else{
        console.info("se vino para acá")
        console.info(res.msg);
        this.setState({isLoading: false});
        this.setState({isImage: false});
        this.setState({mensaje: res.msg})
        //this.setState()
        // alert(JSON.stringify(res));
      }
      //console.info("ya no llego para aca o se qp");
      });
    })  
    
  }

  isThereAImage(){
    if(this.state.data != null){
      return <Image style={styles.image} source={{uri: this.state.data.ImagesM1.URL}}/> 
    }else {
      return <ActivityIndicator size="small" />
    }
  }

  showMessage(){
    if (this.state.mensaje != null) {
      return <Text style={styles.message}>{this.state.mensaje}</Text>
    } else {
      return <ActivityIndicator size="large" />
    }
  }
  
  render() {
    if (this.state.isLoading) {
      return(
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" />
          </View>
      )
    } else {
      if (this.state.isImage) {
        return (
          <KeyboardAvoidingView behavior ="padding" style={styles.maxContainer}>
            <View>
              <View style={styles.donde}>
                <Text style={styles.text}>¿Dónde?</Text>
              </View>
              <View style={styles.imageContainer}>
                { this.isThereAImage() }
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                 placeholder="Respuesta"
                 placeholderTextColor="#fff"
                 onChangeText={ (Respuesta) => this.setState({Respuesta}) }
                 returnKeyType="next"
                 />
              </View>
    
              <View style={styles.btnContainer}>
                <TouchableOpacity activeOpacity={.7} style={styles.btn} onPress={this.sendRespuesta}>
                  <Text style={{color: "#fff", textAlign: 'center'}}>SUBIR RESPUESTA</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        );  
      } else {  
        return(
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            { this.showMessage() }
          </View>
        )
      }
    }
    
  }

  /**
   * funcion para mandar la respuesta
   */
  sendRespuesta = async () =>{
    console.info("entro a la funcion, todo bien todo correcto");
    if(this.state.Respuesta != ""){
      console.info("si tiene algo el input");

      await AsyncStorage.getItem('usuario').then((data)=>{
        if(data !== null){
            console.info(data);
            fetch(GLOBALS.BASE_URL+`checkAnswer?ciudad_id=${this.state.data._id}&user_id=${data}&answer=${this.state.Respuesta}`, {
              method: "GET",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
            }).then((response) => response.json())
            .then((res) => {
              
              if (res.isAnswerCorrect) {
                this.props.navigation.replace('Result',{res,mode: 0});
                console.info("le atino numa");
              } else {
                this.props.navigation.replace('Result',{res, mode: 0});
                console.log("no le atino el meco");
              }
              console.info("lo que trae response: "+JSON.stringify(res));
            },(error)=>{
              console.error(error);
            });
        }else{
            console.info("Algo salio super bad");
        }
      });
      
    }else{
      alert("Escribe algo");
    }
    
  }
}


const styles = StyleSheet.create({
  maxContainer: {
    alignItems: 'center', 
    flex: 1
  },
  donde: {
    width: wp('84.5%'),
    height: hp('10%'),
    marginTop: 10, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 30, 
    fontFamily: 'Roboto', 
    color: 'rgba(47, 69, 98, 0.8)',
  },
  image:{
    width: wp('90%'),
    height: hp('40%'),
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5
  },
  input: {
    height: 50,
    backgroundColor: 'rgba(47, 69, 98, 0.3)',
    color: '#fff',
    borderRadius: 5,
  },
  inputContainer:{
    marginTop: 20
  } , 
  imageContainer:{
    marginBottom: 20,
    marginTop: 20
  },
  btn: {
    backgroundColor: 'rgba(47, 69, 98, 0.8)',
    paddingVertical: 15,
    marginBottom: 5,
    borderRadius: 5,
    width: wp('50%'),
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  }, 
  message: {

  }
});