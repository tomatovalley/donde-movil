import React from 'react';
import { Text, View, TouchableOpacity , Image, StyleSheet } from 'react-native';

export default class UserMainScreen extends React.Component {
    render() {
        return (
          <View style={{ flex: 1,  alignItems: 'center' }}>
            <Text>
              Home!
            </Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  formContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(47, 69, 98, 0.9)',

  }
})