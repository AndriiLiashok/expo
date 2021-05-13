import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getUser, getUsers} from "./src/api/API";
import UsersComponent from "./src/components/UsersComponent";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import PostComponent from "./src/components/PostComponent";
import UserDetailsComponent from './src/components/UserDetailsComponent'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import PostDrover from "./src/components/PostDrover";
let BottomTagNavigation = createBottomTabNavigator();
export default function App() {
    return (
       <NavigationContainer>
            <BottomTagNavigation.Navigator tabBarOptions={{tabStyle:{
                justifyContent:"center",
                    alignItems: "center",

                }}}>
                <BottomTagNavigation.Screen name={'users'} component={UsersComponent}/>
                <BottomTagNavigation.Screen name={'posts'} component={PostDrover}/>
            </BottomTagNavigation.Navigator>
       </NavigationContainer>
    );
}

