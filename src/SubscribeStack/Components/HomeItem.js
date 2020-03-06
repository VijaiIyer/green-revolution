import React, { Component } from 'react';
import { Image ,TouchableNativeFeedback,Dimensions} from "react-native";
import {Left, Body,Card, CardItem, Thumbnail,Text} from 'native-base';
const { width } = Dimensions.get('window');
const height = width * 0.5;
export default class HomeItem extends Component{
  constructor(props)
  {
    super(props)
  }
    render(){
      const {item}=this.props;
        return (
          <TouchableNativeFeedback onPress={()=>{this.props.navigation.navigate('Product_sub',{item:item})}}>
          <Card>
            <CardItem style={{marginTop:15}} >
            <Image source={{uri:item.product_image1}} style={{height:0.8*height, width: null, flex: 1,borderRadius:5}}/>
              </CardItem>
              <CardItem bordered style={{marginTop:-10}} >
                <Left>
                  <Thumbnail  style={{height:0.2*height,resizeMode:'contain'}} source={(item.product_type_name==='Veg')?require('../../../assets/im/veg.png'):require('../../../assets/im/non-veg.png')} />
                  <Body>
                    <Text  style={{fontSize: 18,fontWeight: 'bold'}}>{item.product_name.toUpperCase()}</Text>
                    <Text note style={{fontSize: 15}}>With {item.product_type_name}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem bordered>
                <Left>
                  <Thumbnail  style={{height:0.2*height,resizeMode:'cover',borderRadius:0.5*height}} source={{uri:item.product_chef_data[0].image1}} />
                  <Body>
                    <Text  style={{fontSize: 18,fontWeight: 'bold'}}>{item.product_chef_data[0].chef_name}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem >
              <Body>
                <Text note style={{fontSize: 15}}>{item.product_subscription_data[0].subscription_days} Day</Text>
                    <Text style={{fontSize: 18,fontWeight: 'bold'}}>₹ {item.product_subscription_data[0].subscription_price}</Text>
                    <Text note style={{fontSize: 15}}>Per Meal</Text>
                </Body>
                <Body>
                <Text note style={{fontSize: 15}}>{item.product_subscription_data[0].subscription_days} Days</Text>
                    <Text style={{fontSize: 18,fontWeight: 'bold'}}>₹ {item.product_subscription_data[0].subscription_price}<Text note style={{fontSize: 15,textDecorationLine: 'line-through'}}>{item.price}</Text> </Text>
                    <Text note style={{fontSize: 15}}>Per Meal</Text>
                </Body>
                <Body>
                <Text note style={{fontSize: 15}}>{item.product_subscription_data[0].subscription_days} Days</Text>
                <Text style={{fontSize: 18,fontWeight: 'bold'}}> ₹ {item.product_subscription_data[0].subscription_price}<Text note style={{fontSize: 15,textDecorationLine: 'line-through'}}>{item.price}</Text> </Text>
                    <Text note style={{fontSize: 15}}>Per Meal</Text>
                </Body>
              </CardItem>
            </Card>
            </TouchableNativeFeedback>
        );
    }
}