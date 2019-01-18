import React from 'react';
import { AsyncStorage  } from 'react-native';

export default class LoginConnection extends React.Component{
    constructor(props){
        super(props);
    }
    doLogin = (userData)=>{
        let msg = ("hola ");
        return msg;/*fetch('URL/users',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                User: userData.username,
                Password: userData.state.password
            })
        })
        .then((response) =>  response.json())
        .then((res) => {
            if (res.success === true) {
                AsyncStorage.setItem('usuario', res.user);
                this.props.navigation.navigate('Home');
            }else{
                alert(res.message);
            }
        }).done(); */
    }
}