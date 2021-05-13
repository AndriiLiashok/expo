import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getUser, getUsers} from "./src/api/API";
import UsersComponent from "./src/components/UsersComponent";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import PostComponent from "./src/components/PostComponent";
import UserDetailsComponent from './src/components/UserDetailsComponent'
let StackNavigation = createStackNavigator();
export default function App() {
    return (
       <NavigationContainer>
           <StackNavigation.Navigator>
               <StackNavigation.Screen name={'Users'} component={UsersComponent}/>
               <StackNavigation.Screen name={'Post'} component={PostComponent}/>
               <StackNavigation.Screen name={'UserDetails'} component={UserDetailsComponent}/>
           </StackNavigation.Navigator>
       </NavigationContainer>
    );
}

