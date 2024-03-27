import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { Component, useEffect, useRef } from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';

import genStyles, {BACKGROUND_COLOR, FOREGROUND_COLOR, MIDDLEGROUND_COLOR} from '../../styles/Styles'
import IconStyles from '../../styles/Icons';
import Suggestions from '../../components/Suggestions';

export default function Search({ navigation }) {
  const ref = useRef(null)
  const [text, onChangeText] = React.useState('');
  
  useEffect(() => {
    const listener = navigation.addListener( "transitionEnd", () => ref.current?.focus() );
    return listener
  }, [navigation])

  const suggestions = [
    "Good Morning", "Good Evening", "Helo",  "How Are You?",
   "I'm Sorry", "See You Tomorrow", "I Love You", "Bye!"
  ];

  const history = [];

  const _goBack = () => {
    navigation.navigate('home');
  }

  const _search = () => {
    ref.current.focus();
  }

  const _voice = () => {
    console.log("Using Voice");
  }
  
  const _onSubmit = () => {
    history.push(text);
    console.log(history);
  }

  return (
    <SafeAreaView style={{flex:1, backgroundColor:BACKGROUND_COLOR}}>
      <View style={[genStyles.header, {flexDirection:'row'}]}>

        <IonIcon name='arrow-back-outline' onPress={_goBack} style={[IconStyles.icon, {color: FOREGROUND_COLOR}]}/>
        <View style={styles.searchSection}>

          <IonIcon name='search' onPress={_search} style={[IconStyles.icon, {color:BACKGROUND_COLOR}]}/>
          <TextInput ref={ref} value={text} onSubmitEditing={_onSubmit} onChangeText={onChangeText} placeholder='Type a word or phrase' placeholderTextColor={BACKGROUND_COLOR} style={styles.input}/>
          <IonIcon name='mic' onPress={_voice} style={[IconStyles.icon, {color:BACKGROUND_COLOR}]}/>

        </View>

      </View>

      {
        history.length > 0 && (
          <View style={styles.container}>
            <Text style={{fontSize: 24, fontFamily: 'Arial Bold', color: FOREGROUND_COLOR}}>History</Text>
            <View style={styles.suggestions}>
              {history.map((word, index) => (<Suggestions key={index} text={word}/>))}
            </View>
          </View>
        )
      }

      <View style={styles.container}>
        <Text style={{fontSize: 24, fontFamily: 'Arial Bold', color: FOREGROUND_COLOR}}>Common Phrases</Text>
        <View style={styles.suggestions}>
          {suggestions.map((word, index) => (<Suggestions key={index} text={word}/>))}
        </View>
      </View>
    </SafeAreaView>
  )
  
}
const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth:1,
    paddingRight: 15,
    paddingLeft: 15,
    marginLeft: 10,
  },

  searchIcon: {
      padding: 10,
  },

  input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      color:BACKGROUND_COLOR,
      fontFamily: 'Arial Bold',
  },

  suggestions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  
  container: {
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 15,
    marginRight: 15,
  }
})
