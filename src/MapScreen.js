import React, { Component } from 'react';
import { Animated,Text, View, ActivityIndicator, Button,StyleSheet,Dimensions,TouchableWithoutFeedback } from 'react-native';
import {Icon,Form, Item, Input, Label } from 'native-base';
import MapView ,{ PROVIDER_GOOGLE }from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
console.disableYellowBox = true;
export default class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation : new Animated.Value(0),
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
      regionChangeProgress: false
    };
    Geocoder.init("59c457bd2a254ab79ead4df79b957b1b ");

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
      { enableHighAccuracy: false, timeout: 5000, maximumAge: 5000 },
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
          console.log(JSON.stringify(responseJson.results[0].formatted));
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
    console.log(region);
    this.setState({
      region:region,
      regionChangeProgress: true

    }, () => this.fetchAddress());

  }
  // Action to be taken after select location button click
  onLocationSelect = () => alert(this.state.userLocation);
  render() {
    const transformStyle ={
      transform : [{ 
        translateY : this.state.animation,
      }]
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
             console.log("pressed");
             this.startAnimation();}}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "bold", fontFamily: "roboto", marginBottom: 20 }}>Set Delivery Location</Text>
            <Text style={{ fontSize: 10, color: "#999" }}>LOCATION</Text>
            </View>
            </TouchableWithoutFeedback>

            <Text numberOfLines={2} style={{ fontSize: 14, paddingVertical: 10, borderBottomColor: "silver", borderBottomWidth: 0.5 }}>
              {!this.state.regionChangeProgress ? this.state.userLocation : "Identifying Location..."}</Text>
              <Form>
                <Item floatingLabel >
              <Label>Area</Label>
              <Input onFocus={()=>{console.log('pressed area')}}/>
            </Item>
            <Item floatingLabel last>
              <Label>House/Flat No.</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Landmark</Label>
              <Input />
            </Item>
          </Form>
          <Text style={{ fontSize: 10, color: "#999" }}>SAVE AS</Text>
          <View style={{flexDirection:"row",justifyContent:'space-around',margin:10,}}>
          <Button title="Home"/>
          <Button title="Work"/>
          <Button title="Others"/>

          </View>
            <View style={styles.btnContainer}>
              <Button
                title="PICK THIS LOCATION"
                // disabled={this.state.regionChangeProgress}
                onPress={()=>{this.props.navigation.goBack()}}
                // onPress={this.onLocationSelect}
              >
              </Button>
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
    btnContainer: {
      width: Dimensions.get("window").width - 20,
    }
  
  });