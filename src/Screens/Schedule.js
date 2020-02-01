import React, {Component}  from 'react';
import { StyleSheet, Text, View, ScrollView,Image,ImageBackground} from 'react-native';
import { Container, Header, Content, Card, CardItem,Button, Left, Body } from 'native-base';
export default class App extends Component {
  render(){
    return(
      <Container>
                <ScrollView style={{height: '100%', backgroundColor: '#eeeeee' }}>
                  <View style={{height: 300, backgroundColor: '#fff' }}>
                     <ImageBackground source={require('../../assets/im/delish-190611-mandarin-orange-salad-274-portrait-pf-1561556606.png')} style={{height: 200, width: null, flex: 1}}>
                        <View style={{height: 200, top:'50%'}}>
                          <Content padder> 
                           <Card>
                            <CardItem bordered> 
                              <Left>
                              <Body>
                                <Text style={{fontSize: 22,fontWeight: 'bold'}}>Paneer Pesto Salad</Text>
                                <Text note style={{fontSize: 15, color: '#757575', left: '5%'}}>With Home Made Pesto Oil</Text>
                             </Body>
                             </Left>
                            </CardItem>
                            <CardItem>
                              <Text note style={{fontSize: 15, color: '#757575', left: '5%'}}>By ...................</Text>
                            </CardItem>
                           </Card>
                           </Content>
                         </View>
                       </ImageBackground>
                  </View>
                  <View style={{height: 200,backgroundColor: '#fff'}}>
                  <Text style= {{ fontSize: 22,fontWeight: 'bold',left: '5%',top:'8%',}}> Select Plan Duration</Text>
                  <View style={{height: 3, width: 80, top:'10%', left: '5%', backgroundColor: '#e65100' }}></View>
                  <View style={{height: 130, top:'12%' }}>
                    <Content padder>
                      <Card>
                      <CardItem header bordered>
                         <Text style= {{ fontSize: 18,fontWeight: 'bold',left: '5%',top:'1%',}}>Jan 24- Jan 24 </Text>
                      </CardItem>
            
                    <CardItem footer bordered>
                      <Text note style= {{ fontSize: 18,left: '5%',top:'1%',}}>Deliver on Sat and Sun</Text>
                        </CardItem>
                    </Card>
                    </Content>
                  </View>
                 </View>

                 <View style={{ height: 200, backgroundColor: '#fff' }}>
                  <Text style= {{ fontSize: 22,fontWeight: 'bold',left: '5%',top:'5%',}}> Select a Delivery Slot  </Text>
                   <View style={{height: 3, width: 80, top:'8%', left: '5%', backgroundColor: '#e65100' }}></View>
                     
                     
                     
                     <View style={{ height: 300,  width: '100%', top: '12%'}}>
                     
                       <View style={{ height: 50,  width: 165, top: '5%',borderWidth: 3,borderColor: '#e65100', left: '5%',justifyContent: "center",alignItems: "center"  }}>
                       <Text style={{color: 'black',fontSize: 15,fontWeight: 'bold', }}> 12:00 PM - 12:45 PM</Text>
                       </View>
                       
                       <View style={{ height: 50,  width: 165, top: '-12%',borderWidth: 3,borderColor: '#e65100', left: '55%',justifyContent: "center",alignItems: "center"  }}>
                       <Text style={{color: 'black',fontSize: 15,fontWeight: 'bold', }}> 12:45 PM - 1:30 PM </Text>
                       </View>
                       <View style={{ height: 50,  width: 165, top: '-8%',borderWidth: 3,borderColor: '#e65100', left: '5%',justifyContent: "center",alignItems: "center"  }}>
                       <Text style={{color: 'black',fontSize: 15,fontWeight: 'bold', }}> 1:30 PM - 2:15 PM</Text>
                       </View>
                       <View style={{ height: 50,  width: 165, top: '-25%',borderWidth: 3,borderColor: '#e65100', left: '55%',justifyContent: "center",alignItems: "center"  }}>
                       <Text style={{color: 'black',fontSize: 15,fontWeight: 'bold', }}>  2:15 PM - 3:00 PM </Text>
                       </View>
                     
                   </View>
          </View> 
       
       <View style={{ height: 80, backgroundColor: '#fff', top: '1%'}}>
             <Image style={{height: 35, width: 35, top: '20%', left: '5%'}} source={require('../../assets/im/icons8-discount-96.png')}></Image>
             <Text style= {{ fontSize: 20,fontWeight: 'bold',left: '15%',top: '-20%'}}> Apply Coupon</Text>
       </View>

       <View style={{ height: 180, backgroundColor: '#fff', top: '2%'}}>
       <Text style= {{ fontSize: 17,left: '5%',top: '10%' }}> Item Total </Text>
       <Text style= {{ fontSize: 17,left: '78%',top: '-3%' }}> ₹ 100.00 </Text>

       <Text style= {{ color: '#e65100',fontSize: 18,fontWeight: 'bold',left: '5%',top: '10%' }}>Delivery Charges </Text>
       <Text style= {{ color: '#e65100',fontWeight: 'bold',fontSize: 18,left: '78%',top: '-3%' }}> FREE</Text>

       <View style={{height: 1, width: '90%', top:'8%', left: '5%', backgroundColor: '#e65100' }}></View>

       <View style={{height: 50,top:'8%', left: '5%', backgroundColor: '#fff' }}>
       <Text style= {{ color: 'black',fontSize: 18,fontWeight: 'bold',left: '5%',top: '30%' }}>Total </Text>
       <Text style= {{ color: 'black',fontWeight: 'bold',fontSize: 18,left: '72%',top: '-20%' }}> ₹ 100.00 </Text>

       </View>
       </View>
       <View style={{ height: 40}}></View>
       </ScrollView>

       <View style={{ height: 150, backgroundColor: '#fff' }}>

       <Image style={{height: 40, width: 40, top: '20%', left: '5%'}} source={require('../../assets/im/icons8-location-64.png')}></Image>
       <Text style= {{ fontWeight: 'bold', color:'#e65100', fontSize: 17, left: '20%'}}>Multiple Address in the Location</Text>
       
       <Button bordered style={{ height: 40, width: 150, left: '15%', top: '8%', justifyContent: "center",alignItems: "center", borderWidth: 10, borderColor: '#e65100'}}>
        <Text style= {{ fontWeight: 'bold', color:'#e65100', fontSize: 15 }}>ADD ADDRESS</Text>
          </Button>
          <Button style={{ height: 40, width: 160, left: '145%',top:'-2%' ,justifyContent: "center",alignItems: "center", backgroundColor:'#e65100'}} >
          <Text style= {{ fontWeight: 'bold', color:'#fff', fontSize: 15 }}>SELECT ADDRESS</Text>
          </Button>
         
       </View>
       </Container>
    )
  }
}
const styles = StyleSheet.create({
  text:{
    color:'white'
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
  
       