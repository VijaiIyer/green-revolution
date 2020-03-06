import React, { Component } from 'react';
import {Header, Left, Right, Button, Icon, Body} from 'native-base';
import{View,ScrollView,Text, TouchableWithoutFeedback,ActivityIndicator} from 'react-native';
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
    this.fetched_list=[];
    this.state={
     fetched_list:[], 
     product_list:[],
     loaded:false,
     veg:false,
     filtered:false,
     category:'Breakfast',
     isModalVisible: false,
    };
  }
  closeModal = () => {
    this.setState({ isModalVisible:false});
  };
  sort_by=(index)=>{
    if(index===0){
      this.setState({fetched_list:this.fetched_list});
  }
    if(index===1){
      let temp=this.fetched_list;
      temp.sort((a, b) => a.product_price -b.product_price);
      this.setState({fetched_list:temp});
  }
  if(index===2){
    let temp=this.fetched_list;
    temp.sort((a, b) => b.product_price - a.product_price);
    this.setState({fetched_list:temp});
  }
}
  _handlePress=(category)=>{
    this.refs._scrollView.scrollTo([1]);
    var temp=[];
    if(this.state.veg)
    { this.state.fetched_list.forEach((item)=>{if(item.product_type_name==='Veg')
    {
      temp.push(item);
    }});
   }
   else{
     temp=this.fetched_list;
   }
    console.log("\n\n");
    temp.forEach(element => {console.log(element.product_name)});
    console.log("\n\n");
    temp=temp.filter((item)=>{return item.product_category_name===category.toUpperCase()});
    // console.log("\n\n");
    // temp.forEach(element => {console.log(element.product_name)});
    // console.log("\n\n");
    this.setState({category:category,product_list:temp});
  } 
  componentDidMount(){
    axios.post('https://www.bookshippingtrucks.com/Projects-Works/SALAD-APP/MOBILE_APP/_Api_Product_Data.php', {
      method:"All_Products"
    })
    .then((response) => {
      //console.log(response.data.result);
      this.fetched_list=response.data.result;
      let temp=response.data.result;
      temp=temp.filter((item)=>{return item.product_category_name===this.state.category.toUpperCase()});
      this.setState({loaded:true,
        product_list:temp,
        fetched_list:response.data.result});
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Header style={{backgroundColor:'white'}}>
           <Body>
           <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('Search_sub')}}>
           <View>
           <View style={{flexDirection:'row',alignSelf:'flex-start'}}>
           <Text>Deliver to  </Text>
           <Icon  name='ios-arrow-down' style={{fontSize:18,color:'black'}}/>
           </View>
           <Text style={{fontWeight:'bold',fontSize:18}} numberOfLines={1} >Gurugram Railway station</Text>
           </View>
           </TouchableWithoutFeedback>
           
          </Body>
          <Right>
            <TouchableWithoutFeedback onPress={()=>{this.setState({veg:!this.state.veg});
            this._handlePress(this.state.category);}}>
            <View style={{backgroundColor:(this.state.veg)?'orange':'#cbcbcb',padding:10,borderRadius:20,alignSelf:'center'}}>
              <Text>Veg</Text>
              </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={()=>{
                this.setState({isModalVisible:true,filter:!this.state.filter})}}>
              <View style={{backgroundColor:(this.state.filter)?'orange':'#cbcbcb',padding:10,borderRadius:20,alignSelf:'center',marginLeft:10}}>
               <Icon name='md-options' style={{fontSize:14,color:'black'}}/>
              </View>
              </TouchableWithoutFeedback>
          </Right>
        </Header>
        
        <ScrollView
         ref='_scrollView' 
         stickyHeaderIndices={[1]}
         >
            <Carousel images={images}/>
            <View>
            <View style={{flexDirection:"row",width:'100%',alignItems:'center',flex:1,backgroundColor:'white',paddingVertical:10}}>
            <TouchableWithoutFeedback onPress={()=>{this._handlePress('Breakfast')}}>
            <View style={{paddingHorizontal:20}}>
            <Text style={{textAlignVertical:'center',fontSize:18,fontWeight:(this.state.category==='Breakfast')?'bold':'normal',borderBottomWidth:3,borderColor:(this.state.category==='Breakfast')?'orange':'transparent'}}>Breakfast</Text>
            </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>{this._handlePress('Lunch')}}>
            <View style={{paddingHorizontal:20}}>
            <Text style={{textAlignVertical:'center',fontSize:18,fontWeight:(this.state.category==='Lunch')?'bold':'normal',borderBottomWidth:3,borderColor:(this.state.category==='Lunch')?'orange':'transparent'}}>Lunch</Text>
            </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>{this._handlePress('Dinner')}}>
            <View style={{paddingHorizontal:20}}>
            <Text style={{textAlignVertical:'center',fontSize:18,fontWeight:(this.state.category==='Dinner')?'bold':'normal',borderBottomWidth:3,borderColor:(this.state.category==='Dinner')?'orange':'transparent'}}>Dinner</Text>
            </View>
            </TouchableWithoutFeedback>
            </View>
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
          <FilterModal {...this.props} sort_by={this.sort_by} closeModal={this.closeModal}/>
          </Modal>
      </View>
    );
 }
}