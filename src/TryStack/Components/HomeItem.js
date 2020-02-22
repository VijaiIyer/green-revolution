import React, { Component } from 'react';
import { Image ,TouchableNativeFeedback} from "react-native";
import {Left, Body,Card, CardItem, Thumbnail,Text} from 'native-base';
export default class HomeItem extends Component{
  constructor(props)
  {
    super(props)
  }
    render(){
      const {item}=this.props;
        return (
          <TouchableNativeFeedback onPress={()=>{this.props.navigation.navigate('Subscribe_try',{item:item})}}>
          <Card>
            <CardItem >
            <Image source={require('../../../assets/im/c1.png')} style={{height: 220, width: null, flex: 1}}/>
              </CardItem>
              <CardItem bordered>
                <Left>
                  <Thumbnail source={require('../../../assets/im/veg.png')} />
                  <Body>
                    <Text style={{fontSize: 22,fontWeight: 'bold'}}>{item.name}</Text>
                    <Text note style={{fontSize: 15}}>With {item.dressing}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem >
              <Body>
                <Text note style={{fontSize: 15}}> 1 Day </Text>
                    <Text style={{fontSize: 22,fontWeight: 'bold'}}>{item.price}</Text>
                    <Text note style={{fontSize: 15}}>Per Meal</Text>
                </Body>
                <Body>
                <Text note style={{fontSize: 15}}> 3 Days </Text>
                    <Text style={{fontSize: 22,fontWeight: 'bold'}}>₹{item.price*(1-(parseInt(item.discount)/100))}<Text note style={{fontSize: 15,textDecorationLine: 'line-through'}}>{item.price}</Text> </Text>
                    <Text note style={{fontSize: 15}}>Per Meal</Text>
                </Body>
                <Body>
                <Text note style={{fontSize: 15}}> 7 Day </Text>
                <Text style={{fontSize: 22,fontWeight: 'bold'}}> ₹{item.price*(1-(parseInt(item.discount)/100))}<Text note style={{fontSize: 15,textDecorationLine: 'line-through'}}>{item.price}</Text> </Text>
                    <Text note style={{fontSize: 15}}>Per Meal</Text>
                </Body>
              </CardItem>
            </Card>
            </TouchableNativeFeedback>
        );
    }
}