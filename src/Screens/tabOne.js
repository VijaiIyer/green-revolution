import React, { Component } from 'react';
import { Image } from "react-native";
import { Container, Header, Left, Body, Button, Icon, Title, Content, Card, CardItem, Thumbnail, View, Text, Right } from 'native-base';
import { StyleSheet,  SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';

export default class App extends Component {
  render(){
    return(
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity>
        <Content padder>
          <Card>
          <CardItem >
          <Image source={require('../../assets/im/c1.png')} style={{height: 220, width: null, flex: 1}}/>
            </CardItem>
            
            <CardItem bordered>
              <Left>
                <Thumbnail source={require('../../assets/im/veg.png')} />
                <Body>
                  <Text style={{fontSize: 22,fontWeight: 'bold'}}>Greek Salad</Text>
                  <Text note style={{fontSize: 15}}>With Honey and Lemon Dressing</Text>
                </Body>
              </Left>
            </CardItem>
            
            <CardItem >
            <Body>
              <Text note style={{fontSize: 15}}> 1 Day </Text>
                  <Text style={{fontSize: 22,fontWeight: 'bold'}}>₹100</Text>
                  <Text note style={{fontSize: 15}}>Per Meal</Text>
              </Body>
              <Body>
              <Text note style={{fontSize: 15}}> 3 Days </Text>
                  <Text style={{fontSize: 22,fontWeight: 'bold'}}> ₹90 <Text note style={{fontSize: 15,textDecorationLine: 'line-through'}}>100</Text> </Text>
                  <Text note style={{fontSize: 15}}>Per Meal</Text>
              </Body>
              
              <Body>
              <Text note style={{fontSize: 15}}> 7 Day </Text>
              <Text style={{fontSize: 22,fontWeight: 'bold'}}> ₹80 <Text note style={{fontSize: 15,textDecorationLine: 'line-through'}}>100</Text> </Text>
                  <Text note style={{fontSize: 15}}>Per Meal</Text>
              </Body>
                
            </CardItem>
            
          </Card>
        </Content>

        </TouchableOpacity>
        
        <TouchableOpacity>
        <Content padder>
          <Card>
          <CardItem >
          <Image source={require('../../assets/im/c2.png')} style={{height: 220, width: null, flex: 1}}/>
            </CardItem>
            
            <CardItem bordered>
              <Left>
                <Thumbnail source={require('../../assets/im/veg.png')} />
                <Body>
                  <Text style={{fontSize: 22,fontWeight: 'bold'}}>Greek Salad</Text>
                  <Text note style={{fontSize: 15}}>With Balasemic Vinaigrette</Text>
                </Body>
              </Left>
            </CardItem>
            
            <CardItem >
            <Body>
              <Text note style={{fontSize: 15}}> 1 Day </Text>
                  <Text style={{fontSize: 22,fontWeight: 'bold'}}>₹100</Text>
                  <Text note style={{fontSize: 15}}>Per Meal</Text>
              </Body>
              <Body>
              <Text note style={{fontSize: 15}}> 3 Days </Text>
                  <Text style={{fontSize: 22,fontWeight: 'bold'}}> ₹90 <Text note style={{fontSize: 15,textDecorationLine: 'line-through'}}>100</Text> </Text>
                  <Text note style={{fontSize: 15}}>Per Meal</Text>
              </Body>
              
              <Body>
              <Text note style={{fontSize: 15}}> 7 Day </Text>
              <Text style={{fontSize: 22,fontWeight: 'bold'}}> ₹80 <Text note style={{fontSize: 15,textDecorationLine: 'line-through'}}>100</Text> </Text>
                  <Text note style={{fontSize: 15}}>Per Meal</Text>
              </Body>
                
            </CardItem>
            
          </Card>
        </Content>
        </TouchableOpacity>
        <TouchableOpacity>
        <Content padder>
          <Card>
          <CardItem >
          <Image source={require('../../assets/im/c3.png')} style={{height: 220, width: null, flex: 1}}/>
            </CardItem>
            
            <CardItem bordered>
              <Left>
                <Thumbnail source={require('../../assets/im/veg.png')} />
                <Body>
                  <Text style={{fontSize: 22,fontWeight: 'bold'}}>Mediterranean Salad</Text>
                  <Text note style={{fontSize: 15}}>With Garlic Oil</Text>
                </Body>
              </Left>
            </CardItem>
            
            <CardItem >
            <Body>
              <Text note style={{fontSize: 15}}> 1 Day </Text>
                  <Text style={{fontSize: 22,fontWeight: 'bold'}}>₹100</Text>
                  <Text note style={{fontSize: 15}}>Per Meal</Text>
              </Body>
              <Body>
              <Text note style={{fontSize: 15}}> 3 Days </Text>
                  <Text style={{fontSize: 22,fontWeight: 'bold'}}> ₹90 <Text note style={{fontSize: 15,textDecorationLine: 'line-through'}}>100</Text> </Text>
                  <Text note style={{fontSize: 15}}>Per Meal</Text>
              </Body>
              
              <Body>
              <Text note style={{fontSize: 15}}> 7 Day </Text>
              <Text style={{fontSize: 22,fontWeight: 'bold'}}> ₹80 <Text note style={{fontSize: 15,textDecorationLine: 'line-through'}}>100</Text> </Text>
                  <Text note style={{fontSize: 15}}>Per Meal</Text>
              </Body>
                
            </CardItem>
            
          </Card>
        </Content>
        </TouchableOpacity>
        <TouchableOpacity>


        <Content padder>
          <Card>
          <CardItem >
          <Image source={require('../../assets/im/s4.png')} style={{height: 220, width: null, flex: 1}}/>
            </CardItem>
            
            <CardItem bordered>
              <Left>
                <Thumbnail source={require('../../assets/im/veg.png')} />
                <Body>
                  <Text style={{fontSize: 22,fontWeight: 'bold'}}>Char Grilled Vegitable with Fusilli Salad</Text>
                  <Text note style={{fontSize: 15}}>With Honey lemon Dressing</Text>
                </Body>
              </Left>
            </CardItem>
            
            <CardItem >
            <Body>
              <Text note style={{fontSize: 15}}> 1 Day </Text>
                  <Text style={{fontSize: 22,fontWeight: 'bold'}}>₹100</Text>
                  <Text note style={{fontSize: 15}}>Per Meal</Text>
              </Body>
              <Body>
              <Text note style={{fontSize: 15}}> 3 Days </Text>
                  <Text style={{fontSize: 22,fontWeight: 'bold'}}> ₹90 <Text note style={{fontSize: 15,textDecorationLine: 'line-through'}}>100</Text> </Text>
                  <Text note style={{fontSize: 15}}>Per Meal</Text>
              </Body>
              
              <Body>
              <Text note style={{fontSize: 15}}> 7 Day </Text>
              <Text style={{fontSize: 22,fontWeight: 'bold'}}> ₹80 <Text note style={{fontSize: 15,textDecorationLine: 'line-through'}}>100</Text> </Text>
                  <Text note style={{fontSize: 15}}>Per Meal</Text>
              </Body>
                
            </CardItem>
            
          </Card>
        </Content>
        </TouchableOpacity>
        <TouchableOpacity>

        <Content padder>
          <Card>
          <CardItem >
          <Image source={require('../../assets/im/c4.png')} style={{height: 220, width: null, flex: 1}}/>
            </CardItem>
            
            <CardItem bordered>
              <Left>
                <Thumbnail source={require('../../assets/im/veg.png')} />
                <Body>
                  <Text style={{fontSize: 22,fontWeight: 'bold'}}>Paneer Pesto Salad</Text>
                  <Text note style={{fontSize: 15}}>With Home Made Pesto Oil</Text>
                </Body>
              </Left>
            </CardItem>
            
            <CardItem >
            <Body>
              <Text note style={{fontSize: 15}}> 1 Day </Text>
                  <Text style={{fontSize: 22,fontWeight: 'bold'}}>₹100</Text>
                  <Text note style={{fontSize: 15}}>Per Meal</Text>
              </Body>
              <Body>
              <Text note style={{fontSize: 15}}> 3 Days </Text>
                  <Text style={{fontSize: 22,fontWeight: 'bold'}}> ₹90 <Text note style={{fontSize: 15,textDecorationLine: 'line-through'}}>100</Text> </Text>
                  <Text note style={{fontSize: 15}}>Per Meal</Text>
              </Body>
              
              <Body>
              <Text note style={{fontSize: 15}}> 7 Day </Text>
              <Text style={{fontSize: 22,fontWeight: 'bold'}}> ₹80 <Text note style={{fontSize: 15,textDecorationLine: 'line-through'}}>100</Text> </Text>
                  <Text note style={{fontSize: 15}}>Per Meal</Text>
              </Body>
                
            </CardItem>
            
          </Card>
        </Content>
        </TouchableOpacity>

  </ScrollView>
);
    }}
const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  }
});
    

  