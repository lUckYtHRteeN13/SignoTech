import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import styles from '../styles/About'

function Profile({name, source}) {
  return (
    <View style={styles.imageContainer}>
      <Image source={source} resizeMode='contain' style={styles.image}/>
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

export default Profile