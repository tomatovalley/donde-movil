import React from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, Dimensions, Text  } from 'react-native';
import LoginForm from './LoginForm';

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
                    <LoginForm navigate={navigation}/>
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
    }

});