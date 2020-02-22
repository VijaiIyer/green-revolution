import React, { Component } from 'react';
import { ImageBackground, ScrollView, View, FlatList,Image,Dimensions} from 'react-native';
import { Container,Card, CardItem, Thumbnail, Text,Left, Body} from 'native-base';
import { SliderBox } from "react-native-image-slider-box";
import ChooseItem from '../Components/ChooseItem';
import moment from 'moment';
import flatListData from '../../../flatListData';
const flatListData1 = [
  {
      image: require("../../../assets/im/s1.png"),
      date: "Today, 23 Jan",
      title: "Paneer Pesto Salad"
  },
  {
      image: require("../../../assets/im/s1.png"),
      date: "Tomorrow, 24 Jan",
      title: "Paneer Pesto Salad"
  },
  {
      image:  require("../../../assets/im/s1.png"),
      date: "Sat, 25 Jan",
      title: "Paneer Pesto Salad"
  }];

const PLAN = [
  { day:1,
    price:100,
    discounted:0,
  },
  { day:3,
    price:100,
    discounted:90,
  },
  { day:7,
    price:100,
    discounted:60,
  },
  { day:30,
    price:100,
    discounted:50,
  },

];

class FlatListItem extends Component{
  render() {
    return(
      <View style={{width: 270, borderWidth: 4, margin:15, height: 180, borderColor:'#eeeeee',backgroundColor: '#ffffff'}}>
        <Image source={this.props.item.image} style={{margin: 1, width: 50, height:50}}></Image>
        <Text style={{ padding: 10, fontSize: 20, fontWeight: 'bold'}}>
          {this.props.item.heading}
        </Text>
        <Text note style={{ padding: 10, fontSize: 16, color: '#757575' }}>
          {this.props.item.description}
        </Text>

      </View>
    );
  }
} 
export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date(),
      entries:flatListData1,
      images: [
        require('../../../assets/im/s1.png'),
        require('../../../assets/im/s2.png'),
        require('../../../assets/im/s3.png'),
        require('../../../assets/im/s4.png')
      ],
      plans:PLAN
    };
  }
  scrollToIndex = () => {

    let t=this._calender.getSelectedDate();
    let randomIndex=t.diff(this.state.selectedDate,'days');

    // this._carousel.snapToItem(randomIndex,true,true);
   // this.flatListRef.scrollToIndex({animated: true, index: randomIndex});
  }
  _renderItem({item,index}) {
    return <FlatListItem2 item={item} index={index}/>;
  }
    render(){
       const {item} =this.props.navigation.state.params
        return(
            <View style={{flex:1}}>
                <ScrollView>
                <ImageBackground source={{uri:item.product_image1}} style={{height: 200, width: null, flex: 1}}/>
                 <Card style={{width:'95%',marginTop:-40,alignSelf:'center'}}>
                  <CardItem> 
                   <Left>
                    <Thumbnail source={(item.product_type_name==='Veg')?require('../../../assets/im/veg.png'):require('../../../assets/im/non-veg.png')} />
                    <Body>
                     <Text style={{fontSize: 22,fontWeight: 'bold'}}>{item.product_name}</Text>
                     <Text note style={{fontSize: 15}}>With {item.dressing}</Text>
                    </Body>
                   </Left>
                 </CardItem>
                  <CardItem >
                    <Text>{item.product_description}</Text>
                  </CardItem>
                 </Card>
               
               <View style={{padding:10}}>
                <View style={{backgroundColor: '#ffffff',marginTop:10}}>
                  <Text style= {{ fontSize: 22,fontWeight: 'bold'}}> A Sneak Peek Into The Plan</Text>
                  <View style={{height: 3, width: 80,backgroundColor: '#e65100' }}></View>
                </View>
                </View>

                <View style={{backgroundColor: '#fff',padding:15}}>
                  <Text style= {{ fontSize: 22,fontWeight: 'bold'}}>Description</Text>
                  <View style={{height: 3, width: 50,backgroundColor: '#e65100' }}></View>
                  <Text style={{color: '#616161',marginBottom:10}}>{item.product_description}</Text>
                  <View style={{height:200}}>
                  <SliderBox
                       
                       images={[item.product_image1,item.product_image2,item.product_image3]}
                       onCurrentImagePressed={index =>
                        console.warn(`image ${index} pressed`)
                        }/>
        
                  </View>
                   <Text style={{color: '#616161',marginVertical:10}}>{item.product_description}</Text>
                  </View>
                 <View style={{ backgroundColor: '#fff', height: 250,backgroundColor: '#eeeeee',padding:10}}>
                 <Text style={{fontSize: 22,fontWeight: 'bold',backgroundColor: '#eeeeee'}} > Most Flexible Plan Ever </Text>
                 <View style={{height: 3, width: 80,backgroundColor: '#e65100'}}></View>
                 <View style= {{ flex:1, marginTop: 10,}}>
                 <FlatList style={{height: 50, width: '100%', }} 
                    horizontal={true}
                    data={flatListData}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={({item,index})=>{return index}}
                    renderItem={({ item, index})=>{
                    return ( <FlatListItem item={item} index={index}></FlatListItem> );
                 }}>
                 </FlatList>
                 </View>
                 </View>

                 <View style={{backgroundColor: '#fff',backgroundColor: '#eeeeee',padding:10}}> 
                 <Text style={{fontSize: 22,fontWeight: 'bold',backgroundColor: '#eeeeee'}} > Choose your Plan</Text>
                 <View style={{height: 3, width: 80,backgroundColor: '#e65100',marginBottom:10 }}></View>
                 {this.state.plans.map((x)=>{return <ChooseItem {...this.props} item={x} product={item}/>})}
                 </View>
                </ScrollView>
                </View>
        )
    }
}
