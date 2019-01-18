import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {createStackNavigator, createAppContainer, DrawerActions} from 'react-navigation';

//pantallas
import LoginScreen from './src/Screens/Login/LoginScreen';
import RegisterScreen from './src/Screens/Register/RegisterScreen';
import TabsContainer from './src/Screens/User/TabsContainer';

export default class App extends React.Component {
  render(){
    return(
      <App1/>
    )
  }
}

const MenuImage = ({navigation}) => {
  if(!navigation.state.isDrawerOpen){
      return <Ionicons name="md-menu" color="white" size={28} style={{marginLeft: 10}}/>
  }else{
      return <Ionicons name="md-arrow-round-back" color="white" size={28} style={{marginLeft: 10}}/>
  }
}
 
const AppStackNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Register: {screen: RegisterScreen},
  Home: { screen: TabsContainer,
          navigationOptions: ({navigation}) => ({
            title: '¿Dónde?' ,
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'rgba(47, 69, 98, 1)'
            },
            headerLeft: <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
                          <MenuImage name="md-menu" navigation={navigation}/>
                        </TouchableOpacity>,
          })
        }
});

const App1 = createAppContainer(AppStackNavigator);

//export default App;
  


