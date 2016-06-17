'use strict';
import React, { Component } from 'react';
import {AppRegistry, Text, View, TouchableOpacity, StyleSheet} from 'react-native';

class Button extends Component {

  render(){
    return(
      <View >
        <TouchableOpacity underlayColor={"#E8E8E8"}
          onPress={this.props.onpress}
          style = {styles.button}
          >
          <View>
            <Text> Get information from user</Text>
            </View>
          </TouchableOpacity>
        </View>
    )
  }
}

var styles = StyleSheet.create({

  container: {
    flex: 1
  },

  button: {
    marginTop: 10,
    padding: 15
  },

  button_text: {
    color: '#0485A9',
    fontSize: 16
  }


})


module.exports = Button;
