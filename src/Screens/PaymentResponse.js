import React,{Component} from 'react';
import {View ,Text} from 'react-native';
import { Icon } from 'native-base';
export default class PaymentResponse extends Component{
    constructor(props)
    {
        super(props);
    }


    render(){
        let {response} =this.props.navigation.state.params
        return(
            <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
            <Icon />
            <Text style={{fontSize:22,textAlign:"center",textAlignVertical:'center'}}>{response?'Successful':'Failed'}<Text>Transaction</Text></Text>
            </View>
        );
    }
} 