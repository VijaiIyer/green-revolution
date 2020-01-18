import React, { Component } from "react";
import { Container, Header, Title, Button, Icon, Left, Right, Body, Content } from "native-base";
import {TouchableNativeFeedback, StyleSheet, Text} from 'react-native';
import AddressItem from './AddressItem';
export default class AddressScreen extends Component {
    constructor(props)
    {
        super(props);
    }
  render(){
       return (<Container>
          <Header>
          <Left>
            <Button transparent
            onPress={()=>{this.props.navigation.goBack();}}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Manage Addresses</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <Text style={styles.section_heading}>Saved Addresses</Text>
       <AddressItem/>
       <AddressItem/>            
        </Content>
        <TouchableNativeFeedback onPress={()=>{this.props.navigation.navigate('Map')}}>
            <Text style={styles.button}>ADD NEW ADDRESSES</Text>
        </TouchableNativeFeedback>
      </Container>
    );
       }
}
const styles=StyleSheet.create({
    button:{
        color:'green',
        borderColor:'green',
        borderWidth:1,
        marginHorizontal: 15,
        marginVertical:10,
        textAlign:'center',
        textAlignVertical:'center',
        paddingVertical:10,
    },
    section_heading:{
      color:'gray',
      paddingVertical:20,
      fontSize:16,
      backgroundColor:'#ebebeb',
      fontWeight:'bold',
      paddingLeft:10}
      
});