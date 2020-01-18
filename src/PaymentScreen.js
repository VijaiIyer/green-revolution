import React, { Component } from "react";
import { Container, Header, Title, Button, Icon, Left, Body, Content } from "native-base";
import{View,StyleSheet,Text ,Image} from 'react-native';
export default class PaymentScreen extends Component{
    constructor(props){
        super(props);
    }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent
            onPress={()=>{this.props.navigation.goBack();}}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Payments</Title>
          </Body>
        </Header>
        <Content>
        <View>
        <View style={styles.row}>
            <View style={styles.item}>
            <Image source={{uri:"https://www.searchpng.com/wp-content/uploads/2019/02/Google-Pay-Logo-Icon-PNG.png"}} style={styles.image}/>
            <Text style={styles.name}>GPay</Text>
            </View>
            <Text style={styles.button}>Link Account</Text>
        </View>
        <View style={styles.row}>
            <View style={styles.item}>
            <Image source={{uri:"https://cdn2.iconfinder.com/data/icons/social-icons-color/512/paytm-512.png"}} style={styles.image}/>
            <Text style={styles.name}>Paytm</Text>
            </View>
            <Text style={styles.button}>Link Account</Text>
        </View>
        </View>
        </Content>
      </Container>
    );
  }
}
const styles=StyleSheet.create({
    item:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth:1,
        padding:5,
        borderColor:'#CBCBCB',
        marginHorizontal:10,
      },
      image:{
          height:40,
          width:40,
          margin:5,
          backgroundColor:'white',
      },
      name:{fontSize: 15,
    marginLeft:10},
    button:{
        fontWeight:'600',
        color:'orange',
        fontSize: 15,
    },

})