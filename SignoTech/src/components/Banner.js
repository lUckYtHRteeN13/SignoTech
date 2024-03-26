import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'

export class Banner extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={.8}>
          <View style={styles.banners}>
            <Text>
              Hello World
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Banner

const styles = StyleSheet.create({
  container: {
    alignItems:'center', 
    justifyContent:'center',
    padding: 15,
  },
  
  banners: {
    alignItems:'center', 
    justifyContent:'center',
    borderRadius:20,
    width: 250,
    height:'100%',
    backgroundColor: '#fff',
  }
})