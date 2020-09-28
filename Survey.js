import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity,SectionList } from 'react-native';

export default class Survey extends Component
{
    render(){
        return(
            <View style = { styles.container }>
                <Text>Hello Survey!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
    },

})