import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Container, Button, Text, Header, Title, Content, Icon, Right, Body, Left, Picker, Form, Item as FormItem  } from 'native-base';
const Item = Picker.Item;

export default class CreateItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      price: '',
      title: '',
      description: '',
      imageUrl: '',
      key: 0
    };
  }

  handleInputChange = (text, inputField) => {
    this.setState({
      [inputField]: text})
  };

  addNewItem = () => {
    this.props.onAddItem({
      title: this.state.title,
      description: this.state.description,
      image: 'http://www.uniqueinteriorsaberdare.co.uk/images/AAAAA/black-levis-men-down-davidson-parkas-17YX.jpg',
      price: this.state.price,
      key: Math.random()
    });
    this.setState({
      title: '',
      description: '',
      price: '',
      key: 0
    })
  };

  render() {

    return (
      <Container>
        <TextInput
          placeholder="Enter the title"
          style={{height: 60}}
          onChangeText={(text) => this.handleInputChange(text, 'title')}
          value={this.state.title}
        />
        <TextInput
          placeholder="Enter the description"
          style={{height: 150}}
          onChangeText={(text) => this.handleInputChange(text, 'description')}
          value={this.state.description}
        />
          <TextInput
            style={{height: 60}}
            placeholder="Enter the price"
            onChangeText={(text) => this.handleInputChange(text, 'price')}
            value={this.state.price}
          />
          <Button onPress={this.addNewItem} full info>
            <Text>Add Item</Text>
          </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});
