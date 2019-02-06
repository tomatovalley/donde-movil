import React from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { Constants, Location, Permissions } from 'expo';
import GLOBALS from '../../../globals';

export default class RegisterScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked: false,
            name: '',
            user: '',
            email: '',
            password: '',
            password2: '',
            location: null,
            errorMessage: null
        };
    }
    
    
    static navigationOptions ={
        title: 'Registro',
        
    };

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
            let lat = location.coords.latitude;
            let long = location.coords.longitude;
            let extendedLocation = await Location.reverseGeocodeAsync({latitude: lat,longitude: long})
            this.setState({location});
            alert(JSON.stringify(extendedLocation[0]));
        }
    
      };
    render(){

        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Nombre completo"
                        placeholderTextColor="rgba(255,255,255,1)"
                        onChangeText={ (name) => this.setState({name}) }
                        returnKeyType="next"
                        onSubmitEditing={() => this.user.focus()}
                    />

                    <TextInput 
                        style={styles.input}
                        placeholder="Usuario"
                        placeholderTextColor="rgba(255,255,255,1)"
                        onChangeText={ (user) => this.setState({user}) }
                        returnKeyType="next"
                        onSubmitEditing={(user) => this.correoInput.focus()}
                    />

                    <TextInput 
                        style={styles.input}
                        placeholder="Correo electrónico"
                        placeholderTextColor="rgba(255,255,255,1)"
                        returnKeyType="next"
                        onChangeText={ (email) => this.setState({email}) }
                        onSubmitEditing={() => this.passwordInput.focus()}
                        ref = {(input)=> this.correoInput = input}
                        keyboardType="email-address"
                    />
                
                    <TextInput 
                        style={styles.input}
                        placeholder="Contraseña" 
                        placeholderTextColor="rgba(255,255,255,1)"
                        secureTextEntry
                        onChangeText={ (password) => this.setState({password}) }
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput2.focus()}
                        ref = {(input)=> this.passwordInput = input}
                    />

                    <TextInput 
                        style={styles.input}
                        placeholder="Confirmar contraseña" 
                        placeholderTextColor="rgba(255,255,255,1)"
                        onChangeText={ (password2) => this.setState({password2}) }
                        secureTextEntry
                        returnKeyType="done"
                        ref = {(input)=> this.passwordInput2 = input}
                    />
                    <CheckBox
                        center
                        title='Permito el acceso a mi ubicación'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.checked}
                        onPress={this._getLocationAsync}
                    />

                </View>

                <TouchableOpacity style={styles.registerButton} onPress={this.doRegister}>
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.FbkRefisterButton} onPress={this.doFbRegister}>
                    <Ionicons name="logo-facebook" size={32} color="white" style= {{textAlign: 'center'}} />
                    <Text style={styles.buttonText}>Registarse con Facebook</Text>
                </TouchableOpacity>
                
            </KeyboardAvoidingView>
        );
    }

    doRegister = ()=>{
        if (this.state.name !== '' && this.state.email !== '' && this.state.checked && this.state.password !== '' && this.state.password2 !== '') {
            if (this.state.password !== this.state.password2) {
                alert('Las contraseñas no coinciden.');
            } else {
                fetch(GLOBALS.BASE_URL+'doRegister',{
                //fetch('http://172.16.13.147:3001/api/doRegister',{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        Name: this.state.name,
                        Email: this.state.email,
                        User: this.state.user,
                        Password: this.state.password, 
                        UserType: 3,
                        City: 'Mexico'
                    })
                })
                .then((response) =>  response.json())
                .then((res) => {
                    if (res.success === true) {
                        AsyncStorage.setItem('usuario', res.user);
                        alert("Felicidades",res);
                        this.props.navigation.replace('Home');
                    }else{
                        alert(res.message);
                    }alert(res);
                }).done();
            }
        }else{
            alert('Rellene todos los campos');
        }
    }

    doFbRegister = () =>{
        alert('se hará el registro con facebook');
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 2,
    },
    input:{
        height: 50,
        backgroundColor: 'rgba(47, 69, 98, 0.2)',
        color: '#fff',
        paddingHorizontal: 10,
        paddingLeft: 5,
        marginBottom: 5,
        borderRadius: 5
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff'
    },
    registerButton:{
        backgroundColor: 'rgba(47, 69, 98, 0.9)',
        paddingVertical: 15,
        marginBottom: 5,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10
    },
    FbkRefisterButton: {
        backgroundColor: 'rgba(63, 81, 181,0.7)',
        paddingVertical: 15,
        marginBottom: 5,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10
    },
    inputContainer: {
        margin: 15
    }
});