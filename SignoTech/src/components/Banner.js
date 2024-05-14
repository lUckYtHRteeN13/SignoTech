import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'

import { FOREGROUND_COLOR, BACKGROUND_COLOR, MIDDLEGROUND_COLOR } from "../constants/Constants";

function Banner({children, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={.8} style={styles.banners} onPress={onPress}>
        {children}
      </TouchableOpacity>
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
  banners: {
    borderRadius:80, 
    flex:1, 
    flexDirection:'row',
    alignItems:'center', 
    justifyContent:'center',
    paddingBottom: 10
  },
  
  container: {
    alignItems:'center', 
    justifyContent:'center',
    marginHorizontal: 10,
    borderRadius:80,
    width: 250,
    height:'80%',
    backgroundColor: MIDDLEGROUND_COLOR,
    alignSelf:'center',
    overflow:"hidden"
  }
})