import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
const UserComponents = (props) => {

    const {item, nav} = props;
    return (

        <View style={[style.box]}>
            <Text>{item.name} :name</Text>
            <Text>{item.email} :email</Text>
            <Button title={'user details'} onPress={() => {
                nav.navigate('UserDetails', {data: item});
            }}/>
        </View>
    );
}
export default UserComponents

let style = StyleSheet.create({
    box: {
        height: 100,
        backgroundColor: "silver",
        marginBottom: 3,
        textAlign: 'center'
    }
});