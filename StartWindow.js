import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native';
import Survey from './Survey';
//import { NavigationContainer } from '@react-navigation/native'

export default class StartWindow extends Component
{
    render(){
        return(
            <View style = {styles.containers}>
                <Title />
                <ButtonGroup />
            </View>
        )
    }
}

class Title extends Component
{
  render() {
    return(
      <View style={styles.Title}>
        <Text style = {{fontSize : 30}}>OPIC 모의 구현</Text>
        <Text style = {{fontSize : 20}}>I will be taken my grade IH by Ava!</Text>
        <Text style = {{fontSize : 20}}>Show me what you got!!</Text>
      </View>
    );
  }
}
class ButtonGroup extends Component
{
  render() {
    return(
        <View style={styles.ButtonGroup}>
          <TouchableOpacity
            style={styles.button}> // onPress = {()=> this.props.navigation.navigate(<Survey />)} //
            <Text style={{ color : '#ffffff' }}>Start from Survey</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress = {()=> this.setState({val : 2})}>
            <Text style={{ color : '#ffffff' }}>Start from OPICtest</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress = {()=> this.setState({val : 3})}>
            <Text style={{ color : '#ffffff' }}>Show about Question List</Text>
          </TouchableOpacity>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  containers : {
    flex : 1,
    flexDirection : 'column',
  },
  ButtonGroup : {
    flex : 4,
    alignItems : "center",
    justifyContent : "space-around",
    backgroundColor : '#FFFFFF',
  },
  Title : {
    flex : 3,
    height : 200,
    fontSize : 20,
    alignItems : "center",
    justifyContent : "space-around",
    backgroundColor : '#FFFFFF',
  },
  button : {
    width : 230,
    height : 80,
    fontSize : 20,
    alignItems : "center",
    justifyContent : "center",
    alignContent : "center",
    backgroundColor : '#B2C1CE',
    borderColor : '#FFFFFF',
    borderWidth : 1,
  }
})

const stack = createStackNavigator();