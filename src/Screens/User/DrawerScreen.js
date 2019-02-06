import React, {Component} from 'react';
import {NavigationActions, DrawerItems} from 'react-navigation';
import PropTypes from 'prop-types';
import {ScrollView, Text, View, AsyncStorage} from 'react-native';
import { DrawerActions } from 'react-navigation';
import styles from '../../styles/styles';

class DrawerScreen extends Component {
  constructor(props){
    super(props);
  }
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }
  cerrarSesion = () =>{
    AsyncStorage.removeItem('usuario').then(()=>{
      this.props.navigation.dispatch(DrawerActions.closeDrawer());
      this.props.navigation.replace('Login');
    })
    
  }
  render () {
    return (
      <View>
        <ScrollView>
          <View style={styles.menuItem}>
            <Text onPress={this.navigateToScreen('Juego')}>
              Juego
            </Text>
          </View>
          <View style={styles.menuItem}>
            <Text onPress={this.navigateToScreen('Tops')}>
              Tops
            </Text>
          </View>
          <View style={styles.menuItem}>
            <Text onPress={this.cerrarSesion}>
              Cerrar Sesion
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

export default DrawerScreen;
/*
<View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Inicio')}>
                Inicio
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Juego')}>
               Juego
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Tops')}>
              Tops
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.cerrarSesion}>
              Cerrar Sesion
              </Text>
            </View>*/