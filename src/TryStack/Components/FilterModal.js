import React, { Component } from 'react';
import {View,TouchableNativeFeedback,Text, TouchableWithoutFeedback  } from "react-native";
export default class  DateModal extends Component{
  constructor(props)
  {
    super(props)
  }
    render(){
        return (
            <View style={{backgroundColor:'white',height:'60%',padding:10,borderTopEndRadius:10,borderTopStartRadius:10}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{marginBottom:10}}>
                       <Text style= {{ fontSize: 28,fontWeight: 'bold'}}>Filters</Text>
                        <View style={{height: 2, width: 80,marginLeft:5, backgroundColor: '#e65100' }}/>
            </View>
            <TouchableWithoutFeedback>
                <Text style={{color:'#e65100',textAlignVertical:'center',fontWeight:'bold'}}>CLEAR ALL</Text>
            </TouchableWithoutFeedback>
            </View>
            <View>
                <Text>Sort</Text>
                <Text>Type</Text>
            </View>

            <TouchableNativeFeedback style={{marginVertical:20,marginHorizontal:10}} >
                <View style={{backgroundColor:'#e65100',alignItems:'center',justifyContent:'center',padding:10,position:'absolute',bottom:0,left:0,right:0}}>
                    <Text style={{fontSize:22,color:'white',textAlign:'center',textAlignVertical:'center'}}>Apply</Text>
                </View>
            </TouchableNativeFeedback>
            </View>

        );
    }
}