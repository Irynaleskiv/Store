import React from "react";
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { View, TouchableHighlight, Image } from "react-native";

const listItem = props => (
  <TouchableHighlight onPress={props.onItemSelected}>
    <View>
      <Card style={{backgroundColor: '#e2e2e2'}}>
        <CardItem style={{backgroundColor: '#e2e2e2'}}>
          <Left>
            <Body>
              <Text>{props.itemDetail.title ? props.itemDetail.title : props.itemDetail.detailInfo.title}</Text>
            </Body>
          </Left>
          <Right>
            <View style={{
              borderRadius: 50,
              backgroundColor: '#4286f4',
              width: 50,
              height: 50,
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text>{props.itemDetail.price ? props.itemDetail.price : props.itemDetail.detailInfo.price}</Text>
            </View>
          </Right>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: props.itemDetail.image ? props.itemDetail.image : props.itemDetail.detailInfo.image}} style={{ height: 400, flex: 1 }}/>
        </CardItem>
        <CardItem cardBody style={{marginRight: 10, marginLeft: 10, marginTop: 5, backgroundColor: '#e2e2e2'}}>
        </CardItem>
        <CardItem style={{backgroundColor: '#e2e2e2'}}>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Messages</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    </View>
  </TouchableHighlight>
);

export default listItem;