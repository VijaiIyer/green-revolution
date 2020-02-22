import React, { Component } from 'react';
import {ToastAndroid} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Subtitle, Content,Button,Icon,Form,Item,Input,Label,Text} from 'native-base';
import axios from 'axios';
export default class RegisterScreen extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            name:'',
            mobile:'',
            password:'',
            email:'',
            referral_code:'',
            referral_visible:false,
        }
    }
    _handleRegister=()=>{
        axios.post('https://www.bookshippingtrucks.com/Projects-Works/SALAD-APP/MOBILE_APP/_Api_Register_Log.php', {
            "method":"Web_User_Signup",
            "name":this.state.name,
            "email":this.state.email,
            "mobile":this.state.mobile,
            "password":this.state.password,
          })
          .then((response) => {
            if(response.data.status==='200')
            {
              ToastAndroid.show('Registered Successfully', ToastAndroid.SHORT);
              this.props.navigation.goBack();
            }
            else
            {
              ToastAndroid.show('Account Already Exists', ToastAndroid.SHORT);
            }
            console.log(response.data);
          }, (error) => {
            console.log(error);
          });

    }
  render() {
    return (
      <Container>
        <Header>
          <Left >
          <Button transparent onPress={()=>{this.props.navigation.goBack()}}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>SignUp</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <Form style={{padding:10}}>
           <Item floatingLabel style={{borderColor:'black',width:'95%'}}>
             <Icon name='person'/>
              <Label style={{fontSize:12,marginLeft:10}}>Name</Label>
              <Input autoFocus={true}
                  value={this.state.name}
                  onChangeText={(value)=>{this.setState({name:value})}}
              />
            </Item>
            <Item floatingLabel style={{borderColor:'black',width:'95%'}}>
             <Icon type="MaterialCommunityIcons" name='email'/>
              <Label style={{fontSize:12,marginLeft:10}}>Email</Label>
              <Input 
                   value={this.state.email}
                  onChangeText={(value)=>{this.setState({email:value})}}
              />
            </Item>
            <Item floatingLabel style={{borderColor:'black',width:'95%'}}>
            <Icon type='Entypo' name='mobile'/>
              <Label style={{fontSize:12,marginLeft:10}}>Mobile Number</Label>
              <Input 
                   value={this.state.mobile}
                  onChangeText={(value)=>{this.setState({mobile:value})}}
              />
            </Item>
            <Item floatingLabel style={{borderColor:'black',width:'95%'}}>
             <Icon name='ios-key'/>
              <Label style={{fontSize:12,marginLeft:10}}>Password</Label>
              <Input 
                   value={this.state.password}
                   secureTextEntry={true}
                   textContentType="password"
                  onChangeText={(value)=>{this.setState({password:value})}}
              />
            </Item>
            
            {this.state.referral_visible &&
             <Item floatingLabel style={{borderColor:'black',width:'95%'}}>
              <Label style={{fontSize:12,marginLeft:10}}>Referral Code</Label>
              <Input 
                   value={this.state.referral_code}
                  onChangeText={(value)=>{this.setState({name:value})}}
              />
            </Item>

            }
            
          </Form>
          {!this.state.referral_visible&&
          <Button transparent style={{alignSelf:'center',marginTop:10}}onPress={()=>{this.setState({referral_visible:true})}}>
            <Text>Have a Referral Code ?</Text>
          </Button>
          }
          <Button style={{alignSelf:'center',marginTop:40}} onPress={()=>{this._handleRegister()}}>
            <Text>Register Now</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}