import React, { Component } from 'react';
import {View,Image ,TouchableNativeFeedback,StyleSheet} from "react-native";
import {Text,Button, Item} from 'native-base';
export default class  ChooseItem extends Component{
  constructor(props)
  {
    super(props)
  }
    render(){
        const {slot,pressed,index,updatePressed}=this.props;
        console.log(slot);
        return (
            <TouchableNativeFeedback onPress={()=>{updatePressed(index)}}>
            <View style={[styles.slot,pressed?{borderColor:'#ee0000',backgroundColor:'#ebebeb'}:{borderColor:'#bbbbbb',backgroundColor:'#ffffff'}]}>
            <Text style={{color: 'black',fontSize: 15,fontWeight: 'bold', }}>{`${slot.timing_start_time} - ${slot.timing_end_time}`}</Text>
            </View>
            </TouchableNativeFeedback>
        );
    }
}
const styles=StyleSheet.create({
    slot:{
        height: 50,
        width: 165,
        borderWidth: 1,
        borderRadius:4,
        justifyContent: "center",
        alignItems: "center",
        margin:10,
    },
})