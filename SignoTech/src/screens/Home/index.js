import { View, Text, Image, StatusBar, StyleSheet, TouchableWithoutFeedback, ScrollView, DrawerLayoutAndroid, useWindowDimensions } from 'react-native';
import React, { useRef, Component } from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withNavigation } from '@react-navigation/native';

import Banner from '../../components/Banner';
import { FOREGROUND_COLOR, BACKGROUND_COLOR, MIDDLEGROUND_COLOR } from "../../constants/Constants";
import styles from '../styles/Home';
import IconStyles from '../styles/Icons';

function Home({ navigation }){
    
    return (
      <SafeAreaView style={styles.page_container}>
        <StatusBar
          backgroundColor={MIDDLEGROUND_COLOR}
          barStyle={'light-content'}
          hidden={false}
        />

        {/* <View style={styles.header}>
          <IonIcon name='menu' style={styles.icon}/>
          <Text style={[styles.text, styles.header_title]}>
            SignoTech
          </Text>
        </View> */}

        <View style={styles.container}>
          <Image resizeMode='contain' source={require('../../../assets/imgs/logo.png')} style={{height:'100%', width:'100%', overflow:'hidden', flex:1}}/>
          <Text style={[styles.text, styles.title]}>
              SignoTech
          </Text>
          <Text style={[styles.text]}>
              Sign Language Learning Application
          </Text>
        </View>

        <View style={{alignItems:'center',}}>
          <TouchableWithoutFeedback onPress={() => navigation.push('search')} activeOpacity={1}>
            <View style={styles.searchButton}>
              <IonIcon name='search' style={[styles.icon, {color: MIDDLEGROUND_COLOR}]}/> 
              <Text style={[styles.text, {color: MIDDLEGROUND_COLOR}]}> 
                  Type a word or phrase 
              </Text>
              <IonIcon name='mic' style={[styles.icon, {color: MIDDLEGROUND_COLOR}]}/>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.container}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginHorizontal:'2%'}}>
            
            <Banner/>
            <Banner/>
            <Banner/>

          </ScrollView>
        </View>

        <View style={styles.footer}>
          {/* <Text style={{color:'#fff'}}>FOOTER</Text> */}
        </View>
      </SafeAreaView>
    )
  }
export default Home;