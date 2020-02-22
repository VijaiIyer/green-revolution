import React, { Component } from 'react';
import { Image ,TouchableNativeFeedback,TouchableOpacity} from "react-native";
import {Left, Body,Card, CardItem, Thumbnail,Text} from 'native-base';
export default class HomeItem extends Component{
  constructor(props)
  {
    super(props)
  }
    render(){
      const {item}=this.props;
        return (
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Product_sub',{item:item})}}>
          <Card>
            <CardItem >
            <Image source={{uri:item.product_image1}} style={{height: 220, width: null, flex: 1}}/>
              </CardItem>
              <CardItem bordered>
                <Left>
                  <Thumbnail source={(item.product_type_name==='Veg')?require('../../../assets/im/veg.png'):require('../../../assets/im/non-veg.png')} />
                  <Body>
                    <Text style={{fontSize: 22,fontWeight: 'bold'}}>{item.product_name}</Text>
                    <Text note style={{fontSize: 15}}>With {item.product_type_name}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem >
              <Body>
                <Text note style={{fontSize: 15}}> 1 Day </Text>
                    <Text style={{fontSize: 22,fontWeight: 'bold'}}>{item.product_price}</Text>
                    <Text note style={{fontSize: 15}}>Per Meal</Text>
                </Body>
                <Body>
                <Text note style={{fontSize: 15}}> 3 Days </Text>
                    <Text style={{fontSize: 22,fontWeight: 'bold'}}>₹{item.product_price*(1-(parseInt("5")/100))}<Text note style={{fontSize: 15,textDecorationLine: 'line-through'}}>{item.price}</Text> </Text>
                    <Text note style={{fontSize: 15}}>Per Meal</Text>
                </Body>
                <Body>
                <Text note style={{fontSize: 15}}> 7 Day </Text>
                <Text style={{fontSize: 22,fontWeight: 'bold'}}> ₹{item.product_price*(1-(parseInt("5")/100))}<Text note style={{fontSize: 15,textDecorationLine: 'line-through'}}>{item.price}</Text> </Text>
                    <Text note style={{fontSize: 15}}>Per Meal</Text>
                </Body>
              </CardItem>
            </Card>
            </TouchableOpacity>
        );
    }
}