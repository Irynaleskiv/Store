import React, { Component } from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import { Container, Text, Tab, Tabs, TabHeading } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { addItem } from '../../store/actions/index';

import ListItem from "../../components/ListItem";
import CreateItem from "../../components/CreateItem";

class ThingsList extends Component {

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = (e) => {
    if (e.type === "NavBarButtonPress") {
      if (e.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  itemAddedHandler = (itemDetail) => {
    this.props.onAddItem(itemDetail);
  };

  itemSelectedHandler = (key) => {
    const selectedItem = this.props.things.find(item => {
      return item.key === key;
    });
    this.props.navigator.push({
      screen: "online-store.ItemDetail",
      title: selectedItem.title,
      passProps: {
        selectedItem: selectedItem
      }
    });
  };

  render() {

    return (
      <Container>
        <Tabs>
          <Tab style={{backgroundColor: '#0a0a29'}} heading={ <TabHeading style={{backgroundColor: '#0a0a29'}}><Icon name="shopping-basket" size={20} color="#fff"/><Text>Items</Text></TabHeading>}>
            <FlatList
              data={this.props.things}
              renderItem={({item}) => (
                <ListItem
                  onItemSelected={() => this.itemSelectedHandler(item.key)}
                  itemDetail={item}
                />
              )}
            />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: '#0a0a29'}}><Icon name="plus-circle" size={20} color="#fff"/><Text>Add Item</Text></TabHeading>}>
            <CreateItem
              onAddItem={this.itemAddedHandler}
            />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

const mapStateToProps = state => {
  return {
    things: state.things.things
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: (itemDetail) => dispatch(addItem(itemDetail))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ThingsList);