import React, { Component } from 'react';
import {Container, Header, Left, Body, Right, Button, Icon, Title,Tab,Tabs } from 'native-base';
import{View,ScrollView,Text,FlatList,ActivityIndicator} from 'react-native';
import Carousel from '../Components/Carousel'
import HomeItem from '../Components/HomeItem'
import Modal from "react-native-modal";
import FilterModal from "../Components/FilterModal";
import axios from 'axios';
var images=[{source:require('../../../assets/im/s8.png')},
{source:require('../../../assets/im/s1.png')},
{source:require('../../../assets/im/s2.png')},
{source:require('../../../assets/im/s3.png')},];
export default class HomeScreen extends Component {
  constructor(props)
  {
    super(props);
    this.state={
     product_list:[],
     loaded:false,
     isModalVisible: false,
    };
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  componentDidMount(){
    axios.post('https://www.bookshippingtrucks.com/Projects-Works/SALAD-APP/MOBILE_APP/_Api_Product_Data.php', {
      method:"All_Products"
    })
    .then((response) => {
      this.setState({loaded:true,
        product_list:response.data.result});
    }, (error) => {
      console.log(error);
    });
    // fetch('https://www.bookshippingtrucks.com/Projects-Works/SALAD-APP/MOBILE_APP/_Api_Product_Data.php', {
    //      method: 'POST',
    //      body: JSON.stringify({method:"All_Products"}),
    //      headers: { 'Content-type': 'application/json' }
    //   })
    //   .then((response) => console.log(JSON.stringify(response)))
    //   .catch((error) => {
    //      console.error(error);
    //   });
  }
  sortbyiten=()=>{}
  render() {
    return (
      <View style={{flex:1}}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-down' />
              <Text>South Tukoganj</Text>
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Text>Veg Only</Text>
            </Button>
            <Button transparent onPress={()=>{this.toggleModal()}}>
              <Icon name='md-options' />
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
            {!this.state.loaded &&<View style={{marginTop:20}}>
            <ActivityIndicator size="large" color="#0000ff" />
            </View>}
            <View style={{zIndex:5}}>
            {this.state.product_list.map((item)=>{return <HomeItem {...this.props} item={item}/>})}
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
          {/* <DateModal/> */}
          {/* <LoginModal/> */}
          <FilterModal/>
          </Modal>
      </View>
    );
 }
}