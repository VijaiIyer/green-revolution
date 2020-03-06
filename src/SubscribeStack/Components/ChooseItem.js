import React, { Component } from 'react';
import {View,Image ,TouchableNativeFeedback} from "react-native";
import {Text,Button} from 'native-base';
export default class  ChooseItem extends Component{
  constructor(props)
  {
    super(props)
  }
    render(){
        const {item,plan}=this.props
        return (
          <TouchableNativeFeedback onPress={()=>{this.props.navigation.navigate('Subscribe_sub',{plan:plan,item:item})}}>
           <View style={{ backgroundColor: '#fff', height: 80,backgroundColor: '#fff', width: '100%',marginVertical:5,padding:10,borderRadius:2}}>
                 <View>
                   <Text note style={{fontSize: 18,fontWeight: 'bold'}}>{plan.subscription_days} {(plan.subscription_days!==1)?'Day':'Days'}</Text>
                   <Text style={{fontSize: 22,fontWeight: 'bold'}}> ₹ {plan.subscription_price}<Text>  </Text><Text note style={{fontSize: 17,textDecorationLine: 'line-through'}}>{plan.subscription_days===1?item.product_price:''}</Text>
                   <Text note style={{fontSize: 18,fontWeight: 'bold'}}> {}per meal</Text>  </Text>
                   <Text style={{fontSize: 18,fontWeight: 'bold',textAlign:'center',position: 'absolute',width: 120, top: '15%', left: '60%', backgroundColor: '#e65100',borderRadius:25,paddingVertical:10,color:'white'}}>Choose</Text>
                 </View>
                 </View>
          </TouchableNativeFeedback>
        );
    }
}