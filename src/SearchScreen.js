import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title ,Input,Item,Label} from 'native-base';
import {Text,View ,TouchableWithoutFeedback,ScrollView} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import SearchItem from './SearchItem';
import _ from 'lodash';


export default class HeaderIconExample extends Component {
  constructor(props){
    super(props);
    this.state={
      destination:'',
      longitude:'',
      latitude:'',
      predictions:[],
    }
    this.onChangeSearchDebounce=_.debounce(this.onChangeSearch,1000);
  }
  onChangeSearch=(search)=>{
      fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyB3YASMqLMW6iMPBgVA-Wd470CzSL7WAMI&&input=${search}&&location=${this.state.latitude},${this.state.longitude}&&radius=500000`)
        .then(response => response.json())
        .then((responseJson)=> {
          console.log(responseJson.predictions);
          this.setState({predictions:responseJson.predictions})
        })
        .catch((error)=>{console.log(error)});//to catch the errors if any
  }
  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
       this.setState({latitude: position.coords.latitude,
        longitude: position.coords.longitude,});
      },
      (error) => {
        alert(error);
        this.setState({
          error: error.message,
        })
      },
      { enableHighAccuracy:true, timeout: 1000},
    );
  }
  render() {
   // const predictions=this.state.predictions.map((item)=>{<SearchItem {...this.props} name={item.structured_formatting.main_text} address={item.structured_formatting.secondary_text}/>}
   console.log(this.state.predictions);
    return (
      <View style={{flex:1}}>
        <Header style={{backgroundColor:'white'}}>
        <View style={{flex:1,flexDirection:'row',alignItems:"center"}}>
          <TouchableWithoutFeedback  onPress={()=>{this.props.navigation.goBack()}}>   
          <Icon name='arrow-back' style={{padding:10}}/>
          </TouchableWithoutFeedback>
          <Item stackedLabel style={{paddingTop:10}}>
          <Label style={{fontSize:10,color:'orange'}}>SET DELIVERY LOCATION</Label>
          <Input
          style={{marginTop:-15,marginLeft:-5}}
            placeholder='Search for area,street name....'
            placeholderTextColor="#cbcbcb"
            value={this.state.destination}
            onChangeText={(value)=>{
              this.setState({destination:value});
              this.onChangeSearchDebounce(value);}}
          />
            </Item>
          </View>
        </Header>
        <ScrollView>
            <View style={{zIndex:5}}>
            {this.state.predictions.map((item)=>{return <SearchItem {...this.props} name={item.structured_formatting.main_text} address={item.structured_formatting.secondary_text}/>})}
            </View>
         <SearchItem name='Current Location' address='Using GPS'/>
         <View style={{backgroundColor:'black',height:1,marginHorizontal:20}}/>
         <View style={{marginVertical:10,paddingHorizontal:20}}>
         <Text style={{fontWeight:'bold'}}>Saved Address</Text>
        </View>
        </ScrollView>
</View>
    );
  }
}