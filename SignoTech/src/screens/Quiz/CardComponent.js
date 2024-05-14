import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import styles from '../styles/Quiz';
import { images } from '../../constants/Constants';

function CardComponent({signKey, alt}){
  return(
    <View style={{flex:1}}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode='cover'
          style={styles.img}
          source={images[signKey]?.imageURL} // Store in an Object Probably
          alt={alt}
        />
      </View>
    </View>
  )
}

export default CardComponent