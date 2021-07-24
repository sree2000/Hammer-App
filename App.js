import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { WebView } from 'react-native-webview';
// import {Twitter } from './Twitter'
import Tweet from './Tweet';
import Twitter from './TwitterTest'

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
      <Text>Notifications!</Text>
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
