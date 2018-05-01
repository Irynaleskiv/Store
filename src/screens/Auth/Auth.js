import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';
import startMainTabs from "../MainTabs/startMainTabs";

class AuthScreen extends Component {

  loginHandler = () => {
    startMainTabs();
  };
  render() {
    return (
      <ImageBackground blurRadius={3} style={styles.bgImage} source={{uri: 'http://static.asiawebdirect.com/m/kl/portals/kuala-lumpur-ws/homepage/klshopping/pagePropertiesImage/kl-shopping.jpg.jpg'}}>
        <View style={styles.container}>
         <View style={styles.alignedLogo}>
           <Image source={{uri: 'https://image.ibb.co/eZb44H/bb716db6a9a1cf39183e81deafd0e39b.png'}}
                  style={{width: 200, height: 200}} />
         </View>
          <View style={styles.loginButton} >
            <Form>
              <Item stackedLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item stackedLabel last>
                <Label>Password</Label>
                <Input secureTextEntry={true} />
              </Item>
            </Form>
          </View>
          <Button title="Login" onPress={this.loginHandler}/>
       </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  },
  bgImage: {
    flex: 1
  },
  loginButton: {
    marginBottom: 20,
  },
  alignedLogo: {
    alignItems: "center"
  }
});

export default AuthScreen;