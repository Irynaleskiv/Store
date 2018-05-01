import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';

export default class SearchAgent extends Component {

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
          <Button block>
            <Text>Primary</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}