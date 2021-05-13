import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import PostComponent from "./PostComponent";
import TemplateComponent from "./TemplateComponent";

const Drover = createDrawerNavigator();

const PostDrover = (props)=> {

    return (
        <Drover.Navigator>
            <Drover.Screen name="Post" options={{title: 'posts'}} component={PostComponent}/>
            <Drover.Screen name="Template" options={{title: 'template'}} component={TemplateComponent}/>
        </Drover.Navigator>
    );
}
export default PostDrover
