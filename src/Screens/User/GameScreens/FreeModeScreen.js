import React from 'react';
import { View, Text, Image, ScrollView,  StyleSheet, ActivityIndicator, TouchableOpacity, AsyncStorage } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import GLOBALS from '../../../../globals';

export default class FreeModeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      puntos: 0,
      message: null,
      isLoading: true,
      data: null,
      IsAnImage: false,
      isUser: null
    };
    this.obtenerImagenes().done();

  }
  /**
   * Esta funcion obtiene una imagen en caso de que haya una
   * Tambien obtiene las respuestas y mas datos sobre la imagen
   */
  obtenerImagenes =async () =>{
    await AsyncStorage.getItem('usuario').then((id)=>{
      if(id != null){
        this.setState({idUser: id},
          ()=>{
            fetch(GLOBALS.BASE_URL+`getImageGlobal?_id=${id}`, {
              method: "GET",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
            }).then((response) => response.json())
            .then((res)=>{
              if(res.rs != null){
                this.setState({data: {img: res.rs.URL, id: res.rs._id, resp: res.rs.Answers}},
                  ()=>{
                    this.setState({isLoading: false});
                    this.setState({IsAnImage: true});
                    console.info(this.state.data);
                  });
                
              }else{
                console.info("no hay imagenes, por lo tanto se recibio un mensaje");
                this.setState({message: res.msg},()=>{
                  this.setState({isLoading: false});
                  this.setState({IsAnImage: false});
                });
                
              }
            });
          })
      }else{
        alert("Ha ocurrido un error");
        console.error("Ha ocrrido un error");
        this.props.navigation.goBack();
      }
    })
  }

  /**
   * Esta funcion compara si ya se logó la conexion y se obtuvieron los datos para ser 
   * mostrados ( la imagen, id, etc)
   */
  showImage(){
    if(this.state.data != null){
      return <Image style={styles.image} source={{uri: this.state.data.img}}/> 
    }else{
      return <ActivityIndicator size="small" />
    }
  }

  /**
   * Con esta funcion se verifican y muestran las respuestas
   */
  displayButtons(){
    if(this.state.data.resp != null){
      return this.state.data.resp.map((respuesta)=>{
        console.info(respuesta);
        return(
          <TouchableOpacity activeOpacity={.7} style={styles.btn} onPress={() => this.checkAnswer({respuesta})}>
            <Text style={{color: "#fff", textAlign: 'center'}}>{respuesta}</Text>
          </TouchableOpacity>
        );
        
      })
      
    }else{
      console.error("no hy respuestas");
      return <Text>No hay Respuestas bro</Text>
    }

  }
  /**
   * Esta funcion sirve para verificar la respuesta
   * para comparar si la opcion que seleccionó es la correcta
   * @param {String} respuesta es el texto que tiene  la respuesta
   */
  checkAnswer = async (respuesta) =>{
    //console.info(respuesta.respuesta);
    fetch(GLOBALS.BASE_URL+`checkAnswerGlobal?_id=${this.state.data.id}&user_id=${this.state.idUser}&respuesta=${respuesta.respuesta}`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
    .then((res)=>{
      if(res.correcto){
        //console.info(res);
        this.props.navigation.replace('Result',{res, mode: 1, points: (this.props.navigation.state.params.puntuacion + res.puntos)});
      }else{
        //console.info(res);
        this.props.navigation.replace('Result',{res, mode: 1, points: this.props.navigation.state.params.puntuacion});
      }
      //console.info("esto tiene RES: "+JSON.stringify(res));
    });
  }
  /**
   * esta funcion hace que se muestre un mensaje en caso de que haya uno
   */
  showMessage(){
    //console.info("Esta entrando a la funcion");
    if (this.state.message != null) {
      console.info("Mensaje en la funcion: "+this.state.message);
      return <Text>{this.state.message}</Text>
    } else {
      return <ActivityIndicator size="large" />
    }
  }

  /**
   * Esta funcion sirve para mostar los botones dependiendo del texto
   */
  showButton(){
    console.info("Esta entrando a la funcion");
    if (this.state.message != null) {
      if (this.props.navigation.state.params.puntuacion > 0) {
        console.info("entró al if");
        return (
          <TouchableOpacity activeOpacity={.7} style={styles.btnMSG} onPress={() => this.props.navigation.replace('Result',{mode: 2, points: this.props.navigation.state.params.puntuacion})}>
              <Text style={{color: "#fff", textAlign: 'center'}}>IR AL RESULTADO</Text>
          </TouchableOpacity>

        );
      } else {
        console.info("no entro al if");
        return (
          <TouchableOpacity activeOpacity={.7} style={styles.btnMSG} onPress={() => this.props.navigation.goBack()}>
              <Text style={{color: "#fff", textAlign: 'center'}}>IR AL INICIO</Text>
          </TouchableOpacity>
        );
      }
    } else {
      return <ActivityIndicator size="large" />
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      )
    }else{
      if(this.state.IsAnImage){
        return (
          <ScrollView>
            <View style={styles.maxContainer}>
          
              <View style={styles.donde}>
                <Text style={styles.text}>¿Dónde?</Text>
              </View>
              <View style={styles.imageContainer}>
                {this.showImage()}
              </View>
    
              <View style={styles.btnContainer}>
                {this.displayButtons()}
              </View>
              
            </View>
          </ScrollView>
        );
      }else{
        return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {this.showMessage()}
          {this.showButton()}
        </View>
        )
      }
      
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
  imageContainer:{
    marginBottom: 10,
    marginTop: 20,
    
  },
  btn: {
    backgroundColor: 'rgba(47, 69, 98, 0.8)',
    paddingVertical: 15,
    marginBottom: 5,
    borderRadius: 5,
    width: wp('75%'),
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: wp('95%'),
    height: hp('35%'),
  },
  btnMSG: {
    backgroundColor: 'rgba(47, 69, 98, 0.8)',
    paddingVertical: 15,
    marginTop: 7,
    borderRadius: 5,
    width: wp('75%'),
  },
 });