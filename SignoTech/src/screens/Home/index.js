import { View, Text, Image, StatusBar, StyleSheet, TouchableWithoutFeedback, ScrollView, DrawerLayoutAndroid, useWindowDimensions } from 'react-native';
import React, { useRef } from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

import Banner from '../../components/Banner';
import { FOREGROUND_COLOR, BACKGROUND_COLOR, MIDDLEGROUND_COLOR } from "../../constants/Constants";
import styles from '../styles/Home';
import IconStyles from '../styles/Icons';


function Home({ navigation }) {

  const drawer = useRef<DrawerLayoutAndroid>(null);

  const switchScreen = () => {
    navigation.navigate('search');
  };

  const showDrawer = () => {
    drawer.current?.openDrawer();
    console.log("Drawer");
  };

  const navigationView = () => (
    <View style={styles.container}>
      <Text style={{color:'#000'}}>I'm in the Drawer!</Text>
    </View>
  );

  return (      
      <SafeAreaView style={styles.page_container}>
        <StatusBar
          backgroundColor={MIDDLEGROUND_COLOR}
          barStyle={'light-content'}
          hidden={false}
        />

        <View style={styles.header}>
          <IonIcon name='menu' onPress={showDrawer} style={styles.icon}/>
          <Text style={[styles.text, styles.header_title]}>
            SignoTech
          </Text>
        </View>

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
          <TouchableWithoutFeedback onPress={switchScreen} activeOpacity={1}>
            <View style={styles.searchButton}>
              <IonIcon name='search' style={styles.icon}/> 
              <Text style={styles.text}> 
                  Type a word or phrase 
              </Text>
              <IonIcon name='mic' style={styles.icon}/>
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