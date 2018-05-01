import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

const personMessage = [
  {
    thumbnailUrl: 'http://www.michaelmosaics.com/images/275_Barack_Obama_cropped.jpg',
    text: 'Doing what you like will always keep you happy . .',
    name: 'Barack Obama',
    time: '5:11 pm'
  },
  {
    thumbnailUrl: 'https://i.ytimg.com/vi/GNbvmbij_mc/maxresdefault.jpg',
    text: 'Doing what you like will always keep you happy . .',
    name: 'Steve Jobs',
    time: '3:43 pm'
  },
  {
    thumbnailUrl: 'http://cdn.revistagq.com/uploads/images/thumbs/201517/benedict_cumberbatch_gq_5428_645x485.jpg',
    text: 'Doing what you like will always keep you happy . .',
    name: 'Benedict Cumberbatch',
    time: '7:17 pm'
  },
  {
    thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKVZd6kbwrjgwo2VK47Y3fxNIsY8toHmSFgIhiiYLKbwxI0aj9',
    text: 'Doing what you like will always keep you happy . .',
    name: 'Bred Pitt',
    time: '8:07 pm'
  },
  {
    thumbnailUrl: 'http://i2.esmas.com/galerias/fotos/2012/11/Guapos-channing-tatum_z-82d6ccc2-7fd5-1030-91a3-0019b9d5c8df.jpg',
    text: 'Doing what you like will always keep you happy . .',
    name: 'Channing Tatum',
    time: '3:15 pm'
  },
  {
    thumbnailUrl: 'http://www.boxnewsbox.com/wp-content/uploads/2016/01/Snap6219440.jpg',
    text: 'Doing what you like will always keep you happy . .',
    name: 'Tom Cruise',
    time: '1:37 pm'
  },
  {
    thumbnailUrl: 'http://www.boxnewsbox.com/wp-content/uploads/2016/01/4-10.jpg',
    text: 'Doing what you like will always keep you happy . .',
    name: ' Jennifer Lawrence',
    time: '9:45 pm'
  }

];

export default class Messages extends Component {

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

  render() {
    return (
      <Container>
        <Content>
          <List>
            {personMessage.map((message, i) => (
              <ListItem key={i} avatar>
                <Left>
                  <Thumbnail source={{ uri: message.thumbnailUrl }} />
                </Left>
                <Body>
                <Text>{message.name}</Text>
                <Text note>{message.text}</Text>
                </Body>
                <Right>
                  <Text note>{message.time}</Text>
                </Right>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}
