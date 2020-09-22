import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity,SectionList } from 'react-native';

export default class Survey extends Component
{
    render(){
        return(
            <View>
                <Text>Hello Survey!</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
    },

})