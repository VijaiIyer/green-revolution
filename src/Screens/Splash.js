import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';



export default class Splas extends Component {
    performTimeConsumingTask = async () => {
        return new Promise(resolve =>
          setTimeout(() => {
            resolve('result');
          }, 3000),
        );
      };
      async componentDidMount()
      {
        const data = await this.performTimeConsumingTask();
        if (data !== null) {
          this.props.navigation.navigate('App');
        }
      }
  render(){
    return(
      <View style={styles.wrapper}>
                <ImageBackground source={require('../../assets/im/b4.png')} style={{width: '100%', height: '100%'}}>
                
                <View style={styles.logo}>
                    <Image style={{ width: 200, height: 201 }} source={require('../../assets/im/GR_Logo_Black_Short.png')}>
                    </Image>
                </View>
            
             <View styles={styles.titlewrapper}>
                    <Text style={styles.title}>Welcome to Green Revolution</Text>
             </View>
             </ImageBackground>
 
            </View>
        
    );
  }
}
 
const styles = StyleSheet.create(
    {
          
        wrapper: {
           
            backgroundColor: '#90a4ae',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center', 
            
        },
        title:{
            color: 'black',
            fontSize: 24,
            fontWeight: 'bold',
            top: '1200%',
            right: '10%',
            bottom: '20%',
            left: '10%',

            
        },
      
        titlewrapper:{
            backgroundColor: 'black', 
            top: '70%',
            right: '10%',
            bottom: '20%',
            left: '3%',
        },
        logo: {
            width:350,
            height:45,
            top: '90%',
            right: '10%',
            bottom: '20%',
            left: '14%',
            marginBottom:20,
            flexDirection: 'row',
            alignItems:'center',

        }

        
    }
);

