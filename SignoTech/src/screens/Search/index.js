import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { Component, useEffect, useRef, useState } from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';

import IconStyles from '../styles/Icons';
import Suggestions from '../../components/Suggestions';
import styles from '../styles/Search';
import { FOREGROUND_COLOR, BACKGROUND_COLOR, MIDDLEGROUND_COLOR } from "../../constants/Constants";

function Search({ navigation }) {
  const ref = useRef(null);
  const [text, onChangeText] = useState('');
  const [history, setHistoryList] = useState([]);
  
  useEffect(() => {
    const listener = navigation.addListener( "transitionEnd", () => ref.current?.focus() );
    return listener
  }, [navigation]);

  const suggestions = [
    "Good Morning", "Good Evening", "Hello",  "How Are You?",
   "I'm Sorry", "See You Tomorrow", "I Love You", "Bye!"
  ];

  const _goBack = () => {
    navigation.navigate('home');
  };

  const _search = () => {
    ref.current.focus();
  };

  const _voice = () => {
    console.log("Using Voice");
  };
  
  const _onSubmit = () => {
    let query = text.trim();
    if (query != '' && history.indexOf(query) === -1) {
      setHistoryList([...history, text]);
    }
    onChangeText('');
  };

  const _onSelect = (word) => {
    onChangeText(word);
  };

  return (
    <SafeAreaView style={styles.page_container}>
      <View style={styles.header}>

        <IonIcon name='arrow-back-outline' onPress={_goBack} style={styles.icon}/>
        <View style={styles.searchSection}>

          <IonIcon name='search' onPress={_search} style={styles.icon}/>
          <TextInput 
            ref={ref} 
            value={text} 
            onSubmitEditing={_onSubmit} 
            onChangeText={onChangeText} 
            placeholder='Type a word or phrase' 
            placeholderTextColor={BACKGROUND_COLOR} 
            style={[styles.text, styles.input]}
          />
          <IonIcon name='mic' onPress={_voice} style={styles.icon}/>

        </View>

      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          history.length > 0 && (
            <View style={styles.container}>
              <Text style={[styles.text, styles.heading]}>History</Text>
              <View style={styles.suggestions}>
                {history.map((word, index) => (<Suggestions onPress={() => _onSelect(word)} key={index} text={word}/>))}
              </View>
            </View>
          )
        }

        <View style={styles.container}>
          <Text style={[styles.text, styles.heading]}>Common Phrases</Text>
          <View style={styles.suggestions}>
            {suggestions.map((word, index) => (<Suggestions onPress={() => _onSelect(word)} key={index} text={word}/>))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
  
}

export default Search;