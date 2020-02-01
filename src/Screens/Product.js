import React, { Component } from 'react';

import { Image, ScrollView,ImageBackground, View, AppRegistry, FlatList, StyleSheet} from 'react-native';

import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { SliderBox } from "react-native-image-slider-box";
import flatListData from '../../flatListData';
import flatListData1 from '../../flatListData1';


class FlatListItem extends Component{

  render() {
    return(
      <View style={{width: 270, borderWidth: 4, margin:15, height: 180, borderColor:'#eeeeee',backgroundColor: '#ffffff'}}>
        <Image source={this.props.item.image} style={{margin: 1, width: 50, height:50, top: '8%', left:'8%'}}></Image>
        <Text style={{ padding: 10, fontSize: 20, fontWeight: 'bold', top: '8%'}}>
          {this.props.item.heading}
        </Text>
        <Text note style={{ padding: 10, fontSize: 16, color: '#757575' }}>
          {this.props.item.description}
        </Text>

      </View>
    );
  }
} 

class FlatListItem1 extends Component{

  render() {
    return(
      <View style={{width: 300, borderWidth: 4, margin:15, height: 220, borderColor:'#eeeeee',backgroundColor: '#ffffff'}}>
        <Image source={this.props.item.image} style={{margin: 1, width: '100%', height:130, }}></Image>
        <Text note style={{ padding: 10, fontSize: 15, fontWeight: 'bold', top: '1%', color: '#757575'}}>
          {this.props.item.date}
        </Text>
        <Text style={{  fontSize: 20,fontWeight: 'bold', left:'3%'  }}>
          {this.props.item.title}
        </Text>

      </View>
    );
  }
}

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../assets/im/s1.png'),
        require('../../assets/im/s2.png'),
        require('../../assets/im/s3.png'),
        require('../../assets/im/s4.png')
      ]
    };
  }
    render(){
        return(
            <Container>
                <ScrollView style={{height: '100%', backgroundColor: '#eeeeee' }}>
                  <Image source={require('../../assets/im/c4.png')} style={{height: 200, width: null, flex: 1}}></Image>
                  <View style={{height: 200, top:'-2%'}}>
                  
                <Content padder> 

                 <Card >
                  
                  <CardItem> 
                   <Left>
                    <Thumbnail source={require('../../assets/im/veg.png')} />
                    <Body>
                     <Text style={{fontSize: 22,fontWeight: 'bold'}}>Paneer Pesto Salad</Text>
                     <Text note style={{fontSize: 15}}>With Home Made Pesto Oil</Text>
                    </Body>
                   </Left>
                 </CardItem>

                  <CardItem >
                    <Text>Lettuce, carrot, broccoli, American sweet corn kernels, black olives,
                    tomato, celery, marinated tofu or paneer in fresh pesto dressing</Text>
                  </CardItem>

                 </Card>

                </Content>
                </View>
               

                <View style={{height: 310,  backgroundColor: '#eeeeee',top:'-1%'}}>

                  <Text style= {{ fontSize: 22,fontWeight: 'bold',left: '5%',top:'3%',}}> A Seek Peek Into The Plan</Text>

                  <View style={{height: 3, width: 80, top:'8%', left: '5%', backgroundColor: '#e65100' }}></View>

                  <View style={{height: 300, width: '100%', top:'2%',  top: '7%' }}>

                 <View style= {{ flex:1, marginTop: 35,  }}>
                 <FlatList style={{height: 100, width: '100%', }} 
                    horizontal={true}
                    data={flatListData1}
                    renderItem={({ item, index})=>{
                     return ( <FlatListItem1 item={item} index={index}></FlatListItem1> );
                 }}>
                 </FlatList>
                 </View>
                 </View>
                </View>

                <View style={{height: 650,  top:'3%', backgroundColor: '#fff'}}>
                  <Text style= {{ fontSize: 22,fontWeight: 'bold', left: '5%',top:'1%'}}>Fig</Text>
                  <View style={{height: 3, width: 50, top:'2%', left: '5%', backgroundColor: '#e65100' }}></View>

                  <Text style={{top: '3%',color: '#616161', left: '5%'}}>Crunchy Carrots loaded with Vitamin A, Juicy   </Text>
                  <Text style={{top: '3%',color: '#616161', left: '5%'}}>Lettuce which is rich in folate n minerals and the  </Text>
                  <Text style={{top: '3%',color: '#616161', left: '5%'}}>Celebrated Broccoli which is known to be one the </Text>
                  <Text style={{top: '3%',color: '#616161', left: '5%'}}>healthiest veggies in the world come to you with </Text>
                  <Text style={{top: '3%',color: '#616161', left: '5%'}}>tomatoes, celery and black olives that nourish,</Text> 
                  <Text style={{top: '3%',color: '#616161', left: '5%'}}>hydrate n protect with essential fatty acids </Text>
                  <Text style={{top: '3%',color: '#616161', left: '5%'}}>antioxidants and Vitamin E. </Text>

                  <View style={{height: 200, top:'6%' }}>
                  <SliderBox
                       
                       images={this.state.images}
                       onCurrentImagePressed={index =>
                        console.warn(`image ${index} pressed`)
                        }/>
        
                  </View>
                 
                  <Text style={{top: '10%',color: '#616161', left: '5%'}}>All this along with American sweet corn kernels </Text>
                  <Text style={{top: '10%',color: '#616161', left: '5%'}}>and marinated tofu or paneer in this tempting  </Text>
                  <Text style={{top: '10%',color: '#616161', left: '5%'}}>salad that promises an unforgettable flavour trip </Text>
                  <Text style={{top: '10%',color: '#616161', left: '5%'}}>Wrapped in fresh pesto dressing that is a smooth </Text>
                  <Text style={{top: '10%',color: '#616161', left: '5%'}}>blend of crushed garlic, fragrant basil and veg </Text> 
                  <Text style={{top: '10%',color: '#616161', left: '5%'}}>Parmesan cheese this savoury salad is a </Text>
                  <Text style={{top: '10%',color: '#616161', left: '5%'}}>treat to you palette </Text>
                 
                 </View>

                 <View style={{ backgroundColor: '#fff', height: 250, top: '2%',backgroundColor: '#eeeeee'}}>
                 <Text style={{fontSize: 22,fontWeight: 'bold',left: '5%', top: '5%',backgroundColor: '#eeeeee'}} > Most Flexible Plan Ever </Text>
                 <View style={{height: 3, width: 80, top:'2%', left: '5%', backgroundColor: '#e65100', top: '7%' }}></View>

                 <View style= {{ flex:1, marginTop: 35,  }}>
                 <FlatList style={{height: 50, width: '100%', }} 
                    horizontal={true}
                    data={flatListData}
                    renderItem={({ item, index})=>{
                    return ( <FlatListItem item={item} index={index}></FlatListItem> );
                 }}>
                 </FlatList>
                 </View>
                 </View>

                 <View style={{backgroundColor: '#fff', height: 600, top: '2%',backgroundColor: '#eeeeee'}}> 
                 <Text style={{fontSize: 22,fontWeight: 'bold',left: '5%', top: '2%',backgroundColor: '#eeeeee'}} > Choose your Plan</Text>
                 <View style={{height: 3, width: 80, top:'3%', left: '5%', backgroundColor: '#e65100' }}></View>

                 <View style={{ backgroundColor: '#fff', height: 80, top: '6%',backgroundColor: '#fff', left:'5%', width: '90%',}}>
                 <View>
                   <Text note style={{fontSize: 18,fontWeight: 'bold', left: '3%', top: '20%'}}> 1 Day </Text>
                   <Text style={{fontSize: 22,fontWeight: 'bold', left: '3%', top: '20%'}}> ₹100
                   <Text note style={{fontSize: 18,fontWeight: 'bold', left: '3%', top: '20%'}}> per meal</Text>  </Text>
                   <Button rounded style={{ position: 'absolute',width: 120, top: '35%', left: '60%', backgroundColor: '#e65100' }}>
                   <Text style={{fontSize: 18,fontWeight: 'bold', left: '18%', }}>Choose</Text>
                   </Button>
                 </View>
                 </View>
                 
                 <View style={{ backgroundColor: '#fff', height: 80, top: '11%',backgroundColor: '#fff', left:'5%', width: '90%',}}>
                  <View>
                   <Text note style={{fontSize: 18,fontWeight: 'bold', left: '3%', top: '20%'}}> 3 Day </Text>
                   <Text style={{fontSize: 22,fontWeight: 'bold', left: '3%', top: '20%'}}> ₹90
                   <Text note style={{fontSize: 17,textDecorationLine: 'line-through'}}>₹100</Text>
                   <Text note style={{fontSize: 18,fontWeight: 'bold', left: '3%', top: '20%'}}> per meal</Text>  </Text>
                   <Button rounded style={{ position: 'absolute',width: 120, top: '35%', left: '60%', backgroundColor: '#e65100' }}>
                   <Text style={{fontSize: 18,fontWeight: 'bold', left: '18%', }}>Choose</Text>
                   </Button>
                   </View>
                   </View>

                 <View style={{ backgroundColor: '#fff', height: 80, top: '15%',backgroundColor: '#fff', left:'5%', width: '90%',}}>
                    <View>
                    <Text note style={{fontSize: 18,fontWeight: 'bold', left: '3%', top: '20%'}}> 7 Day </Text>
                    <Text style={{fontSize: 22,fontWeight: 'bold', left: '3%', top: '20%'}}> ₹80
                    <Text note style={{fontSize: 17,textDecorationLine: 'line-through'}}>₹100</Text>
                    <Text note style={{fontSize: 18,fontWeight: 'bold', left: '3%', top: '20%'}}> per meal</Text>  </Text>
                    <Button rounded style={{ position: 'absolute',width: 120, top: '35%', left: '60%', backgroundColor: '#e65100' }}>
                    <Text style={{fontSize: 18,fontWeight: 'bold', left: '18%', }}>Choose</Text>
                   </Button>
                   </View>
                  </View>

                <View style={{ backgroundColor: '#fff', height: 100, top: '19%',backgroundColor: '#fff', left:'5%', width: '90%',}}>
                  <View>
                    <Text note style={{fontSize: 18,fontWeight: 'bold', left: '3%', top: '20%'}}> 30 Day </Text>
                    <Text style={{fontSize: 22,fontWeight: 'bold', left: '3%', top: '20%'}}> ₹60
                    <Text note style={{fontSize: 17,textDecorationLine: 'line-through'}}>₹100</Text>
                    <Text note style={{fontSize: 18,fontWeight: 'bold', left: '3%', top: '20%'}}> per meal</Text>  </Text>
                    <Button rounded style={{ position: 'absolute',width: 120, top: '35%', left: '60%', backgroundColor: '#e65100' }}>
                   <Text style={{fontSize: 18,fontWeight: 'bold', left: '18%', }}>Choose</Text>
                   </Button>
                 </View>
                 </View>
                 </View>

                </ScrollView>
            </Container>
        )
    }
}
