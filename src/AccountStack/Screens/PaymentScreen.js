import React, { Component } from "react";
import { Container, Header, Title, Button, Icon, Left, Body, Content ,CheckBox} from "native-base";
import{View,StyleSheet,Text ,Image,TouchableNativeFeedback, Alert} from 'react-native';
import Paytm from 'react-native-paytm';
import * as PaytmConfig from '../../PaytmConfig';
export default class PaymentScreen extends Component{
    constructor(props){
        super(props);
        this.state={
          processing:false,
          amount:'10',
          cash:false,
          paytm:false,
          pressed:false,
        }
    }
    componentDidMount(){
      Paytm.addListener(Paytm.Events.PAYTM_RESPONSE, this._handlePaytmResponse)
        this.setState({order_id: this.randomString(6)});
    }
    componentWillUnmount(){
      Paytm.removeListener(Paytm.Events.PAYTM_RESPONSE, this.onPayTmResponse);
  }
    randomString(len) {
      var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      return [...Array(len)].reduce(a=>a+p[~~(Math.random()*p.length)],'');
   }
   _startPayment(){

    if(this.state.processing) return;
    var amount = parseInt(this.state.amount);

    if(amount == 0 || amount == ''){
        Alert.alert('Please select or enter a valid amount'); return;
    }
    if(amount < 10){
        Alert.alert('Minimum purchase limit is 10 rupees'); return;
    }
    if(amount > 1000){
        Alert.alert('Maximum purchase limit is 1000 rupees'); return;
    }

    amount = amount.toString(); //amount must be passed a string else paytm will crash if amount is int type

    this.setState({processing: true, payment_text: 'Requesting payment, please wait...'});
    var type = 1; //credit
    //start transaction, generate request from server

    var paytmConfig = PaytmConfig.DEMO;

    var body = JSON.stringify({
        MID: paytmConfig.MID,
        INDUSTRY_TYPE_ID: paytmConfig.INDUSTRYTYPEID,
        CHANNEL_ID: paytmConfig.CHANNELID,
        WEBSITE: paytmConfig.WEBSITE,
        CALLBACK_URL: paytmConfig.CALLBACKURL+this.state.order_id,
        MERCHANT_KEY: paytmConfig.MERCHANTKEY,
        ORDER_ID: this.state.order_id,
        CUST_ID: 'cust_1',
        TXN_AMOUNT: '10.0',
        EMAIL: 'mksingh.3671@gmail.com',
        MOBILE_NO: '8269262610',
    });
    var url = 'https://www.bike4everything.in/administrator/user_api/paytm/generateChecksumForReact.php';
    console.log(url+body)
    fetch(url, {
        method: 'POST',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: body
    })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(">>>"+JSON.stringify(responseJson));

            var CHECKSUM = responseJson.checksum;

            console.log(CHECKSUM);
            //28322.54 + 991.29 + 178.43 + 856.18 = 30,348.44

            var data = JSON.parse(body);

            var details = {
                //mode: 'Production',
                mode: 'Staging',
                MID: paytmConfig.MID,
                INDUSTRY_TYPE_ID: paytmConfig.INDUSTRYTYPEID, //Prod
                WEBSITE: paytmConfig.WEBSITE, //prod
                CHANNEL_ID: paytmConfig.CHANNELID,
                TXN_AMOUNT: data.TXN_AMOUNT,
                ORDER_ID: data.ORDER_ID,
                EMAIL: data.EMAIL,
                MOBILE_NO: data.MOBILE_NO,
                CUST_ID: data.CUST_ID,
                CALLBACK_URL: paytmConfig.CALLBACKURL+data.ORDER_ID,
                CHECKSUMHASH: CHECKSUM,
            };

            Paytm.startPayment(details);

        })
        .catch((error) => {
            console.log(error)
            this.setState({processing: false});
            Alert.alert('Error', 'Unable to initiate transaction, please try again');
        });
}
_handlePaytmResponse = (body) =>{

    var order_id = this.state.order_id;
    this.setState({processing: false, payment_text: ''});
    console.log(JSON.stringify(body));
    console.log(body.status);
    var temp=body;
    Alert.alert(
      'Order details',
      `Transaction was ${temp.status}`,
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
    var dada = {
        'status': 'Success',
        'RESPMSG': 'Txn Success',
        'BANKTXNID': '43653641',
        'PAYMENTMODE': 'PPI',
        'MID': 'DcDZSw87200390845530',
        'CHECKSUMHASH': 'EZNfcVrHMsU7Kn9tEU8e5erZo95chFdQUWVku30azc8wEzVfZ2iZXrJE31wjdc4+6Vc/5K7rRbJkXaV+Jy3VSMqk4qMh+4ADfaet+dxgOqo=',
        'GATEWAYNAME': 'WALLET',
        'CURRENCY': 'INR',
        'RESPCODE': '01',
        'TXNID': '20200207111212800110168611701269973',
        'TXNDATE': '2020-02-07 17:51:39.0',
        'TXNAMOUNT': '10.00',
        'ORDERID': 'Order_232412',
        'BANKNAME': 'WALLET',
        'STATUS': 'TXN_SUCCESS',
    };
}
    onPressCash(){
      this.setState({
        cash:true,
        paytm:false,
        pressed:true,
      });
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
        <TouchableNativeFeedback onPress={()=>{this._startPayment()}}>
        <View style={[styles.bottom,this.state.pressed?{opacity:1}:{opacity:0}]}>
          <Text style={styles.bottom_text}>
            {this.state.cash?"Place Order":"Pay Now"}
          </Text>
        </View>
        </TouchableNativeFeedback>
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