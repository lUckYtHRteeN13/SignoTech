import { SafeAreaView, StyleSheet, Text, View, TextInput, ScrollView, Image } from 'react-native';
import React, { useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';

import { FOREGROUND_COLOR, BACKGROUND_COLOR, MIDDLEGROUND_COLOR, TEXT_COLOR } from "../../constants/Constants";

function Sign({ navigation, route }) {
  const sintel = require("../../../assets/videos/sign1.mp4");

  return (
    <SafeAreaView style={{flex:1, backgroundColor:BACKGROUND_COLOR}}>
      <View style={{marginBottom:15, paddingTop: 10, paddingBottom:10, alignItems:'center', backgroundColor:FOREGROUND_COLOR}}>
        <Text style={{color:TEXT_COLOR, fontSize:32, fontFamily:'Arial Bold'}}>{route.params.title}</Text>
        <Icon name="heart-outline" style={{fontSize:32, color:TEXT_COLOR}}/>
      </View>

      <View style={{paddingHorizontal:30, flex:1, justifyContent:'flex-start'}}>
        <Video
          source={{uri:sintel}}
          muted={true}
          repeat={true}
          resizeMode='strecth'
          style={styles.backgroundVideo}
        />
      </View>
    </SafeAreaView>
  )
}

export default Sign;

const styles = StyleSheet.create({
  backgroundVideo: {
    height:'36%',
    width:'100%',
  },

  header: {
    backgroundColor:'#121D44',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent:'flex-start',
    flexDirection: 'row',
    alignItems:'center',
  },

  container: {
    marginTop: '2%',
    marginBottom: '2%',
    marginLeft: 15,
    marginRight: 15,
  },

  icon: {
    fontSize: 32,
    color: FOREGROUND_COLOR,
  },

  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth:1,
    paddingRight: 15,
    paddingLeft: 15,
    marginLeft: 10,
  },

  text: {
    color: FOREGROUND_COLOR,
    fontSize: 12,
    fontFamily:'Arial',
  },

  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    color:BACKGROUND_COLOR,
    fontFamily: 'Arial',
    textDecorationLine: 'none',
    flexWrap:'nowrap'
  },
})