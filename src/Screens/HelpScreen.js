import React, { Component } from "react";
import { Container, Header, Title, Button, Icon, Left, Body, Content } from "native-base";
import {TouchableNativeFeedback,View,Text,StyleSheet} from 'react-native';
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
        <Content>
        <Text style={styles.section_heading}>Help with orders</Text>
        <View style={{flexGrow:1,backgroundColor:'white'}}>
        <TouchableNativeFeedback  onPress={()=>{this.props.navigation.navigate('HelpDetail')}}>
           <View style={styles.main}>
            <Text style={styles.heading}>Legal</Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=>{this.props.navigation.navigate('HelpDetail')}}>
        <View style={styles.main}>
            <Text style={styles.heading}>FAQ</Text>
            </View>
        </TouchableNativeFeedback>
        </View>
        </Content>
      </Container>
    );
  }
}
const styles=StyleSheet.create({
    main:{
        borderBottomWidth:1,
        borderColor:'#cbcbcb',
        marginHorizontal:10,
    },
    heading:{ fontSize:16,
    paddingVertical:15,},
    section_heading:{
        color:'gray',
        paddingVertical:20,
        fontSize:16,
        backgroundColor:'#ebebeb',
        fontWeight:'bold',
        paddingLeft:10,
    }
});