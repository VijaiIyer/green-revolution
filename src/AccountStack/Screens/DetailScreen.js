import React, { Component } from "react";
import {StyleSheet,Text,View} from 'react-native';
import { Container, Header, Button, Icon, Left, Body, Content, Right } from "native-base";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
export default class HeaderSpan extends Component {
    constructor(props)
    {
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
            <Text>Order #65465515416</Text>
            <Text>Cancelled 8th Jan 2019 | 3 meals </Text>
          </Body>
          <Right>
          <TouchableNativeFeedback>
              <Text style={styles.button}>HELP</Text>
          </TouchableNativeFeedback>
          </Right>
        </Header>
        <Content>
        <View style={styles.main}>
            <Text style={styles.heading}>BILL DETAILS</Text>
            <View style={styles.row}>
                <View style={styles.row}>
                    <Icon name='ios-card'/>
                    <Text style={styles.product}>Greek Salad Plan</Text>
                </View>
                <Text style={styles.product}>Rs 49.0</Text>
            </View>
            <View style={styles.detail_view}>
            <View style={styles.row}>
                <Text style={styles.detail}>Item Total</Text>
                <Text style={styles.value}>49.00</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.detail}>GST</Text>
                <Text style={styles.detail}>0.00</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.detail}>Order Packaging Charges</Text>
                <Text style={styles.detail}>0.00</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.detail}>Delivery Charges</Text>
                <Text style={styles.detail}>0.00</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.detail}>Discount</Text>
                <Text style={styles.detail}>0.00</Text>
            </View>
            </View>
            <View style={styles.row}>
                <Text style={styles.detail}>Paid via Cash</Text>
                <Text style={styles.product}>Total      Rs 49.00</Text>
            </View>
        </View>
        </Content>
      </Container>
    );
  }
}
const styles=StyleSheet.create({
    main:{
      paddingVertical:10,
      paddingHorizontal:15,
    },
    product:{
      fontWeight:'bold',
      fontSize:16,
      marginLeft:10,
    },
    heading:{
      fontSize:18,
      fontWeight:'bold',
      marginVertical:20,
    },
    row:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    detail:{
      color:'grey',
     fontSize:16
      },
    button:{
        fontWeight:'bold',
        color:'orange',
        fontSize: 15,
        marginRight:20,
    },
    detail_view:{
      paddingVertical:5,
      marginVertical:5,
      borderColor:'grey',
      borderTopWidth:1,
      borderBottomWidth:1,

    }
    });