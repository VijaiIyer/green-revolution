import React, { Component } from "react";
import {Icon} from 'native-base';
import { TouchableWithoutFeedback, View, Text, StyleSheet,Alert} from 'react-native';
export default class AddressItem extends Component {
    constructor(props)
    {
        super(props);
    }
  render() {
      const {item,key,delete_Address,index,edit_Address}=this.props;
    return (
        <View style={styles.main} key={key}>
        <View style={styles.icon}>
        <Icon name="md-locate" size={10}/>
        </View>
        <View  style={{borderColor:'#cbcbcb',
    borderBottomWidth:1,paddingBottom:20}}>
            <Text style={styles.heading}>{item.name}</Text>
            <Text style={styles.address}>{`${item.house},${item.landmark},${item.location}`} </Text>
            <View style={styles.button_container}>
                <TouchableWithoutFeedback onPress={()=>{
                    this.props.navigation.navigate('Edit',{item:item,index:index,edit_Address:edit_Address})
                }}>
                    <Text style={styles.button}>EDIT</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>{
                    Alert.alert(
                     'Delete Address',
                     'Are you sure you want to delete this address?',
                            [
                                {
                                text: 'No',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                                },
                                {text: 'Yes', onPress: () => {
                                    delete_Address(item)
                                }},
                            ],
                            {cancelable: true},
                                );}}>
                    <Text style={styles.button}>DELETE</Text>
                </TouchableWithoutFeedback>
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
    width:'60%',
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