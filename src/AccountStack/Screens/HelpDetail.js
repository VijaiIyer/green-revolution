import React, { Component } from "react";
import { Container, Header, Title, Button, Icon, Left, Body, Content, Accordion } from "native-base";
import {TouchableNativeFeedback,View,Text} from 'react-native';
const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ];
export default class HeaderSpan extends Component {
    constructor(props)
    {
        super(props);
    }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent
            onPress={()=>{this.props.navigation.goBack();}}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Help & Support</Title>
          </Body>
        </Header>
        <Content style={{backgroundColor:'#ebebeb'}}> 
        <Accordion
            dataArray={dataArray}
            headerStyle={{ backgroundColor: "#ffffff" }}
            contentStyle={{ backgroundColor: "#ffffff" }}
          />

        </Content>
      </Container>
    );
  }
}