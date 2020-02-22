import React, { Component } from 'react';
import {View,Image ,TouchableNativeFeedback} from "react-native";
import {Text,Button} from 'native-base';
export default class  FlatlistItem extends Component{
  constructor(props)
  {
    super(props)
  }
    render(){
        const {item}=this.props
        return (
               <View style={{width: 300, borderWidth: 4, margin:15, height: 220, borderColor:'#eeeeee',backgroundColor: '#ffffff',paddingVertical:10}}>
                    <Image source={this.props.item.image} style={{margin: 1, width: '100%', height:130, }}></Image>
                <Text note style={{ padding: 10, fontSize: 15, fontWeight: 'bold', top: '1%', color: '#757575'}}>
                   {item.date}
                </Text>
                <Text style={{  fontSize: 20,fontWeight: 'bold', left:'3%'  }}>
                   {item.title}
                </Text>
      </View>
        );
    }
}