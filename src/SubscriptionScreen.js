import React, { Component } from "react";
import { Container, Header, Title, Button, Icon, Left, Body, Content } from "native-base";
import {StyleSheet,Text} from 'react-native'
import OrderItem from './OrderItem';
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
            <Title>Subscriptions</Title>
          </Body>
        </Header>
        <Content>
        <Text style={styles.section_heading}>Past Subscriptions</Text>
        <OrderItem {...this.props} />
        <OrderItem {...this.props} />
        <OrderItem {...this.props} />
        </Content>
      </Container>
    );
  }
}
const styles=StyleSheet.create({
  section_heading:{
      color:'gray',
      paddingVertical:20,
      fontSize:16,
      backgroundColor:'#ebebeb',
      fontWeight:'bold',
      paddingLeft:10,
  }
});