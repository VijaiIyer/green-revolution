import React, { Component } from 'react';
import {Container, Header, Left, Body, Right, Button, Icon, Title,Tab,Tabs } from 'native-base';
import{View,ScrollView,Text,FlatList} from 'react-native';
import Carousel from '../Components/Carousel'
import HomeItem from '../Components/HomeItem'
import axios from 'axios';
const DATA = [
  { name:'Greek Salad',
    dressing:'with Honey Lemon Dressing',
    type: 'Veg',
    price:'100',
    discount:'5'
  },
  { name:'Greek Salad',
  dressing:'with Honey Lemon Dressing',
  type: 'Veg',
  price:'100',
  discount:'5'
   },
  { name:'Greek Salad',
    dressing:'with Honey Lemon Dressing',
    type: 'Veg',
    price:'100',
    discount:'5'
},
];
var images=[{source:require('../../../assets/im/s8.png')},
{source:require('../../../assets/im/s1.png')},
{source:require('../../../assets/im/s2.png')},
{source:require('../../../assets/im/s3.png')},
{source:require('../../../assets/im/s4.png')},
{source:require('../../../assets/im/s5.png')},
{source:require('../../../assets/im/s6.png')},
{source:require('../../../assets/im/s7.png')}];
export default class HomeScreen extends Component {
  constructor(props)
  {
    super(props);
    this.state={
     array:DATA,
    };
  }
  componentDidMount(){
    axios.get("https://www.bookshippingtrucks.com/Projects-Works/SALAD-APP/MOBILE_APP/_Api_Product_Data.php")
      .then(res => {
        console.log(res.data)
        // const nameList = res.data;
        // this.setState({ nameList });
      })
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
        
        <ScrollView
         stickyHeaderIndices={[1]}
        >
            <Carousel images={images}/>
            <View style={{zIndex:4, backgroundColor: '#fff'}}>
            <Tabs locked>
          <Tab heading="Breakfast">
          </Tab>
          <Tab heading="Lunch">
          </Tab>
          <Tab heading="Dinner">
          </Tab>
        </Tabs>
            </View>
            <View style={{zIndex:4}}>
            {this.state.array.map((item)=>{return <HomeItem {...this.props} item={item}/>})}
            </View>
        </ScrollView>
      </View>
    );
 }
}