import React, { Component } from 'react';

import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity, Animated, Dimensions, Keyboard } from 'react-native';
import * as Animatable from 'react-native-animatable'
import {Icon} from 'native-base'
const SCREEN_HEIGHT = Dimensions.get('window').height


export default class Login extends Component {

  static navigationOptions = {
    header: null
  }
  constructor(){
    super()
    this.state= {
      placeholderText: 'Enter your mobile number'}
       }  

  increaseHeightofLogin =()=>{
    
    this.setState({placeholderText:'Enter your mobile number'})
    Animated.timing(this.loginHeight,{
      toValue: SCREEN_HEIGHT,
      duration: 500
    }).start(()=> {
      this.refs.textInputMobile.focus()
    })

  }
  componentWillMount(){
    this.loginHeight = new Animated.Value(150)
  }
  decreaseHeightofLogin =() =>{
    Keyboard.dismiss()
      Animated.timing(this.loginHeight,{
      toValue: 150,
      duration: 500
    }).start()

  }
  
    
  render(){

    const headerTextOpacity = this.loginHeight.interpolate({
      inputRange: [150,SCREEN_HEIGHT],
      outputRange: [1,0]
     })

      const marginTop = this.loginHeight.interpolate({
        inputRange: [150,SCREEN_HEIGHT],
        outputRange: [25,100] 
      })

      const headerBackArrowOpacity = this.loginHeight.interpolate({
        inputRange: [150,SCREEN_HEIGHT],
        outputRange: [0,1]
       })

       


    return(
      <View style={{flex:1}}>
      <ImageBackground source={require('../../assets/im/n.png')} style={{flex:1}}>

          <Animated.View style={{position:'absolute',height: 60, width: 60, left:25, top:60, zIndex:100, opacity: headerBackArrowOpacity  }}>
          <TouchableOpacity onPress = {()=> this.decreaseHeightofLogin()}>
          <Icon name="md-arrow-back" style={{color:'black'}}/></TouchableOpacity>
          </Animated.View>

          <Animated.View style={{position:'absolute',height: 60, width: 60, right:-15, bottom:-13, zIndex:100, opacity: 1  }}>
          
          <Icon name="md-arrow-forward" style={{color:'black'}}/>
          </Animated.View>
           
            {/** Top part **/}
                    <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                     <View style={{  justifyItems:'center', alignItems: 'center', height: 100, width:100}}>
                       <Text></Text>
                     </View>
                  </View>

                  {/** Bottom part **/}
                  {/** part 1 **/}


                  <Animatable.View animation="slideInUp" iterationCount={1}>
                    
                    <Animated.View style={{height: this.loginHeight, backgroundColor: '#fff'}}>
                      <Animated.View style={{alignItems: 'flex-start', paddingHorizontal: 25, marginTop: marginTop, opacity: headerTextOpacity }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#e65100' }}> Welcome Salad Days into your life </Text>
                      </Animated.View>

                     <TouchableOpacity onPress = {()=> this.increaseHeightofLogin()}>
                          
                          <View style={{ marginTop:25,paddingHorizontal: 25, flexDirection: 'row'}}>

                          <Image source={require('../../assets/im/index.png')} style={{height:40, width:40, resizeMode: 'contain'}}></Image>
                        
                           <View pointerEvents="none" style={{flex:1, flexDirection: 'row' }}>
                              <Text style={{fontSize: 20, paddingHorizontal: 10, paddingVertical: 5 }}> +91 </Text>
                              <TextInput keyboardType="numeric" ref="textInputMobile" style={{flex:1, fontSize: 20}} placeholder={this.state.placeholderText}></TextInput>
                           </View>
                        
                        </View>

                      </TouchableOpacity>

                    </Animated.View>

                    {/**part 2**/}
                    <View style={{ height: 70, backgroundColor: '#fff',justifyContent:'center', alignItems: 'flex-start', borderTopColor: '#8e8ec', borderTopWidth:1, paddingHorizontal: 5}}>
                      <Text style={{color: '#e65100', fontWeight: 'bold', fontSize: 15 }}> Login/Create Account quickly to manage orders </Text>
                    </View>
                  </Animatable.View>
 
                </ImageBackground>

              
            </View>
        
    );
  }

}
 
