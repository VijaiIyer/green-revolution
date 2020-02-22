import React, { Component } from "react";
import { Container, Header, Title, Button, Icon, Left, Right, Body, Content} from "native-base";
import {TouchableNativeFeedback, StyleSheet, Text,ToastAndroid} from 'react-native';
import axios from 'axios';
import AddressItem from '../Components/AddressItem';
export default class AddressScreen extends Component {
    constructor(props)
    {
        super(props);
        this.state={
          Address_array:[],
        }
        this.add_Address = this.add_Address.bind(this);
        this.edit_Address = this.edit_Address.bind(this);
        this.delete_Address = this.delete_Address.bind(this);
    }
    
    edit_Address=(address)=>{
      var temp=address;
      temp.name=global.user_detail.name;
      temp.mobile=global.user_detail.contact;
      temp.user_id=global.user_detail.user_id;
      console.log(temp)
      axios.post('https://www.bookshippingtrucks.com/Projects-Works/SALAD-APP/MOBILE_APP/_Api_Register_Log.php', {
        "method":"Edit_New_Address",
        "address_id":temp.address_id,
        "name":temp.name,
        "mobile":temp.mobile,
        "user_id":parseInt(temp.user_id),
        "area":"DEFAULT",
        "location":temp.location,
        "house_flat_no":temp.house_flat_no,
        "landmark":temp.landmark,
        "latitude":temp.latitude,
        "longitude":temp.longitude,
        "save_type":temp.save_type,
      })
      .then((response) => {
        console.log(response.data);
        if(response.data.status==='200')
          ToastAndroid.show('Address Updated Successfully', ToastAndroid.SHORT);
        else
          ToastAndroid.show('Address Update Failed', ToastAndroid.SHORT);
      }, (error) => {
        console.log(error);
      });

      
      
      }

    add_Address=(address)=>{
      var temp=address;
      temp.name=global.user_detail.name;
      temp.mobile=global.user_detail.contact;
      temp.user_id=global.user_detail.user_id;
      console.log(temp)
      axios.post('https://www.bookshippingtrucks.com/Projects-Works/SALAD-APP/MOBILE_APP/_Api_Register_Log.php', {
        "method":"Add_New_Address",
        "name":temp.name,
        "mobile":temp.mobile,
        "user_id":parseInt(temp.user_id),
        "area":"DEFAULT",
        "location":temp.location,
        "house_flat_no":temp.house_flat_no,
        "landmark":temp.landmark,
        "latitude":temp.latitude,
        "longitude":temp.longitude,
        "save_type":temp.save_type,
      })
      .then((response) => {
        //console.log(response.data);
        if(response.data.status==='200')
          ToastAndroid.show('Addresses Added Successfully', ToastAndroid.SHORT);
        else
          ToastAndroid.show('Addresses Already Exists', ToastAndroid.SHORT);
      }, (error) => {
        console.log(error);
      });
    }
    delete_Address=(address)=>{
      console.log(address);
      axios.post('https://www.bookshippingtrucks.com/Projects-Works/SALAD-APP/MOBILE_APP/_Api_Register_Log.php', {
        "method":"Delete_Address",
        "address_id":address.address_id,
        "user_id":parseInt(global.user_detail.user_id),
      })
      .then((response) => {
        console.log(response.data);
        if(response.data.status==='200')
          ToastAndroid.show('Deleted Successfully', ToastAndroid.SHORT);
        else
          ToastAndroid.show('Some Error Occurred', ToastAndroid.SHORT);
      }, (error) => {
        console.log(error);
      });

      
    }
    componentDidMount(){
      axios.post('https://www.bookshippingtrucks.com/Projects-Works/SALAD-APP/MOBILE_APP/_Api_Register_Log.php', {
        "method":"My_All_Address",
        "user_id":global.user_detail.user_id,
      })
      .then((response) => {
        if(response.data.status==='200')
        {
          console.log(response.data.result);
          this.setState({Address_array:response.data.result});
        }
        else
        {
          ToastAndroid.show('No Addresses Found', ToastAndroid.SHORT);
        }
        console.log(response.data);
      }, (error) => {
        console.log(error);
      });
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