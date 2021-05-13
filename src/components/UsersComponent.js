import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View,FlatList} from 'react-native';
import {getUsers} from "../api/API";
import UserComponents from "./UserComponents";

const UsersComponent = (props) => {
    const {navigation} = props;
    let [users, setUsers] = useState([]);
    console.log(users);


    useEffect(() => {
        async function fetchData() {
            let users = await getUsers();
            setUsers([...users]);
        }

        fetchData();
    }, []);

    return (
        <View>
            <FlatList data={users}
                      renderItem={({item}) => {
                          return <UserComponents item={item} nav ={navigation}/>;
                      }}
                      keuExtractor={item => ''+item.id}/>
        </View>
    );
}

export default UsersComponent;