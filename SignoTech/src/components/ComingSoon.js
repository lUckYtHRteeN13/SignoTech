import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { BACKGROUND_COLOR, TEXT_COLOR } from '../constants/Constants'

const ComingSoon = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:BACKGROUND_COLOR, alignItems:'center', justifyContent:'center'}}>
      <Text style={{color:TEXT_COLOR, fontSize:32, fontFamily:'Arial Bold'}}>COMING SOON!</Text>
    </SafeAreaView>
  )
}

export default ComingSoon