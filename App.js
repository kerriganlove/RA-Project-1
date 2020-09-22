//App.js
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native';
import Survey from './Survey';
import StartWindow from './StartWindow';


export default class App extends Component
{
  render() {
    return(
      <View style ={{flex : 1}}>
        <StartWindow />
      </View>
    );
  }
}
