import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import * as testFunctions from './test'
import axios from 'axios'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { WebView } from 'react-native-webview';
// import {Twitter } from './Twitter'
import Tweet from './Tweet';
import Twitter from './TwitterTest'
import { WebView } from 'react-native-webview';



export const hammerApi = axios.create({
  baseURL: 'http://localhost:5001/hammer-app-8749f/us-central1/app/',
  timeout: 1000
});


class Test extends Component {
  state = {
    textValue: 'Change me'
  }
  render() {
    return (
      <View style={{ paddingTop: 25 }}>
        <Text>{this.state.textValue}</Text>
        <Button
          onPress={() => {
            hammerApi.get('/test')
              .then(res => {
                console.log(res)
                this.setState({
                  textValue: res.data
                })
              })
          }}
          title="Click me!"
        />      </View>
    )
  }
}

class MyWeb extends Component {
  render() {
    
    return (
      <View style={{
        alignSelf: 'stretch',
        flex: 1,}}>
      <WebView
        source={{
            uri: 'https://twitter.com/buffalobills?lang=en'
        }}
        style={{ marginTop: 20 }}
      />
      </View>
    );
  }
}
function Feed() {
  // let JS = '<script type="text/javascript" src="https://platform.twitter.com/widgets.js"></script>';

  // let source = JS + '<blockquote class="twitter-tweet" data-lang="es"><p lang="en" dir="ltr">8 TED Talks to inspire projects with kids: <a href="https://twitter.com/TEDTalks/status/758116657638309896">https://twitter.com/TEDTalks/status/758116657638309896</a> <a href="https://twitter.com/TEDTalks/status/758116657638309896">pic.twitter.com/HMmYAeP7Km</a></p>&mdash; TED Talks (@TEDTalks) <a href="https://twitter.com/TEDTalks/status/758116657638309896">27 de julio de 2016</a></blockquote>';

  // let test = '<h1> Whats up</h1>'
  // return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
       {/* <Tweet name={{ first: "Arnav", last: "Parashar" }}></Tweet> */}
     <Twitter></Twitter>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MyWeb></MyWeb>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  console.log("Hello")
  console.log(Tweet)
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
