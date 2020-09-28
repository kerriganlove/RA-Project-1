//App.js
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartWindow from './StartWindow';
import Survey from './Survey';

export default class App extends Component
{
  render() {
    return(
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName = "StartWindow">
      <Stack.Screen name="StartWindow" component={StartWindow} />
      <Stack.Screen name="SurveyWindow" component={Survey} />
    </Stack.Navigator>
  );
}