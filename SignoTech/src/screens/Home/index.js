import { View, Text, Image, StatusBar, StyleSheet, TouchableWithoutFeedback, ScrollView, DrawerLayoutAndroid } from 'react-native';
import React, { useRef } from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

import Banner from '../../components/Banner';
import genStyles, { BACKGROUND_COLOR, FOREGROUND_COLOR, MIDDLEGROUND_COLOR } from '../../styles/Styles';
import IconStyles from '../../styles/Icons';

export default function Home({ navigation }) {
  const drawer = useRef<DrawerLayoutAndroid>(null);

  const switchScreen = () => {
    navigation.navigate('search');
  };

  const showDrawer = () => {
    drawer.current?.openDrawer();
    console.log("Drawer");
  };

  const navigationView = () => (
    <View style={genStyles.container}>
      <Text style={{color:'#000'}}>I'm in the Drawer!</Text>
    </View>
  );

  return (      
      <SafeAreaView style={{flex:1, backgroundColor:BACKGROUND_COLOR}}>
        <StatusBar
          backgroundColor={MIDDLEGROUND_COLOR}
          barStyle={'light-content'}
          hidden={false}
        />

        <View style={[genStyles.container, genStyles.header, {flex: 0.15, justifyContent:'flex-start', flexDirection:'row'}]}>
          <IonIcon name='menu' size={32} onPress={showDrawer} style={[IconStyles.icon, {color: FOREGROUND_COLOR}]}/>
          <Text style={{marginLeft:10, fontSize:16, color:FOREGROUND_COLOR, fontFamily:'Arial'}}>
            SignoTech
          </Text>
        </View>

        <View style={[genStyles.container, {flex:1, marginTop: 5}]}>
            <Image resizeMode={'contain'} source={require('../../../assets/imgs/logo.png')} style={{height:'80%'}}/>
            <Text style={[style.titleLabel]}>
                SignoTech
            </Text>
            <Text style={{ fontSize:16, color:FOREGROUND_COLOR, fontFamily:'Arial Narrow Italic'}}>
                Sign Language Learning Application
            </Text>
        </View>
          
        <View style={{height:'8%', marginTop: 28}}>
          <TouchableWithoutFeedback onPress={switchScreen} activeOpacity={1}>

            <View style={style.searchButton}>
              <IonIcon name='search' style={[IconStyles.icon, {color:BACKGROUND_COLOR}]}/> 
              <Text style={{color:'#000', fontFamily:'Arial'}}> 
                  Type a word or phrase 
              </Text>
              <IonIcon name='mic' style={[IconStyles.icon, {color:BACKGROUND_COLOR}]} />
            </View>

          </TouchableWithoutFeedback>
        </View>
        
        <View style={[{flex:1}, genStyles.container]}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{width: '100%'}}>
            
            <Banner/>
            <Banner/>
            <Banner/>

          </ScrollView>
        </View>

        <View style={[{flex:0.15}, genStyles.container]}>
          {/* <Text style={{color:'#fff'}}>FOOTER</Text> */}
        </View>
      </SafeAreaView>
  )
}

const style = StyleSheet.create({
  titleLabel: {
    fontSize:64, 
    color:FOREGROUND_COLOR, 
    fontFamily:'Arial Bold',
  },

  searchButton: {
    flexDirection: 'row',
    borderRadius:30,
    width: '80%',
    height:'75%',
    borderWidth: 1,
    marginLeft: '10%',
    marginRight: '10%',
    marginTop:15,
    alignItems: 'center',
    verticalAlign: 'middle',
    justifyContent:'space-around',
    backgroundColor:'#fff',
  },
})
