import React from 'react';
import { View, Image } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer, createDrawerNavigator  } from 'react-navigation';
import DrawerScreen from './DrawerScreen';

//Pantallas
import UserHomeScreen from './MainScreens/UserHomeScreen';
import UserTopsScreen from './MainScreens/UserTopsScreen';
import UserGameScreen from './MainScreens/UserGameScreen';


//Aqui se crean las tabs
const Tabs = createMaterialTopTabNavigator({
  Inicio: UserHomeScreen,
  Juego: UserGameScreen,
  Tops: UserTopsScreen,
},{
  tabBarOptions: {
      activeTintColor: 'rgba(47, 69, 98, 1)',
      inactiveTintColor: 'gray',
      style: {
          backgroundColor: 'rgba(47, 69, 98, 0.2)',
      },
      indicatorStyle: {
          backgroundColor: 'rgba(47, 69, 98, 1)',
      },
  }
});

//Aqui se crea el Drawer(el menu)
const AppDrawerNavigator = createDrawerNavigator({
  Home:{
      screen: Tabs
  }
},{
  initialRouteName: 'Home',
  contentComponent: DrawerScreen,
  drawerWidth: 300
});

const MenuImage = ({navigation}) => {
  if(!navigation.state.isDrawerOpen){
      return <Image source={require('../../imgs/menu-button.png')}/>
  }else{
      return <Image source={require('../../imgs/left-arrow.png')}/>
  }
}



//Aqui se exporta los tabs y drawer como un contenedor
export default createAppContainer(AppDrawerNavigator);