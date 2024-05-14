import { View, Text, Image, StatusBar, StyleSheet, TouchableWithoutFeedback, ScrollView, DrawerLayoutAndroid, useWindowDimensions } from 'react-native';
import React, { useRef, Component } from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';

import Banner from '../../components/Banner';
import { FOREGROUND_COLOR, BACKGROUND_COLOR, MIDDLEGROUND_COLOR } from "../../constants/Constants";
import styles from '../styles/Home';
import * as actions from '../../actions';

function Home({ navigation, ...props }){
    useFocusEffect(() => {
      props.changeSearchText("");
      props.Searching(false);
    });
    return (
      <SafeAreaView style={styles.page_container}>
        <StatusBar
          backgroundColor={MIDDLEGROUND_COLOR}
          barStyle={'light-content'}
          hidden={false}
        />
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
              <Text style={[styles.text, {color: MIDDLEGROUND_COLOR, paddingLeft: 5,}]}> 
                  Type a word or phrase 
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.container}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginHorizontal:'2%'}}>
            
            <Banner onPress={() => {navigation.navigate('quiz')}} >
              <View style={[styles.container, {margin:0}]}>
                <Image resizeMode='contain' source={require('../../../assets/imgs/quiz_img.png')} style={{flex:1, marginBottom:5}}/>
                <Text style={[styles.text, {color:"#fff", fontSize:18, textAlign:'center'}]}>SIGN LANGUAGE QUIZ GAME</Text>
                <Text style={styles.text}>PLAY QUIZ &gt;</Text>
              </View>
            </Banner>

            <Banner onPress={() => {navigation.navigate('Alphabets')}}>
              <View style={[styles.container, {margin:0}]}>
                <Image resizeMode='contain' source={require('../../../assets/imgs/logo.png')} style={{flex:1, marginBottom:5}}/>
                <Text style={[styles.text, {color:"#fff", fontSize:18, textAlign:'center'}]}>SIGN LANGUAGE ALPHABETS</Text>
                <Text style={styles.text}>VIEW &gt;</Text>
              </View>
            </Banner>

          </ScrollView>
        </View>

        <View style={styles.footer}>
          {/* <Text style={{color:'#fff'}}>FOOTER</Text> */}
        </View>
      </SafeAreaView>
    )
  }

const mapStateToProps = (state) => {
  return {
    is_searching: state.SearchReducer.is_searching,
    search_text: state.SearchReducer.search_text
  }
}

export default connect(mapStateToProps, actions)(Home);