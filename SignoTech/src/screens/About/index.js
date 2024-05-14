import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { BACKGROUND_COLOR, FOREGROUND_COLOR } from '../../constants/Constants'
import Profile from './Profile'
import styles from '../styles/About'

function About({ navigation }){
  return (
    <SafeAreaView style={styles.backgroud}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Profile name={'Aaron Hans Oliverio'} source={require('../../../assets/imgs/profiles/oliverio.png')}/>
        <Profile name={'Loi Marie Maxino'} source={require('../../../assets/imgs/profiles/maxino.png')}/>
        <Profile name={'Nethan Quinn Jael'} source={require('../../../assets/imgs/profiles/jael.png')}/>
        <Profile name={'Rachel Joy Pedrosa'} source={require('../../../assets/imgs/profiles/pedrosa.png')}/>
        <Profile name={'Raymart John Patriarca'} source={require('../../../assets/imgs/profiles/patriarca.png')}/>

      </ScrollView>
    </SafeAreaView>
  )
}

export default About