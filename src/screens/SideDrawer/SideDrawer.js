import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
import { Text, View, Dimensions, StyleSheet } from 'react-native';

export default class SideDrawer extends Component {

  render() {
    return (
      <View style={[ styles.container, {width: Dimensions.get("window").width * 0.8}]}>
        <Text>
          SideBar
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "white",
    flex: 1
  }
});