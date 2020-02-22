import React, { Component } from 'react';
import {View,TouchableNativeFeedback,TextInput,Text } from "react-native";
export default class  DateModal extends Component{
  constructor(props)
  {
    super(props);
    this.state={
        phone_number:''};
  }
    render(){
        const {toggleModal}=this.props
        return (
            <View style={{backgroundColor:'white',height:'60%',padding:10,borderTopEndRadius:10,borderTopStartRadius:10}}>
            <Text style={{fontSize:22,fontWeight:'bold'}}>LOGIN</Text>
            <Text style={{fontSize:11,color:'grey',marginBottom:20}}>Enter your phone number to proceed</Text>
            <Text style={{fontSize:10,color:'grey',marginBottom:-10}}>10 digit mobile number</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={{marginRight:5,textAlignVertical:'center'}}>+91</Text>
                <TextInput
                    value={this.state.phone_number}
                    style={{flex:1}}
                    autoFocus={true}
                    textContentType='telephoneNumber'
                    keyboardType='phone-pad'
                    maxLength={10}
                    onChangeText={(value)=>{this.setState({phone_number:value})}}
                />
            </View>
            <View style={{height:1,width:'100%',backgroundColor:'#e65100',marginTop:-10,marginBottom:20}}/>
            <TouchableNativeFeedback
             onPress={()=>{
                 toggleModal();
                 this.props.navigation.navigate('OTP',{phoneNumber:this.state.phone_number})}}>
                <View style={{backgroundColor:'#e61500',alignItems:'center',justifyContent:'center',padding:10}}>
                    <Text style={{fontSize:22,color:'white',textAlign:'center',textAlignVertical:'center'}}>Continue</Text>
                </View>
            </TouchableNativeFeedback>
            </View>

        );
    }
}