import React, {Component}  from 'react';
import { TouchableNativeFeedback,StyleSheet, Text, View, ScrollView,Image,ImageBackground,CheckBox,Alert} from 'react-native';
import {Card, CardItem, Body } from 'native-base';
import Modal from "react-native-modal";
import SlotItem from '../Components/SlotItem'
import DateModal from '../Components/DateModal'
const def=[false,false,false,false]
export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      pressed:[true,false,false,false],
      isModalVisible: false,
    }
  }
  getListViewItem = (item) => {  
    Alert.alert(item.key);  
   }
  updatePressed=(index)=>{
    let t=[false,false,false,false];
    this.setState({pressed:t});
    console.log(this.state.pressed);
    t[index]=true;
    console.log(t);
    this.setState({pressed:t});
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
render(){
  const {product,item}=this.props.navigation.state.params
    return(
            <View>
                <ScrollView style={{height: '100%', backgroundColor: '#eeeeee' }}>
                     <ImageBackground source={require('../../../assets/im/delish-190611-mandarin-orange-salad-274-portrait-pf-1561556606.png')} style={{height: 200, width: null, flex: 1}}/>
                           <Card style={{width:'95%',marginTop:-30,alignSelf:'center'}}>
                            <CardItem bordered> 
                              <Body>
                              <View>
                                <Text style={{fontSize: 22,fontWeight: 'bold'}}>Greek Salad</Text>
                                <Text note style={{fontSize: 15, color: '#757575'}}>With halwa</Text>
                                <Text note style={{fontSize: 15, color: '#757575'}}>By Chef Gaurav Sharma(Mitchelin 3 star)</Text>
                              </View>
                             </Body>
                            </CardItem>
                            <CardItem>
                            <Body style={{flexDirection:"row",justifyContent:'space-between',paddingHorizontal:10,paddingVertical:5}}>
                              <View>
                              <Text style={{color:'#bbbbbb',textAlignVertical:'center'}}>3 days</Text>
                              <Text><Text style={{fontSize:20,fontWeight:'bold'}}>60.00</Text><Text>/meal</Text></Text>
                              </View>
                              <View  style={{alignItems:'flex-end'}}>
                              <Text>Total</Text>
                              <Text><Text style={{fontSize:20,fontWeight:'bold'}}>180.00</Text></Text>
                              </View>
                            </Body>
                            </CardItem>
                           </Card>
                    <View style={{backgroundColor: '#fff',marginTop:20,padding:10}}>
                    <View style={{marginBottom:10}}>
                       <Text style= {{ fontSize: 22,fontWeight: 'bold'}}> Select Plan Duration</Text>
                       <View style={{height: 2, width: 80,marginLeft:5, backgroundColor: '#e65100' }}/>
                    </View>
                       <Card style={{width:'90%',alignSelf:'center'}}>
                            <CardItem header bordered>
                            <TouchableNativeFeedback onPress={()=>{this.toggleModal()}}>
                                   <View>
                                   <Text style= {{ fontSize: 18,fontWeight: 'bold'}}>Jan 24- Jan 24 </Text>
                                   </View>
                              </TouchableNativeFeedback>
                            </CardItem>
                            <CardItem footer bordered>
                            <TouchableNativeFeedback>
                             <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',flex:1}}>
                              <Text note style= {{ fontSize: 18}}>Deliver on Sat and Sun</Text>
                              <CheckBox/>
                              </View>
                              </TouchableNativeFeedback>
                           </CardItem>
                       </Card>
                       <View style={{marginVertical:10}}>
                       <Text style= {{ fontSize: 22,fontWeight: 'bold'}}> Select Delivery Slot</Text>
                       <View style={{height: 2, width: 80,marginLeft:5, backgroundColor: '#e65100' }}/>
                       </View>
                       <View style={{width:'100%'}}>
                            <View style={{flex:1,flexDirection:'row', justifyContent:'space-around'}}> 
                               <SlotItem pressed={this.state.pressed[0]} index={0} time={'1:00-2:20 pm'} updatePressed={this.updatePressed}/>
                               <SlotItem pressed={this.state.pressed[1]} index={1} time={'11:00-2:20 pm'} updatePressed={this.updatePressed}/>
                            </View>
                      <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
                       <SlotItem pressed={this.state.pressed[2]} index={2} time={'1:00-2:20 pm'} updatePressed={this.updatePressed}/>
                       <SlotItem pressed={this.state.pressed[3]} index={3}  time={'11:00-2:20 pm'} updatePressed={this.updatePressed}/>
                       </View>
                       </View>
                     
                      </View> 
       <View style={{marginVertical:10}}>              
       <TouchableNativeFeedback>
       <View style={{flexDirection:'row',backgroundColor: '#fff',paddingVertical:20,paddingHorizontal:10}}>
       <Image style={{height: 35, width: 35}} source={require('../../../assets/im/icons8-discount-96.png')}></Image>
             <Text style= {{ fontSize: 20,fontWeight: 'bold'}}> Apply Coupon</Text>
             </View>
       </TouchableNativeFeedback>
       </View>

       <View style={{backgroundColor: '#fff'}}>
       <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:5,margin:10}}>
       <Text style= {{ fontSize: 17}}> Item Total </Text>
       <Text style= {{ fontSize: 17}}> ₹ 100.00 </Text>
       </View>
       <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:5,margin:10}}>
       <Text style= {{ color: '#e65100',fontSize: 18,fontWeight: 'bold'}}>Delivery Charges </Text>
       <Text style= {{ color: '#e65100',fontWeight: 'bold',fontSize: 18}}> FREE</Text>
       </View>
       <View style={{marginLeft:10,height: 1, width: '95%', backgroundColor: '#e65100' }}></View>
       <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:5,margin:10}}>
       <Text style= {{ color: 'black',fontSize: 18,fontWeight: 'bold'}}>Total </Text>
       <Text style= {{ color: 'black',fontWeight: 'bold',fontSize: 18}}> ₹ 100.00 </Text>
       </View>
       </View>
       </ScrollView>
       <Modal
       style={{ justifyContent: 'flex-end',margin: 0,}} 
       animationIn='slideInUp'
       animationInTiming={400}
       propagateSwipe={true}
       swipeDirection={['down']} 
       isVisible={this.state.isModalVisible}
       hideModalContentWhileAnimating={true}
       onBackdropPress={() => this.setState({ isModalVisible: false })} >
          <DateModal/>
          {/* <LoginModal/> */}
          {/* <FilterModal/> */}
          </Modal>
       </View>
    )
  }
}