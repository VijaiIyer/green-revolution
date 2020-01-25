import React, { Component } from 'react';
import { Animated,Text, View, ActivityIndicator,StyleSheet,Dimensions,TouchableWithoutFeedback, ToastAndroid, TouchableNativeFeedback } from 'react-native';
import {Icon,Form, Item, Input, Label } from 'native-base';
import MapView ,{ PROVIDER_GOOGLE }from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
console.disableYellowBox = true;
var item,index;
export default class MapScreen extends Component {
  constructor(props) {
    super(props);
    item=this.props.navigation.state.params.item;
    index=this.props.navigation.state.params.index;
    ToastAndroid.show('Edit Screen', ToastAndroid.SHORT);
    this.state = {
      animation : new Animated.Value(0),
      scale_animationValue : [new Animated.Value(1),new Animated.Value(1),new Animated.Value(1)],
      start:true,
      loading: true,
      region: {
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
      },
      isMapReady: false,
      marginTop: 1,
      userLocation: "",
      regionChangeProgress: false,
      house:item.house,
      landmark:item.landmark,
      name:item.name,
    };
    this.startAnimation();
    Geocoder.init("59c457bd2a254ab79ead4df79b957b1b ");
  }
  startScaleAnimation=(index)=>{
 
    Animated.timing(this.state.scale_animationValue[index], {
      toValue : 1.2,
      timing : 200
    }).start(()=>{
      Animated.timing(this.state.scale_animationValue[index],{
        toValue : 1,
        duration : 200
      }).start();
    })
  }
 startAnimation=()=>{
    let Value=-200;
     Animated.timing(this.state.animation,{
       toValue : Value,
       duration : 1000
     }).start(()=>{
       this.setState({start:!this.state.start});
       //this.state.animation.setValue(0);
       //If you remove above line then it will stop the animation at toValue point
     });
 }
 closeAnimation=()=>{
     let Value=0;
    Animated.timing(this.state.animation,{
      toValue : Value,
      duration : 1000
    }).start(()=>{
      this.setState({start:!this.state.start});
      //this.state.animation.setValue(0);
      //If you remove above line then it will stop the animation at toValue point
    });
}



  componentWillMount() {

    Geolocation.getCurrentPosition(

      (position) => {

        const region = {

          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,

        };

        this.setState({
          region: region,
          loading: false,
          error: null,
        });
      },
      (error) => {
        alert(error);
        this.setState({
          error: error.message,
          loading: false
        })
      },
      { enableHighAccuracy: false, timeout: 1000},
    );
  }
  onMapReady = () => {
    this.setState({ isMapReady: true, marginTop: 0 });

  }



  // Fetch location details as a JSON from google map API

  fetchAddress = () => {
    fetch("https://api.opencagedata.com/geocode/v1/json?q=" + this.state.region.latitude + "+" + this.state.region.longitude + "&key=" +"59c457bd2a254ab79ead4df79b957b1b")
      .then((response) => response.json())
      .then((responseJson) => {
         // console.log(JSON.stringify(responseJson.results[0].formatted));
        const userLocation = responseJson.results[0].formatted;
        this.setState({
          userLocation: userLocation,
          regionChangeProgress: false
        });
      });
  }



  // Update state on region change

  onRegionChange = region => {
    this.closeAnimation();
    //console.log(region);
    this.setState({
      region:region,
      regionChangeProgress: true,
    }, () => this.fetchAddress());

  }
  render() {
    const transformStyle ={
      transform : [{ 
        translateY : this.state.animation,
      }]
    }
    const animatedHome = {
      transform : [
        {
          scale : this.state.scale_animationValue[0]
        }
      ]
     }
     const animatedWork = {
      transform : [
        {
          scale : this.state.scale_animationValue[1]
        }
      ]
     }
     const animatedOther = {
      transform : [
        {
          scale : this.state.scale_animationValue[2]
        }
      ]
     }
    if (this.state.loading) {
      return (
        <View style={styles.spinnerView}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Animated.View style={[styles.mapSection,transformStyle]}>
            {!!this.state.region.latitude && !!this.state.region.longitude &&
              <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{ ...styles.map, marginTop: this.state.marginTop }}
                initialRegion={this.state.region}
                showsUserLocation={true}
                showsMyLocationButton={true}
                onMapReady={this.onMapReady}
                onRegionChangeComplete={this.onRegionChange}
              >
              </MapView>

            }
            <View style={styles.mapMarkerContainer}>
              <Icon name='ios-flag'/>
            </View>
          </Animated.View>
          <Animated.View  style={[styles.detailSection,transformStyle]}>
          <TouchableWithoutFeedback onPress={()=>{
            // console.log("pressed");
             this.startAnimation();}}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "bold", fontFamily: "roboto", marginBottom: 20 }}>Set Delivery Location</Text>
            <Text style={{ fontSize: 10, color: "#999" }}>LOCATION</Text>
            </View>
            </TouchableWithoutFeedback>

            <Text numberOfLines={2} style={{ fontSize: 14, paddingVertical: 10, borderBottomColor: "silver", borderBottomWidth: 0.5 }}>
              {!this.state.regionChangeProgress ? this.state.userLocation : "Identifying Location..."}</Text>
              <Form style={{marginLeft:-15}}>
            <Item floatingLabel last>
              <Label style={{ fontSize: 12, color: "#999"}}>House/Flat No.</Label>
              <Input 
                style={{fontSize:14}}
                value={this.state.house}
                onChangeText={(value)=>{this.setState({house:value})}}
              />
            </Item>
            <Item floatingLabel last>
              <Label style={{ fontSize: 12, color: "#999"}}>Landmark</Label>
              <Input 
                style={{fontSize:14}}
                value={this.state.landmark}
                onChangeText={(value)=>{this.setState({landmark:value})}}
              />
            </Item>
          </Form>
          <Text style={{ fontSize: 10, color: "#999",marginVertical:10 }}>SAVE AS</Text>
          <View style={{flexDirection:"row",justifyContent:'space-between',margin:10,}}>
          <TouchableWithoutFeedback onPress={()=>{
            this.startScaleAnimation(0);
            this.setState({name:'Home'})}}>
            <Animated.View style={[styles.animatedBox,(this.state.name==='Home')?animatedHome:{scale:1}]}>
            {(this.state.name==='Home')? <Icon  name="home" style={{color:'black'}}/>: <Icon  name="home" style={{color:'lightgrey'}}/>}
              <Text style={{textAlignVertical:'center',marginLeft:3}}>Home</Text>
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={()=>{
            this.startScaleAnimation(1);
            this.setState({name:'Work'});}}>
            <Animated.View style={[styles.animatedBox,(this.state.name==='Work')?animatedWork:{scale:1}]}>
              {(this.state.name==='Work')? <Icon  name="briefcase" style={{color:'black'}}/>: <Icon  name="briefcase" style={{color:'lightgrey'}}/>}
              <Text style={{textAlignVertical:'center',marginLeft:3}}>Work</Text>
              </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={()=>{
            this.startScaleAnimation(2);
            this.setState({name:'Other'})}}>
            <Animated.View style={[styles.animatedBox,(this.state.name==='Other')?animatedOther:{scale:1}]}>
            {(this.state.name==='Other')? <Icon  name="locate" style={{color:'black'}}/>: <Icon  name="locate" style={{color:'lightgrey'}}/>}
              <Text style={{textAlignVertical:'center',marginLeft:3}}>Other</Text>
              </Animated.View>
          </TouchableWithoutFeedback>
          </View>
            <View style={styles.btnContainer}>
              <TouchableNativeFeedback
                onPress={()=>{
                  this.props.navigation.state.params.edit_Address({
                    name:this.state.name,
                    house:this.state.house,
                    landmark:this.state.landmark,
                    location:this.state.userLocation,
                  },index);
                  this.props.navigation.goBack();}}
              >
              <View style={{backgroundColor:'orange',width:'100%',margin:20,alignItems:"center",padding:10,alignSelf:'center'}}>
              <Text  style={{textAlignVertical:"center",textAlign:'center',fontSize:16,fontWeight:'bold',color:'white'}}>Save Changes</Text>
              </View>
              </TouchableNativeFeedback>
            </View>
          </Animated.View>  
        </View>

      );
    }
  }
}
const styles = StyleSheet.create({

    container: {
      display: "flex",
      height: '100%',  
      width: Dimensions.get("screen").width
  
    },
    mapSection:{
      flex:2,
    },
    map: {
      flex: 1
    },
  
    mapMarkerContainer: {
  
      left: '47%',
  
      position: 'absolute',
  
      top: '42%'
  
    },
  
    mapMarker: {
      fontSize: 40,
      color: "red"
    },
    detailSection: {
      flex:1,
      backgroundColor: "#fff",
      padding: 10,
      justifyContent: "flex-start",
      position:'absolute',
      bottom:-200,
    },
    spinnerView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    animatedBox:{
       flexDirection:'row',
    },
    btnContainer: {
      width: Dimensions.get("window").width - 20,
    }
  
  });