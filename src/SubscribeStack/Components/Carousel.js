import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions,FlatList} from 'react-native';
const { width } = Dimensions.get('window');
const height = width * 0.5;

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
    height:height,
  },
  image_container:{
    width:width*0.8,
    height:height,
    justifyContent:'center',
    alignItems:'center'
  },
  image: {
    width:0.75*width,
    height:0.75*height,
    borderRadius:15,
    borderBottomColor:'gray',
  },
});