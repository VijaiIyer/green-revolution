import React, { Component } from "react";
import { Container, Header, Title, Button, Icon, Left, Body, Content ,CheckBox} from "native-base";
import{View,StyleSheet,Text ,Image,TouchableNativeFeedback, Alert} from 'react-native';
import { WebView } from 'react-native-webview'
export default class PaymentScreen extends Component{
    constructor(props){
        super(props);
        this.state={
          cash:false,
          paytm:false,
          pressed:false,
        }
    }
    onPressCash(){
      this.setState({
        cash:true,
        paytm:false,
        pressed:true,
      });
    }
    processPayment(){
      if(this.state.paytm)
      {
        this.props.navigation.navigate('Paytm',{orderID:1,customerId:2,taxationAmount:400})
      }
      else
      {
        Alert.alert('Order','Order placed',[{text: 'OK', onPress: () => console.log('OK Pressed')}],{cancelable: false});
      }
    }
    onPressPaytm(){
      this.setState({
        paytm:true,
        cash:false,
        pressed:true,
      });
    }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent
            onPress={()=>{this.props.navigation.goBack();}}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Payments</Title>
          </Body>
        </Header>
        <Content>
        <View>
        <TouchableNativeFeedback onPress={()=>{this.onPressCash()}}>
        <View style={styles.row} >
            <View style={styles.item}>
            <Image source={{uri:"https://cdn4.iconfinder.com/data/icons/currency-icon-flat-vol-1/100/Indian_Rupee_Currency-512.png"}} style={styles.image}/>
            <Text style={styles.name}>Cash</Text>
            </View>
            <View style={{paddingRight:'5%'}}>
            <CheckBox checked={this.state.cash}/>
            </View>
        </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=>{this.onPressPaytm()}}>
        <View style={styles.row}>
            <View style={styles.item}>
            <Image source={{uri:"https://cdn2.iconfinder.com/data/icons/social-icons-color/512/paytm-512.png"}} style={styles.image}/>
            <Text style={styles.name}>Paytm</Text>
            </View>
            <View style={{paddingRight:'5%'}}>
            <CheckBox checked={this.state.paytm} onPress={()=>{this.onPressPaytm()}} />
            </View>
        </View>
        </TouchableNativeFeedback>
        </View>
        </Content>
        <TouchableNativeFeedback onPress={()=>{this.processPayment()}}>
        <View style={[styles.bottom,this.state.pressed?{opacity:1}:{opacity:0}]}>
          <Text style={styles.bottom_text}>
            {this.state.cash?"Place Order":"Pay Now"}
          </Text>
        </View>
        </TouchableNativeFeedback>
        {/* {
          this.state.displayWebView?
          <WebView source={{uri: `http://172.21.0.1:5000/createCheckSum?OrderID=${1234}&CustomerID=${1}&TaxationAmount=${400}`}}
                  onNavigationStateChange={(navigationState) => {
                              if (navigationState.title == 'true') {
                                this.props.navigation.navigate('PaymentResponse', { paymentStatus: navigationState.title })}}}/>
          :Alert.alert('Order','Order placed',[{text: 'OK', onPress: () => console.log('OK Pressed')}],{cancelable: false},)
        } */}
      </Container>
    );
  }
}
const styles=StyleSheet.create({
    item:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth:1,
        padding:5,
        borderColor:'#CBCBCB',
        marginHorizontal:10,
      },
      image:{
          height:40,
          width:40,
          margin:5,
          backgroundColor:'white',
      },
      name:{fontSize: 15,
    marginLeft:10},
    button:{
        fontWeight:'600',
        color:'orange',
        fontSize: 15,
    },
    bottom:{
      position:"absolute",
      bottom:0,
      left:0,
      right:0,
      height:70,
      paddingHorizontal:20,
      paddingVertical:10,
      backgroundColor:'green',
      marginBottom:-10,
    },
    bottom_text:{
      color:'white',
      fontSize:22,
      fontWeight:'100',
      textAlign:'center',
      textAlignVertical:"center",
    }

})