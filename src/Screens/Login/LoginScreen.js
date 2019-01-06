import React from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, Dimensions, Text, TouchableOpacity, TextInput  } from 'react-native';

export default class LoginScreen extends React.Component{
    static navigationOptions ={
        header: null
    }
    render(){
        return(
            <KeyboardAvoidingView behavior ="padding" style={styles.container}>
            <Image style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height, position: 'absolute', top: 0, left: 0 }} source={require('../../imgs/app/fondo.jpg')}/>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../imgs/app/dondeBlanco.png')}/>
                </View>

                <View style ={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            style={styles.input}
                            placeholder="Usuario ó Correo electrónico"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            returnKeyType="Siguiente"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            keyboardType="email-address"
                        />

                        <TextInput 
                            style={styles.input}
                            placeholder="Contraseña" 
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            secureTextEntry
                            returnKeyType="Ir"
                            ref = {(input)=> this.passwordInput = input}
                        />
                    </View>
                    

                    <TouchableOpacity style={styles.loginContainer} >
                        <Text style={styles.buttonText}>Iniciar Sesión</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginContainer} onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={styles.buttonText}>Registarse</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.forget}>Olvidé mi contraseña</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    logo:{
        width: 230,
        height: 220,
        opacity: .8
    },
    formContainer: {
        justifyContent: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(255,255,255,0.8)'
    },
    input: {
        height: 50,
        backgroundColor: 'rgba(63, 81, 181,0.3)',
        color: '#fff',
        paddingHorizontal: 10,
        paddingLeft: 5,
        marginBottom: 5,
        borderRadius: 5

    },
    forget: {
        color: 'rgba(63, 81, 181,0.6)',
        paddingTop: 15,
    },
    inputContainer: {
        marginBottom: 20,
    },
    loginContainer: {
        backgroundColor: 'rgba(63, 81, 181,0.6)',
        paddingVertical: 15,
        marginBottom: 5,
        borderRadius: 5
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff'
    }

});