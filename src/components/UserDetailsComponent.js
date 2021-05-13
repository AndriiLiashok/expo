import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UserDetailsComponent = ({route, navigation})=> {
    let {params: {data}} = route;
    useEffect(()=>{
        navigation.setOptions({title:data.name})


    },[])
    return (
        <View>
            <Text>{data.name}</Text>
        </View>
    );
}
export default UserDetailsComponent;

