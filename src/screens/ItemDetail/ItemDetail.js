import React, { Component } from 'react';
import { Text } from "native-base";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from 'react-redux';
import { deleteItem } from "../../store/actions/things";
import Icon from "react-native-vector-icons/Ionicons";

class ItemDetail extends Component {

  itemDeletedHandler = () => {
    this.props.onDeleteItem(this.props.selectedItem.key);
    this.props.navigator.pop({
      animated: true,
      animationType: 'fade'
    });
  };

  render() {

    return (

    <View style={{ height: 800, flex: 1 }}>
      <Image source={{uri: this.props.selectedItem.image ? this.props.selectedItem.image : this.props.selectedItem.detailInfo.image}} style={{ height: 700, flex: 1 }}/>
      <Text style={styles.descriptionTitle}>
        Description:
      </Text>
      <Text style={styles.description}>
        {this.props.selectedItem.description ? this.props.selectedItem.description : this.props.selectedItem.detailInfo.description}
      </Text>
      <View style={{ marginBottom: 10 }}>
        <TouchableOpacity onPress={this.itemDeletedHandler}>
          <View style={styles.deleteButton}>
            <Icon size={30} name="ios-trash" color="red" />
          </View>
        </TouchableOpacity>
      </View>
    </View>

    )
  }
}

const styles = StyleSheet.create({
  deleteButton: {
    alignItems: "center"
  },
  descriptionTitle: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 17,
    fontFamily:  "Times New Roman",
    fontWeight: 'bold'
  },
  description: {
    fontFamily:  "Times New Roman",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 17
  }
});


const mapDispatchToProps = dispatch => {
  return {
    onDeleteItem: (key) => dispatch(deleteItem(key))
  }
};

export default connect(null, mapDispatchToProps)(ItemDetail);