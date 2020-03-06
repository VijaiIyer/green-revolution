import React,{Component} from 'react';
import {View,Text,TouchableNativeFeedback} from 'react-native';
import {Icon} from 'native-base';
export default class SearchItem extends Component{
    constructor(props){
        super(props);
    }
    render()
    { const {name,address} = this.props;
        return(
            <TouchableNativeFeedback>
            <View style={{flexDirection:'row',paddingHorizontal:20}}>
            <Icon name="locate" style={{paddingVertical:20}}/>
            <View style={{justifyContent:'center',borderBottomWidth:1,borderColor:'#ebebeb',flex:1,paddingVertical:20,marginLeft:10}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>{name}</Text>
                <Text numberOfLines={1} style={{color:'grey'}}>{address}</Text>
            </View>
            </View>
            </TouchableNativeFeedback>
        )
    }
}
