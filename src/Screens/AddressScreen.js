import React, { Component } from "react";
import { Container, Header, Title, Button, Icon, Left, Right, Body, Content } from "native-base";
import {TouchableNativeFeedback, StyleSheet, Text} from 'react-native';
import AddressItem from '../Components/AddressItem';
const Address=[
  {
    name:'Home',
    house:'117/2 Vijayniketan',
    landmark:'Victoria Urbane',
    location:'Vallabh Nagar,Indore,Madhya Pradesh,452001,India',
  },
  {
    name:'Work',
    house:'Hvantage Technologies',
    landmark:'Allen Institute',
    location:'Indore,Madhya Pradesh,452001,India',
  },
];
export default class AddressScreen extends Component {
    constructor(props)
    {
        super(props);
        this.state={
          Address_array:Address,
        }
        this.add_Address = this.add_Address.bind(this);
        this.edit_Address = this.edit_Address.bind(this);
        this.delete_Address = this.delete_Address.bind(this);
    }
    
    edit_Address=(address,index)=>{
      let t=this.state.Address_array;
      t[index]=address;
      this.setState({Address_array:t});
      }

    add_Address=(address)=>{
      let t=this.state.Address_array;
      t.push(address);
      this.setState({Address_array:t});
    }
    delete_Address=(add)=>{
      let t=this.state.Address_array;
      t=t.filter((item)=>{ 
        return !(Object.is(add,item));
      });
      this.setState({Address_array:[]});
      this.setState({Address_array:t});
    }

  render(){
    const props=this.props;
       return (<Container>
          <Header>
          <Left>
            <Button transparent
            onPress={()=>{props.navigation.goBack();}}>
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
        {this.state.Address_array.map((item,index,key)=>{
          return <AddressItem {...props} item={item} key={key} delete_Address={this.delete_Address} edit_Address={this.edit_Address} index={index} />
        })
        }           
        </Content>
        <TouchableNativeFeedback onPress={()=>{this.props.navigation.navigate('Map',{add_Address:this.add_Address})}}>
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