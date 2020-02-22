import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  View,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { Container, Header, Title, Button, Left, Right, Body,Icon } from "native-base";
// import firebase from 'react-native-firebase';
//import Loader from '../Components/Loader';
//import Icon from 'react-native-vector-icons/Entypo';
import CountDown from 'react-native-countdown-component';
export default class OtpScreen extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.phoneNumber = this.props.navigation.state.params.phoneNumber; //Read received phone number
    this.state = {
      user: null,
      message: '',
      codeInput: '',
      phoneNumber: `+91${this.phoneNumber}`,
      confirmResult: null,
      loader_visible: false,
      timer: 20,
      resend: false,
    };
    //.signIn();
  }
  signIn = () => {
    console.log('sign in');
    const {phoneNumber} = this.state;
    this.setState({message: 'Sending code '});
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, false, 60)
      .then(confirmResult => {
        this.setState({confirmResult, message: 'Code has been sent!'});
        ToastAndroid.show(this.state.message, ToastAndroid.SHORT);
      })
      .catch(error =>
        this.setState({
          message: 'Sign In With Phone Number Error',
        }),
      );
  };
  resendCode = () => {
    const {phoneNumber} = this.state;
    this.setState({message: 'Resending code ', timer: 60, resend: false});
    firebase.auth().signInWithPhoneNumber(phoneNumber, true, 60);
  };

  confirmCode = () => {
    console.log('Confirm code');
    const {codeInput, confirmResult} = this.state;
    if (confirmResult && codeInput.length) {
      this.setState({loader_visible: true});
      confirmResult
        .confirm(codeInput)
        .then(user => {
          this.setState({message: 'Code Confirmed!', loader_visible: false});
        })
        .catch(error =>
          this.setState({message: 'Code Confirm Error', loader_visible: false}),
        );
    }
  };
  onTimerElapsed = () => {
    this.setState({timer: 0, resend: true});
  };

  render() {
    return (
    <Container>
    <Header span>
          <Left>
          <Button transparent  onPress={()=>{this.props.navigation.navigate('Splash')}}>
              <Icon name="arrow-back" />
            </Button>
          <View style={{width:200}}>
            <Text style={{marginLeft:10,fontSize:22,fontWeight:"bold",color:'white'}}>VERIFY DETAILS</Text>
            <Text style={{color:'grey',marginLeft:10}}> OTP sent to {this.state.phoneNumber}</Text>
            </View>
          </Left>
          <Body>
            {/* <Title>VERIFY DETAILS</Title>
            <Text> OTP sent to {this.state.phoneNumber}</Text> */}
          </Body>
        </Header>
      <ScrollView contentContainerStyle={styles.main_otp} scrollEnabled={true}>
        <Text style={styles.text_otp}>Enter OTP</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
        </View>
        <View styles={styles.otp_view}>
          <OTPInputView
            style={styles.input_view}
            pinCount={6}
            code={this.state.codeInput} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            onCodeChanged={value => this.setState({codeInput: value})}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
          />
          <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
             <CountDown
            style={{height: 10 ,marginTop:14}}
            digitStyle={{backgroundColor: 'white'}}
            digitTxtStyle={{color: 'orange',fontSize:17,fontWeight:'100'}}
            timeToShow={['M', 'S']}
            timeLabelStyle={{backgroundColor:'white'}}
            until={this.state.timer}
            onFinish={() => this.setState({timer: 0, resend: true})}
            size={12}
            separatorStyle={{
              color: 'orange',
              marginTop: -15,
              marginHorizontal: -10,
            }}
            showSeparator
          />
            <TouchableOpacity
              disabled={!this.state.resend}
              style={{alignSelf: 'center'}}
              onPress={() => {
                this.resendCode();
              }}>
              <Text style={{fontSize: 16, color:this.state.resend?'orange':'grey', margin: 10,textAlignVertical:'center'}}>Resend</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('App');
            this.confirmCode();
          }}>
           <View style={{backgroundColor:'#e65100',alignItems:'center',justifyContent:'center',padding:10,marginTop:20,borderRadius:4}}>
                    <Text style={{fontSize:18,color:'white',textAlign:'center',textAlignVertical:'center'}}>VERIFY AND PROCEED</Text>
                </View>
        </TouchableOpacity>
        {this.state.loader_visible && (
          <Loader
            modalVisible={true}
            animationType="fade"
            title="Verifying OTP"
          />
        )}
      </ScrollView>
</Container>
    );
  }
}
const styles = StyleSheet.create({
  main_otp: {
    paddingVertical: 10,
    paddingHorizontal:10,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  text_otp: {fontSize: 16, fontWeight: 'bold', color: 'black'},
  text_2: {fontSize: 16, color: 'orange', margin: 10,textAlignVertical:'center'},
  child: {marginVertical: 100, flexDirection: 'row'},
  button_otp: {
    backgroundColor: 'orange',
    fontSize: 20,
    borderColor:'white',
    borderWidth: 1,
    color: 'white',
    fontWeight:'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  otp_view: {
      backgroundColor:'pink',
    position: 'absolute',
    left: '50%',
    top: '10%',
    marginLeft: -150,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: 'black',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: 'orange',
    borderBottomWidth:3,
  },
  input: {
    backgroundColor: '#000000',
    color: 'black',
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 5,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  input_view: {
    height:100,
    marginTop:-10,
  },
});
