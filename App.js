//App.js
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native';


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.settingView}>
          <TouchableOpacity>
            <Image source={require('./icon/setting.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.ddayView}>

        </View>
        <View style={styles.chatView}>

        </View>
      </View>
    );
  }
}