'use strict'

import React, { Component } from 'react';
import { AppRegistry, Navigator, StyleSheet, Text, View, TouchableOpacity} from 'react-native'

import StatusBarBackground from '../components/StatusBarBackground';
import Button from '../components/Button';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  GraphRequest,
  GraphRequestManager,
} = FBSDK;

class Login extends Component {

  constructor(props){
    super(props)
    // this.accessToken = ''
  }

  render(){
    return (
      <View style = {{backgroundColor: "whitesmoke"}}>
      <StatusBarBackground/>
      <View style = {[styles.container, styles.body]}>

      <LoginButton
        publishPermissions={["publish_actions"]}
        onLoginFinished={
          (error, result) => {
            if (error) {
              alert("login has error: " + result.error);
            } else if (result.isCancelled) {
              alert("login is cancelled.");
            } else {
              console.log('success!')
              // AccessToken.getCurrentAccessToken().then(
              //   (data) => {
              //     alert(data.accessToken.toString())
              //   }
              // )
            }
          }
        }
          onLogoutFinished={() => alert("User logged out")}/>
          <TouchableOpacity onPress = {(event) => this.testRequestGraphAPI()}
            underlayColor = '#99d9f4'>
            <Text> Get user information </Text>
          </TouchableOpacity>
      </View>
      </View>
    );
  }

//picture?redirect=0&height=200&width=200&type=normal
  testRequestGraphAPI(){
        const infoRequest = new GraphRequest(
          '/me/picture?redirect=0&height=200&width=200&type=normal',
          null,
          this._responseInfoCallback,
        );
    new GraphRequestManager().addRequest(infoRequest).start();
  }

  _responseInfoCallback(error: ?Object, result: ?Object) {
  if (error) {
    console.log('error')
    // alert('Error fetching data: ' + error.toString());
  } else {
    console.log(result)
    // alert('Success fetching data: ' + result.toString());
  }
}
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    alignItems: 'center',
    marginTop: 300
  },
})


module.exports = Login;
