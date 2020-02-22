import React, { Component } from 'react';
import {View,Image ,TouchableNativeFeedback,Dimensions} from "react-native";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import moment from 'moment';
const width=Dimensions.get('window').width;
export default class  FlatlistItem extends Component{
  constructor(props)
  {
    super(props)
  }
    render(){
        const {item}=this.props
        return (
          <View style={{width:width,padding:10}}>
            <Card style={{padding:5}}>
            <CardItem cardBody>
              <Image source={this.props.item.image} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Body>
              <Text note style={{fontSize: 15, fontWeight: 'bold', color: '#757575'}}>{moment(item.date).format("dddd, MMMM Do")}</Text>
              <Text style={{  fontSize: 20,fontWeight: 'bold' }}>{item.title}</Text>
              </Body>
            </CardItem>
          </Card>
          </View>
              // <View style={{width:width,padding:30,justifyContent:'center',alignItems:'center',backgroundColor:'red',borderColor:'black',margin:6,borderWidth:2}}>
              //  <View style={{width:300,height:200}}>
              //   <Image source={this.props.item.image} style={{width: '100%', height:130 }}></Image>
              //   <Text note style={{fontSize: 15, fontWeight: 'bold', color: '#757575'}}>{item.date}</Text>
              //   <Text style={{  fontSize: 20,fontWeight: 'bold' }}>{item.title}</Text>
              //  </View>
              //  </View>
        );
    }
}