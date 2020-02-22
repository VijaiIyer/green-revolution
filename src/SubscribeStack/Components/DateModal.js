import React, { Component } from 'react';
import {View,TouchableNativeFeedback} from "react-native";
import {Text,Icon} from 'native-base';
const unselected=[false,false,false,false,false];
export default class  DateModal extends Component{
  constructor(props)
  {
    super(props);
    this.state={
        selected:[false,false,false,false,false]
    }
  }
  handlePress=(index)=>{
      let t=[false,false,false,false,false];
      t[index]=true;
      this.setState({
          selected:t
      });
  }
    render(){
        return (
            <View style={{backgroundColor:'white',height:'78%',padding:10,borderTopEndRadius:10,borderTopStartRadius:10}}>
            <Text style={{color:'grey',fontSize:16,marginLeft:5}}>3 day plan</Text>
            <View style={{marginBottom:10}}>
                       <Text style= {{ fontSize: 28,fontWeight: 'bold'}}> Select Plan Duration</Text>
                        <View style={{height: 2, width: 80,marginLeft:5, backgroundColor: '#e65100' }}/>
            </View>
            <View>
            <TouchableNativeFeedback onPress={()=>this.handlePress(0)}>
            <View style={{borderColor:'grey',borderBottomWidth:1,flexDirection:"row",justifyContent:'space-between'}}>
            <Text style={{fontSize:22,paddingVertical:10}}>10 Feb, Mon</Text>
            <Icon type='AntDesign' name={this.state.selected[0]?'checkcircle':'checkcircleo'} style={{fontSize:20,textAlignVertical:'center'}}/>
            </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={()=>{this.handlePress(1)}}>
            <View style={{borderColor:'grey',borderBottomWidth:1,flexDirection:"row",justifyContent:'space-between'}}>
            <Text style={{fontSize:22,paddingVertical:10}}>10 Feb, Mon</Text>
            <Icon type='AntDesign' name={this.state.selected[1]?'checkcircle':'checkcircleo'} style={{fontSize:20,textAlignVertical:'center'}}/>
            </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={()=>{this.handlePress(2)}}>
            <View style={{borderColor:'grey',borderBottomWidth:1,flexDirection:"row",justifyContent:'space-between'}}>
            <Text style={{fontSize:22,paddingVertical:10}}>10 Feb, Mon</Text>
            <Icon type='AntDesign' name={this.state.selected[2]?'checkcircle':'checkcircleo'} style={{fontSize:20,textAlignVertical:'center'}}/>
            </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={()=>{this.handlePress(3)}}>
            <View style={{borderColor:'grey',borderBottomWidth:1,flexDirection:"row",justifyContent:'space-between'}}>
            <Text style={{fontSize:22,paddingVertical:10}}>10 Feb, Mon</Text>
            <Icon type='AntDesign' name={this.state.selected[3]?'checkcircle':'checkcircleo'} style={{fontSize:20,textAlignVertical:'center'}}/>
            </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={()=>{this.handlePress(4)}}>
            <View style={{borderColor:'grey',borderBottomWidth:1,flexDirection:"row",justifyContent:'space-between'}}>
            <Text style={{fontSize:22,paddingVertical:10}}>10 Feb, Mon</Text>
            <Icon type='AntDesign' name={this.state.selected[4]?'checkcircle':'checkcircleo'} style={{fontSize:20,textAlignVertical:'center'}}/>
            </View>
            </TouchableNativeFeedback>

            </View>
            <View style={{marginVertical:10}}>
                <Text>Plan ends on<Text style={{fontWeight:'bold'}}>12 Feb,Web</Text> </Text>
            </View>
            <TouchableNativeFeedback>
                <View style={{position:'absolute',bottom:0,right:0,left:0,padding:20,backgroundColor:'green'}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'white',textAlign:'center'}}> Set Starting Date </Text> 
                </View>
            </TouchableNativeFeedback>
            </View>

        );
    }
}