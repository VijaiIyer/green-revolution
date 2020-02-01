import React, { Component } from "react";
import { Container, Header, Button,Left, Right,View, Tab, Tabs, Icon } from "native-base";
import {StyleSheet,ScrollView,Dimensions,Image} from "react-native";
import Tab1 from './tabOne';
import Tab2 from './tabTwo.js';
import Tab3 from './tabThree.js';


const { height, width } = Dimensions.get('window')

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { selectedIndex: 0 };
     }
       handleIndexChange = index => { this.setState(
                        {...this.state,selectedIndex: index}
                     );
                  };
render() 
  {
    return (
      <Container>
        <Header style={styles.header} >
        <Left>
            <Button transparent>
              <Icon type='MaterialCommunityIcons' name='arrow-back' />
            </Button>
          </Left>
         
          <Right>
            <Button transparent>
              <Icon type='MaterialCommunityIcons' name='search' />
            </Button>
            <Button transparent>
              <Icon type='MaterialCommunityIcons' name='heart' />
            </Button>
            <Button transparent>
              <Icon type='MaterialCommunityIcons' name='more' />
            </Button>
          </Right>
        
        </Header>
        <View style={{ height: 180, marginTop: 10 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                <Image source={require('../../assets/im/s8.png')}/>
                                <Image source={require('../../assets/im/s1.png')}/>
                                <Image source={require('../../assets/im/s7.png')}/>
                                <Image source={require('../../assets/im/s2.png')}/>
                                <Image source={require('../../assets/im/s6.png')}/>
                                <Image source={require('../../assets/im/s3.png')}/>
                                <Image source={require('../../assets/im/s5.png')}/>
                                <Image source={require('../../assets/im/s4.png')}/>
                            </ScrollView>
                        </View>
                    <Tabs tabBarUnderlineStyle={{backgroundColor:'black'}} tabStyle={{backgroundColor:'#fff',width: width-1000}} > 
                        
                        <Tab tabStyle={{backgroundColor:'#fff',width: width-1000}} 
                              activeTabStyle={{backgroundColor:'#fff',width: width-1000}} 
                              textStyle={{color:'black',fontSize: 18}}
                              activeTextStyle={{fontSize: 20,fontWeight: 'bold',color:'black'}}  heading  ="Breakfast" >
                          <Tab1 />
                         </Tab>
                        <Tab tabStyle={{backgroundColor:'#fff', width: width-1000}}  
                             activeTabStyle={{backgroundColor:'#fff',width: width-1000}} 
                             textStyle={{fontSize: 18,color:'black'}} 
                             activeTextStyle={{fontSize: 20,fontWeight: 'bold',color:'black'}} 
                             heading="Lunch">
                          <Tab2 />
                         </Tab>
                        <Tab tabStyle={{backgroundColor:'#fff',width: width-1000}} 
                             activeTabStyle={{backgroundColor:'#fff',width: width-1000}} 
                             textStyle={{color:'black',fontSize: 18}} 
                             activeTextStyle={{fontSize: 20,fontWeight: 'bold',color:'black'}}  heading="Dinner">
                               <Tab3 />
                         </Tab>
                       </Tabs>
 </Container>

  );
 }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#90a4ae',
    },
   footer: {
    top: '0.000000001%',
    right: '10%',
    bottom: '20%',
    left: '.01%',
    height:50,
    
      backgroundColor: 'black',
  },
  header: {
    backgroundColor: 'black',
    color: 'white',
    top: '.01%',
      right: '10%',
      bottom: '20%',
      left: '2%',
      height:90
      
  },
  txt:{
    color: 'black'
  
  },
  tabTextStyle: 
  {
    fontSize: 50,
      fontWeight: 'bold'
  
  }
  
  }); 