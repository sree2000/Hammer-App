import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import * as testFunctions from './test'
import axios from 'axios'

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

export default function App() {
  return (
    <View style={styles.container}>
      <Text>"This is the app"</Text>
      <StatusBar style="auto" />
      <Test></Test>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
