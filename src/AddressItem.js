import React, { Component } from "react";
import {Icon} from 'native-base';
import { View, Text, StyleSheet} from 'react-native'; 
import { TouchableOpacity } from "react-native-gesture-handler";
export default class AddressItem extends Component {
    constructor(props)
    {
        super(props);
    }
  render() {
    return (
        <View style={styles.main}>
        <View style={styles.icon}>
        <Icon name="md-locate" size={10}/>
        </View>
        <View  style={{borderColor:'#cbcbcb',
    borderBottomWidth:1,paddingBottom:20}}>
            <Text style={styles.heading}>Home</Text>
            <Text style={styles.address}>117/2 Vijayniketan,Vallabh Nagar,Indore,Madhya Pradesh,452001,India </Text>
            <View style={styles.button_container}>
                <TouchableOpacity>
                    <Text style={styles.button}>EDIT</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.button}>DELETE</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    );
  }
}
const styles=StyleSheet.create({
    main:{
    flexDirection: 'row',
    width:'100%',
    paddingHorizontal:10,paddingTop:20,
},
icon:{
    marginRight:10,
},
heading:{fontWeight:'bold',fontSize:16},
address:{
    marginVertical:10,
    fontSize : 14,
    color:'gray',
    flexWrap:"wrap",
    fontWeight:'400',
},
button:{
    fontWeight:'bold',
    color:'orange',
    marginRight:20,
},
button_container:{
    flexDirection:"row",
}
});