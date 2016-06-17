'use strict'

import React, { Component } from 'react';
import { AppRegistry, Navigator, StyleSheet, Text} from 'react-native'

import Login from './app/pages/Login'

class YourApp extends Component{


  renderScene(route, navigator){
    if(route.name == 'Login') {
      return <Login navigator={navigator} />
    }
  }

  render(){
    return(
      <Navigator
        initialRoute={{ name: 'Login' }}
        style={{ flex:1 }}
        renderScene={ this.renderScene } />
      );
    }

  }

  var styles = StyleSheet.create({
  })


AppRegistry.registerComponent('YourApp', () => YourApp);






// ______________________________________________________________________
//
// 'use strict'
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity
// } from 'react-native';
//
// const dataTest = [
//   {firstValue: 'hej'},
//   {secondValue: 'då'}
// ]
//
// const FBSDK = require('react-native-fbsdk');
// const {
//   LoginButton,
//   LoginManager,
//   AccessToken,
//   GraphRequest,
//   GraphRequestManager,
// } = FBSDK;
//
// // var Login = React.createClass({
// //   render: function() {
// //     return (
// //       <View>
// //         <LoginButton
// //           publishPermissions={["publish_actions"]}
// //           onLoginFinished={
// //             (error, result) => {
// //               if (error) {
// //                 alert("Login failed with error: " + result.error);
// //               } else if (result.isCancelled) {
// //                 alert("Login was cancelled");
// //               } else {
// //                 alert("Login was successful with permissions: " + result.grantedPermissions)
// //               }
// //             }
// //           }
// //           onLogoutFinished={() => alert("User logged out")}/>
// //       </View>
// //     );
// //   }
// // });
//
// class YourApp extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {output: '-init'},
//     console.log(dataTest)
//
//     this.token= 'Whatup!'
//   }
//
//
//
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <LoginButton
//           publishPermissions={["publish_actions"]}
//           onLoginFinished={
//             (error, result) => {
//               if (error) {
//                 alert("Login failed with error: " + result.error);
//               } else if (result.isCancelled) {
//                 alert("Login was cancelled");
//               } else {
//                 AccessToken.getCurrentAccessToken().then(
//                   (data) => {
//                     console.log(data)
//
//                     this.token = (data.accessToken.toString())
//                     // console.log(this.token)
//                   }
//                 )
//               }
//             }
//           }
//           onLogoutFinished={() => alert("User logged out")}/>
//
//           <TouchableOpacity style={styles.button} onPress={(event) => this._getName()}
//           underlayColor='#99d9f4'>
//           <Text style={styles.buttonText} >getName</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.button} onPress={(event) => this._loginMan()}
//           underlayColor='#99d9f4'>
//           <Text style={styles.buttonText} >loginMan</Text>
//           </TouchableOpacity>
//           <Text> Output:  {this.state.output}</Text>
//
//       </View>
//       // <View style={styles.container}>
//       //   <Text style={styles.welcome}>
//       //     Welcome to React Native!
//       //   </Text>
//       //   <Text style={styles.instructions}>
//       //     To get started, edit index.ios.js
//       //   </Text>
//       //   <Text style={styles.instructions}>
//       //     Press Cmd+R to reload,{'\n'}
//       //     Cmd+D or shake for dev menu
//       //   </Text>
//       // </View>
//     );
//   }
//
// //   FB.api(
// //   '/me',
// //   'GET',
// //   {},
// //   function(response) {
// //       // Insert your code here
// //   }
// // );
//
//   _loginMan() {
//     LoginManager.logInWithReadPermissions(['user_friends']).then(
//       function(result) {
//         if (result.isCancelled) {
//           alert('Login was cancelled');
//         } else {
//           AccessToken.getCurrentAccessToken().then(
//             (data) => {
//               console.log('before access token in loginManager')
//               console.log(data)
//               this.token= data.accessToken.toString()
//             }
//           )
//           // alert('Login was successful with permissions: '
//           //   + result.grantedPermissions.toString());
//         }
//       },
//       function(error) {
//         alert('Login failed with error: ' + error);
//       }
//     );
//   }
//
//   _getName() {
//
//
//
// //     var queryString = 'http://graph.facebook.com/facebook'
// //
// //     fetch(queryString)
// // .then((response) => response.text())
// // .then((responseText) => {
// //   console.log(responseText);
// // })
// // .catch((error) => {
// //   console.warn(error);
// // });
//
// // -------------------------------------------------
// console.log(0)
// this.token='hej'
// console.log(this.token)
// // console.log(1)
// // console.log(AccessToken.getCurrentAccessToken())
// // console.log(2)
//
// AccessToken.getCurrentAccessToken().then(
//   (data) => {
//     // console.log(data)
//     // console.log(8)
//
//     this.token = (data.accessToken.toString())
//     console.log(8)
//     console.log(this.token)
//     console.log(8)
//   }
// )
//
// // var temp= AccessToken.getCurrentAccessToken().toString()
// // console.log(temp)
//
//
// const responseCallback = ((error, result) => {
//           if (error) {
//                 response.ok = false
//                 response.error = error
//                 return(response)
//           } else {
//                 response.ok = true
//                 response.json = result
//                 return(response)
//           }
// })
//
// // the famous params object...
// const profileRequestParams = {
//             fields: {
//                 string: 'email'
//             }
// }
//
// const profileRequestConfig = {
//             httpMethod: 'GET',
//             version: 'v2.6',
//             parameters: profileRequestParams,
//             accessToken: this.token
// }
//
// const profileRequest = new GraphRequest(
//             '/me/picture',
//             null,
//             // profileRequestConfig,
//             this._responseInfoCallback,
// )
//
// // Start the graph request.
// new GraphRequestManager().addRequest(profileRequest).start();
//
// // ----------------------------------------------------
//
//     // const infoRequest = new GraphRequest(
//     //   '/v2.2/me',
//     //   null,
//     //   this._responseInfoCallback,
//     // );
//     //
//     // new GraphRequestManager().addRequest(infoRequest).start();
//   }
//
//   _
//
//   _responseInfoCallback(error: ?Object, result: ?Object) {
//     console.log(this.token)
//     if (error) {
//       console.log(error)
//       alert('Error fetching data: ' + error.toString());
//     } else {
//       console.log(result)
//       //alert('Success fetching data: ' + result.email);
//     }
//   }
//
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//
//   button: {
//   height: 20,
//   flexDirection: 'row',
//   backgroundColor: '#48BBEC',
//   borderColor: '#48BBEC',
//   borderWidth: 1,
//   borderRadius: 8,
//   marginBottom: 10,
//   justifyContent: 'center'
// },
// });
//
// AppRegistry.registerComponent('YourApp', () => YourApp);
