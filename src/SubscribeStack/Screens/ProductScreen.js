import React, { Component } from 'react';
import { ImageBackground, ScrollView, View, FlatList,Image,Dimensions,TouchableNativeFeedback} from 'react-native';
import { Container,Card, CardItem, Thumbnail, Text,Left, Body} from 'native-base';
import { SliderBox } from "react-native-image-slider-box";
import ChooseItem from '../Components/ChooseItem';
import ScheduleItem from '../Components/PLanFlatlistItem'
import moment from 'moment';
import flatListData from '../../../flatListData';
const flatListData1 = [
  {
      image: require("../../../assets/im/s1.png"),
      date: moment().format("YYYY-MM-DD"),
      title: "Paneer Pesto Salad"
  },
  {
    image: require("../../../assets/im/s1.png"),
    date: moment().add(1,"days").format("YYYY-MM-DD"),
    title: "Paneer Pesto Salad"
  },
  {
  image: require("../../../assets/im/s1.png"),
  date: moment().add(2,"days").format("YYYY-MM-DD"),
  title: "Paneer Pesto Salad"
   },
  {
      image: require("../../../assets/im/s1.png"),
      date: moment().add(3,"days").format("YYYY-MM-DD"),
      title: "Paneer Pesto Salad"
  },
  {
      image:  require("../../../assets/im/s1.png"),
      date: moment().add(4,"days").format("YYYY-MM-DD"),
      title: "Paneer Pesto Salad"
  },
  {
    image:  require("../../../assets/im/s1.png"),
    date: moment().add(5,"days").format("YYYY-MM-DD"),
    title: "Paneer Pesto Salad"
}
];

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
    let t=moment();
    console.log(t.format('ddd'));
    console.log(t.add(1,"days"));
    this.state = {
      selectedDate: new Date(),
      entries:flatListData1,
      current_index:0,
      images: [
        require('../../../assets/im/s1.png'),
        require('../../../assets/im/s2.png'),
        require('../../../assets/im/s3.png'),
        require('../../../assets/im/s4.png')
      ],
      plans:PLAN
    };
  }
  onScrollEnd=(e)=>{
    let contentOffset = e.nativeEvent.contentOffset;
    let viewSize = e.nativeEvent.layoutMeasurement;
    // Divide the horizontal offset by the width of the view to see which page is visible
    let pageNum = Math.floor(contentOffset.x / viewSize.width);
    console.log('scrolled to page ', pageNum);
    this.scrollToIndex_date(pageNum);
    this.setState({current_index:pageNum});
  }
  update_current_index=(index)=>{
    this.setState({current_index:index});
  }
  scrollToIndex_plan = (index) => {
    this.Plan_ListRef.scrollToIndex({animated: true, index: index});
  }
  scrollToIndex_date = (index) => {
    this.Date_ListRef.scrollToIndex({animated: true, index: index});
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
               
               <View style={{backgroundColor:'white'}}>
                <View style={{backgroundColor: '#ffffff',marginTop:10}}>
                  <Text style= {{ fontSize: 22,fontWeight: 'bold'}}> A Sneak Peek Into The Plan</Text>
                  <View style={{height: 3, width: 80,backgroundColor: '#e65100' }}></View>
                </View>
                <View style={{marginTop:10}}>
                <FlatList
                    horizontal={true}
                    ref={(ref) => { this.Date_ListRef = ref; }}
                    pagingEnabled
                    data={this.state.entries}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={({item,index})=>{return index}}
                    renderItem={({ item, index})=>{
                    return (
                      <TouchableNativeFeedback onPress={()=>{this.scrollToIndex_plan(index);
                        this.setState({current_index:index})}}>
                      <View style={{alignItems:'center',width:60,marginHorizontal:10,marginTop:10,padding:5,backgroundColor:(index===this.state.current_index)?'red':'white',borderRadius:40}}>
                        <Text style={{fontSize:18,textAlign:'center',textAlignVertical:'center',color:(index===this.state.current_index)?'white':'black'}}>{moment(item.date).format('ddd')}</Text>
                        <Text style={{fontSize:22,textAlign:'center',textAlignVertical:'center',color:(index===this.state.current_index)?'white':'black'}}>{moment(item.date).format('DD')}</Text> 
                      </View>
                      </TouchableNativeFeedback>
                    );
                 }}/>
                 </View>
                 <View style={{marginTop:20}}>
                 <FlatList
                    ref={(ref) => { this.Plan_ListRef = ref; }}
                    contentContainerStyle={{justifyContent:'center',alignItems:'center'}}
                    horizontal={true}
                    pagingEnabled={true}
                    onMomentumScrollEnd={this.onScrollEnd}
                    data={this.state.entries}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={({item,index})=>{return index}}
                    renderItem={({ item, index})=>{
                    return ( <ScheduleItem item={item} index={index}/> );
                 }}/>
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
