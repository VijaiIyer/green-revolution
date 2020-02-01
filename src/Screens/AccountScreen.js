import React, { Component } from 'react';
import { Container,Content,Icon,Text} from 'native-base';
import {TouchableNativeFeedback,View,StyleSheet,Alert} from 'react-native';

export default class ButtonFullExample extends Component {
    constructor(props)
    {
        super(props);
    }
  render() {
    return (
      <Container>
        <Content>
        <View style={styles.heading}>
        <Text style={styles.name}>R Vijai Iyer</Text>
        <Text style={styles.details}>9981894374 {'\u2022'} vijaiiyer1995@gmail.com</Text>
        </View>
        <TouchableNativeFeedback onPress={()=>{this.props.navigation.navigate('Order')}}>
          <View style={styles.item}>
            <View style={styles.view}><Icon name="md-list-box" /></View>
            <Text style={styles.text}>Orders</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={()=>{this.props.navigation.navigate('Subscription')}}>
          <View style={styles.item}>
          <View style={styles.view}><Icon name="md-calendar" /></View>
            <Text style={styles.text}>Subscriptions</Text>
          </View></TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={()=>{this.props.navigation.navigate('Address')}}>
          <View style={styles.item}>
            <View style={styles.view}><Icon name="md-locate" /></View>
            <Text style={styles.text}>Manage Addresses</Text>
          </View></TouchableNativeFeedback>
          <TouchableNativeFeedback   onPress={()=>{this.props.navigation.navigate('Help')}}>
          <View style={styles.item}>
          <View style={styles.view}><Icon name="md-help" /></View>
            <Text style={styles.text}>Help & Support</Text>
          </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback  onPress={()=>{this.props.navigation.navigate('Payment')}}>
          <View  style={styles.item}>
          <View style={styles.view}><Icon name="ios-card" /></View>
            <Text style={styles.text}>Payments</Text>
          </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback  
          onPress={()=>{
                    Alert.alert(
                     'Logout',
                     'Are you sure you want to logout?',
                            [
                                {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                                },
                                {text: 'Yes', onPress: () => {console.log('Logged Out')}},
                            ],
                            {cancelable: true},
                                );}}>
          <View style={styles.item}>
          <View style={styles.view}><Icon name="ios-power" /></View>
            <Text style={styles.text}>Logout</Text>
          </View>
          </TouchableNativeFeedback>
        </Content>
      </Container>
    );

  }

}
const styles=StyleSheet.create({
  item:{
    marginHorizontal:20,
    borderTopWidth:1,
    borderColor:'#cbcbcb',
    flexDirection:'row',
    alignItems:"center",
    paddingVertical:10,
  },
  text:{
    paddingLeft:10,
    fontSize: 16,
  },
  view:{
    justifyContent:'center',
    alignContent:"center",
    height:40,
    width:42,
    paddingLeft:10,
  },
  heading:{
    marginTop:50,
    marginBottom:15,
    marginHorizontal:20,
  },
  name:{
    fontWeight:'bold',
    fontSize:22,
  },
  details:{
    color:'gray',
    fontSize:15,
  },
});