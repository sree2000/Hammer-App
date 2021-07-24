import React, { Component } from 'react';
import { Animated, Image, Platform, StyleSheet, View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { DrawerActions } from 'react-navigation'

import Tweet from './Tweet'




export default class Twitter extends Component {
    constructor(props) {
        super(props)
        
    }

    render() {

        return (
        <View style = {styles.container}>
                <FlatList
                    data={[
                        { first: 'Devin' , last : "B"},
                        { first: 'Dan', last: "B"},
                        { first: 'Dominic', last: "B" },
                        { first: 'Jackson', last: "B"},
                        { first: 'James', last: "B" },
                        { first: 'Joel', last: "B"},
                        { first: 'John', last: "B" },
                        { first: 'Jillian', last: "B"},
                        { first: 'Jimmy', last: "B" },
                        { first: 'Julie', last: "B" },
                    ]}
                    renderItem={({ item }) => <Tweet name={item}></Tweet>}
                />
                <Tweet name={{ first: "Arnav", last: "Parashar" }}></Tweet>
                <Tweet name={{ first: "Arnav", last: "Parashar" }}></Tweet>
                <Tweet name={{ first: "Arnav", last: "Parashar" }}></Tweet>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})