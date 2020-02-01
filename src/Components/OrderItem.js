import React , {Component} from 'react';
import {View, Text , StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Icon } from 'native-base';
export default class OrderItem extends Component{
    constructor(props){
        super(props);
    }
   render(){
       return (
           <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('Detail')}>
           <View style={styles.main}>
           <View style={{flexDirection:'row'}}>
           <Icon name="ios-card"/>
           <Text style={styles.heading}>Greek Salad Plan</Text>
           </View>
           <Text style={styles.detail}>with Balsamic Dressing</Text>
           <Text style={styles.price}>Rs.210</Text>
           <TouchableNativeFeedback>
               <View style={styles.bottom}>
                   <Text style={styles.detail}>10 salads remaining</Text>
                   <Text style={styles.button}>MANAGE PLAN</Text>
               </View>
           </TouchableNativeFeedback> 
           </View>
           </TouchableNativeFeedback>

       );
   }
}
const styles=StyleSheet.create({
main:{
padding:10,    
},
heading:{
fontSize:18,
fontWeight:'bold',
marginLeft:2,
textAlignVertical:'center',
marginBottom:5,
},
detail:{
    color:'grey',
    marginBottom:10,
},
price:{
    fontWeight:'bold',
    fontSize:16 ,
},
bottom:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:10,
    borderColor:'#cbcbcb',
    borderTopWidth:1,
    borderBottomWidth:1,
},
button:{
    fontWeight:'bold',
    color:'orange',
    fontSize: 15,
    marginRight:20,
},
});
