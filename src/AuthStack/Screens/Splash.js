import React, { Component } from 'react';
import { View, Text, StyleSheet,ImageBackground,Animated,ToastAndroid,AsyncStorage} from 'react-native';
import { Container,Button,Icon,Form,Item,Input,Label} from 'native-base';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';
export default class Splash extends Component {
  constructor(props)
  {
    super(props);
    this.state={isModalVisible: false,
      mobile:'',
      password:'',
      animation : new Animated.Value(0),};
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  _handleLogin=()=>{
    axios.post('https://www.bookshippingtrucks.com/Projects-Works/SALAD-APP/MOBILE_APP/_Api_Register_Log.php', {
      "method":"Web_User_Login",
      "mobile":this.state.mobile,
      "password":this.state.password,
    })
    .then((response) => {
      if(response.data.message==='Success')
      {
         console.log(response.data.result[0]);
         global.user_detail=response.data.result[0];
         AsyncStorage.setItem('User_details',JSON.stringify(global.user_detail));
         this.props.navigation.navigate('App');
      }
      else
      {
        ToastAndroid.show('Account Not Found', ToastAndroid.SHORT);
      }
      console.log(response.data);
    }, (error) => {
      console.log(error);
    });
  }
      async componentDidMount()
      {
        AsyncStorage.getItem('User_details')
        .then((value)=>{
          if(value!==null)
          {
            global.user_detail=JSON.parse(value);
            this.props.navigation.navigate('App');
          }
        })
      }
  render(){
    const translate = {
      from: {
        transform : [{ 
          translateY : 80,
        }]
      },
      to: {
        transform : [{ 
          translateY : -50,
        }]
      },
    };
    return(
            <Container style={styles.wrapper}>
                <ImageBackground source={require('../../../assets/im/b4.png')} style={styles.background_image}>
                <Animatable.View animation={translate} duration={2000} delay={2500}>
                <Animatable.View animation='zoomInUp' duration={2000} style={styles.logo}>
                    <Animatable.Image style={{ width: 100, height: 100 }} source={require('../../../assets/im/GR_Logo_Black_Short.png')}/>
                    <Animatable.Text animation='fadeIn' delay={1500} duration ={2000} style={styles.title}>Welcome to Green Revolution</Animatable.Text>
                    </Animatable.View>
                </Animatable.View>
               <Animatable.View animation='fadeIn' delay={4500} duration ={2000} style={{width:'100%',paddingHorizontal:10,marginTop:-50}}>
               <Form style={{width:'100%',marginLeft:-10}}>
                    <Item floatingLabel style={{borderColor:'black'}}>
                      <Icon name='person'/>
                        <Label style={{fontSize:12,marginLeft:10}}>Mobile Number</Label>
                        <Input
                            value={this.state.mobile}
                            keyboardType='phone-pad'
                            maxLength={10}
                            onChangeText={(value)=>{this.setState({mobile:value})}}
                        />
                      </Item>
                      <Item floatingLabel style={{borderColor:'black'}}>
                      <Icon type='Entypo' name='mobile'/>
                        <Label style={{fontSize:12,marginLeft:10}}>Password</Label>
                        <Input 
                            value={this.state.password}
                            secureTextEntry={true}
                            textContentType={'password'}
                            onChangeText={(value)=>{this.setState({password:value})}}
                        />
                      </Item>
            </Form>
            <Button full style={{alignSelf:'center',marginTop:40,width:'100%'}} onPress={()=>{this._handleLogin()}}>
            <Text style={{color:'white',fontWeight:'bold'}}>Login</Text>
          </Button>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Button transparent style={{alignSelf:'center',marginTop:10}} onPress={()=>{this.props.navigation.navigate('Register')}}>
            <Text>Create Account</Text>
          </Button>
          <Button transparent style={{alignSelf:'center',marginTop:10}}onPress={()=>{this.setState({referral_visible:true})}}>
            <Text>Forgot Password</Text>
          </Button>
          </View>
               </Animatable.View>
               </ImageBackground>
             </Container>
    );
  }
}
 
const styles = StyleSheet.create(
    {
          
        wrapper: {
           
            backgroundColor: '#90a4ae',
            justifyContent: 'center',
            alignItems: 'center', 
            
        },
        background_image:{
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        },
        title:{
            color: 'black',
            fontSize: 22,
            fontWeight: 'bold',
            textAlign:"center",
        },
        logo: {
          width:'100%',
          alignItems:'center',
          justifyContent:'center',
        }

        
    }
);

