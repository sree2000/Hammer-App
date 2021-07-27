import React, { Component } from 'react';
import { Dimensions, Image, Platform, StyleSheet, View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios'

import Tweet from './Tweet'

export const hammerApi = axios.create({
    baseURL: 'http://localhost:5001/hammer-app-8749f/us-central1/app/',
    timeout: 1000
});


export default class Twitter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tweets: []
        };
    }

    componentDidMount() {
        hammerApi.get('/test')
            .then(res => {
                var data = res.data
                var current_tweets = []
                for(var tweet of data ) {
                    console.log(tweet)
                    var tweet_info = {name: {first: "Buffalo", last: "Bills"}, 
                                handle: "BuffaloBills", 
                                twit: tweet["text"]}
                    current_tweets.push(tweet_info)
                }
                this.setState({ tweets: current_tweets });
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        return (
        <View style = {styles.container}>
                <FlatList style={styles.innerContainer}
                    data={this.state.tweets}
                    renderItem={({ item }) => <Tweet name={item.name} handle={item.handle} twit={item.twit}></Tweet>}
                />
                {/* <Tweet name={{ first: "Arnav", last: "Parashar" }}></Tweet>
                <Tweet name={{ first: "Arnav", last: "Parashar" }}></Tweet>
                <Tweet name={{ first: "Arnav", last: "Parashar" }}></Tweet> */}
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
    },
    innerContainer: {
        width: Dimensions.get('window').width*0.75

    }
})