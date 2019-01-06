import React from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';

export default class RegisterScreen extends React.Component{
    state = {
        checked: false,
      };
    static navigationOptions ={
        title: 'Registro',
        
    };
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Nombre completo"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="Siguiente"
                        onSubmitEditing={() => this.correoInput.focus()}
                    />

                    <TextInput 
                        style={styles.input}
                        placeholder="Usuario ó Correo electrónico"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="Siguiente"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        ref = {(input)=> this.correoInput = input}
                        keyboardType="email-address"
                    />
                
                    <TextInput 
                        style={styles.input}
                        placeholder="Contraseña" 
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        secureTextEntry
                        returnKeyType="Siguiente"
                        onSubmitEditing={() => this.passwordInput2.focus()}
                        ref = {(input)=> this.passwordInput = input}
                    />

                    <TextInput 
                        style={styles.input}
                        placeholder="Confirmar contraseña" 
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        secureTextEntry
                        returnKeyType="Ir"
                        ref = {(input)=> this.passwordInput2 = input}
                    />
                    <CheckBox
                        center
                        title='Permito el acceso a mi ubicación'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.checked}
                    />

                </View>

                <TouchableOpacity style={styles.registerButton} >
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.FbkRefisterButton} onPress={() => this.props.navigation.navigate('Register')}>
                    <Ionicons name="logo-facebook" size={32} color="white" style= {{textAlign: 'center'}} />
                    <Text style={styles.buttonText}>Registarse con Facebook</Text>
                </TouchableOpacity>
                
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input:{
        height: 50,
        backgroundColor: 'rgba(63, 81, 181,0.3)',
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
        backgroundColor: 'rgba(63, 81, 181,0.8)',
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