import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text  } from 'react-native';


export default class LoginForm extends React.Component{
    constructor(props) {
		super(props);
	}
    render(){
        return(
            <View style={styles.container}>
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

                <TouchableOpacity style={styles.loginContainer} onPress={() => this.props.navigator.navigate('Register')}>
                    <Text style={styles.buttonText}>Registarse</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forget}>Olvidé mi contraseña</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
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