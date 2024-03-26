import { View, Text, Image, StatusBar, Button, TextInput, Keyboard, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef } from 'react'
import { Icon } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

import Banner from '../../components/Banner';

export default function Home({ navigation }) {

  const switchScreen = () => {
    navigation.navigate('search');
  };

  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#02092c"}}>
      <StatusBar
        animated={true}
        backgroundColor="#02092c"
        barStyle={'light-content'}
        hidden={false}
      />
      <View style={[{flex: 0.15}, styles.container]}>
        <Text style={{color:'#fff'}}>HEADER</Text>
      </View>

      <View style={[{flex:1}, styles.container]}>
          <Image resizeMode={'cover'} source={require('../../assets/imgs/logo.png')} style={{width:'110%', height:'80%'}}/>
          <Text style={styles.titleLabel}>
              SignoTech
          </Text>
          <Text style={{fontWeight:'bold', fontSize:13, color:'#00adef', fontFamily:'Roboto',}}>
              A Sign Language Learning Application
          </Text>
      </View>
        
      <View style={{height:'8%'}}>
        <TouchableWithoutFeedback onPress={switchScreen} activeOpacity={1}>
          <View style={styles.searchButton}>
            <Icon name='search' type='ionicons'/>
            <Text>Type a word or phrase</Text>
            <Icon name='mic' type='ionicons'/>
          </View>
        </TouchableWithoutFeedback>
      </View>
      
      <View style={[{flex:1}, styles.container]}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{width: '100%'}}>
          
          <Banner/>
          <Banner/>
          <Banner/>

        </ScrollView>
      </View>

      <View style={[{flex:0.15}, styles.container]}>
        <Text style={{color:'#fff'}}>FOOTER</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titleLabel: {
    fontWeight:'bold', 
    fontSize:50, 
    color:'#00adef', 
    marginBottom:15, 
    fontFamily:'sans-serif',
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

  container: {
    alignItems:'center', 
    justifyContent:'center',
    padding: 15,
  },
})
