import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions,FlatList} from 'react-native';
const { width } = Dimensions.get('window');
const height = width * 0.7;

export default class Carousel extends Component {
  render() {
    const { images } = this.props;
      return (
        <View style={styles.scrollContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={images}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item:image}) =>{return (<View style={styles.image_container}>
            <Image style={styles.image} source={image.source} />
            </View>)}}  
            />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    height,
  },
  image_container:{
    width:width,
    height:height,
    justifyContent:'center',
    alignItems:'center'
  },
  image: {
    width:0.9*width,
    height:0.8*height,
    borderRadius:5,
    borderBottomColor:'gray',
  },
});