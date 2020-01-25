
import React, { Component } from "react";
import { StyleSheet} from "react-native";
import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';
import axios from 'axios';


class LocationA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 22.719659,
      longitude: 75.865296,
      error: null,
      concat: null,
      coords:[],
      x: 'false',
      cordLatitude:22.719659,
      cordLongitude:75.865296,
    };

    this.mergeLot = this.mergeLot.bind(this);

  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
       (position) => {
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
        this.mergeLot();
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );

   }

  mergeLot(){
    if (this.state.latitude != null && this.state.longitude!=null)
     {
       let concatLot = this.state.latitude +","+this.state.longitude
       
       console.log(concatLot);
       this.setState({
         concat: concatLot
       }, () => {
         this.getDirections(concatLot, "22.719659,75.865296");
       });
     }

   }

   async getDirections(startLoc, destinationLoc) {
           var points=[];
         try {
            axios.get(`https://api.tomtom.com/routing/1/calculateRoute/${ startLoc }:${ destinationLoc }/json?avoid=unpavedRoads&key=osfdapA16fAmFI3gseCRgl8W2EGkioVA`)
            .then((response) => {
               //console.log(JSON.stringify(response));
            points=response.data.routes[0].legs[0].points;
            console.log(points);
           })
            .catch((error) => {
              console.error(error);
            });
            //  let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }`)
            //  let respJson = await resp.json();
            //  let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
            //  let coords = points.map((point, index) => {
            //      return  {
            //          latitude : point[0],
            //          longitude : point[1]
            //      }
            //  })
             this.setState({coords: points})
             this.setState({x: "true"})
             return points;
         } catch(error) {
           console.log('masuk fungsi')
             this.setState({x: "error"})
             console.log(error);
             return error
         }
     }
  render() {
    return (
      <MapView style={styles.map} initialRegion={{
       latitude:this.state.latitude,
       longitude:this.state.longitude,
       latitudeDelta: 0.1,
       longitudeDelta: 0.1
      }}>
      {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
         coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
         title={"Your Location"}
       />}
       {!!this.state.cordLatitude && !!this.state.cordLongitude && <MapView.Marker
          coordinate={{"latitude":this.state.cordLatitude,"longitude":this.state.cordLongitude}}
          title={"Your Destination"}
        />}
       {!!this.state.latitude && !!this.state.longitude && this.state.x == 'true' && <MapView.Polyline
            coordinates={this.state.coords}
            strokeWidth={2}
            strokeColor="red"/>
        }
        {!!this.state.latitude && !!this.state.longitude && this.state.x == 'error' && <MapView.Polyline
          coordinates={[
              {latitude: this.state.latitude, longitude: this.state.longitude},
              {latitude: this.state.cordLatitude, longitude: this.state.cordLongitude},
          ]}
          strokeWidth={2}
          strokeColor="red"/>
         }
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default LocationA;