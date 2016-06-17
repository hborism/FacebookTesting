import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class StatusBarBackground extends Component {
  render() {
    return (
      <View style = {[styles.statusBarBackground]}>
      </View>
    )
  }
}

var styles = StyleSheet.create({

  statusBarBackground: {
    height: 20,
    backgroundColor: "dodgerblue"
  }
})

module.exports = StatusBarBackground;
