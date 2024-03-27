import { View, Text, ImageBackground, StatusBar } from 'react-native'
import React from 'react'

export default function SplashScreen({ navigation }) {
  setTimeout(() => {
    navigation.replace('home')
    }, 2000)

  return (
    <ImageBackground 
      source={require('../../../assets/imgs/Splashscreen.png')}
      resizeMode={'contain'} 
      style={{flex:1}}>
    </ImageBackground>
  )
}