import React, {Component} from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Animated,Text ,Dimensions,Button} from 'react-native';
import {Form, Item, Input, Label } from 'native-base';
export default class App extends Component {
 
  constructor(){
    super();
    this.state={
      animation : new Animated.Value(0),
      start:true,
    }
  }
 toggle_state=()=>{
     console.log("toggled.....");
     this.startAnimation();
 }
  startAnimation=()=>{
      if(this.state.start)
      {
        console.log("start -up");
      Animated.timing(this.state.animation,{
        toValue : -200,
        duration : 1000
      }).start(()=>{
        this.setState({start:!this.state.start});
        //this.state.animation.setValue(0);
        //If you remove above line then it will stop the animation at toValue point
      });
    }
    else
    {console.log("start down");
        Animated.timing(this.state.animation,{
            toValue : 0,
            duration : 1000
          }).start(()=>{
            this.setState({start:!this.state.start});
            //this.state.animation.setValue(0);
            //If you remove above line then it will stop the animation at toValue point
          });
    }

 
  }
 
  render() {
    const transformStyle ={
      transform : [{ 
        translateY : this.state.animation,
      }]
    }
 
    return (
         <TouchableWithoutFeedback onPress={()=>{
             console.log("pressed");
             this.toggle_state();}}>
            <View style={styles.MainContainer}>

           <Animated.View  style={[styles.detailSection,transformStyle]}>
            <Text style={{ fontSize: 16, fontWeight: "bold", fontFamily: "roboto", marginBottom: 20 }}>Set Delivery Location</Text>
            <Text style={{ fontSize: 10, color: "#999" }}>LOCATION</Text>

            <Text numberOfLines={2} style={{ fontSize: 14, paddingVertical: 10, borderBottomColor: "silver", borderBottomWidth: 0.5 }}>
              {!this.state.regionChangeProgress ? this.state.userLocation : "Identifying Location..."}</Text>
              <Form>
                <Item floatingLabel>
              <Label>Area</Label>
              <Input />
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
         </TouchableWithoutFeedback>  
 
        
    );
  }
};
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems : 'center',
  },
  animatedBox:{
     width : 190,
     height: 190,
     position:'absolute',
     bottom:-100,
     backgroundColor : ('#2E7D32')
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