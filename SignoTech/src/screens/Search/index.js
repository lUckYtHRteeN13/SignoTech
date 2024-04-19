import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { Component, useEffect, useLayoutEffect, useRef, useState } from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';

import IconStyles from '../styles/Icons';
import Suggestions from '../../components/Suggestions';
import styles from '../styles/Search';
import { FOREGROUND_COLOR, BACKGROUND_COLOR, MIDDLEGROUND_COLOR } from "../../constants/Constants";
import Header from '../../components/Header';

function Search({ navigation }) {
  const [history, setHistoryList] = useState(new Set());
  
  const suggestions = [
    "Good Morning", "Good Evening", "Hello",  "How Are You?",
   "I'm Sorry", "See You Tomorrow", "I Love You", "Bye!"
  ];
  
  const _onSubmit = (word) => {
    setHistoryList(new Set([...history, word]));
    navigation.push('sign', {title: word});
  };

  const _showHistory = () => {
    return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.heading]}>History</Text>
      <View style={styles.suggestions}>
        {
          Array.from(history).map((word, index) => (<Suggestions onPress={() => _onSubmit(word)} key={index} text={word}/>))
        }
      </View>
    </View>)
  };

  return (
    <SafeAreaView style={styles.page_container}>
      <ScrollView contentInsetAdjustmentBehavior='automatic' showsVerticalScrollIndicator={false}>
        {
          history.size > 0 && (
            console.log(history.size),
            _showHistory()
          )
        }
        <View style={styles.container}>
          <Text style={[styles.text, styles.heading]}>Common Phrases</Text>
          <View style={styles.suggestions}>
            {suggestions.map((word, index) => (<Suggestions onPress={() => _onSubmit(word)} key={index} text={word}/>))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
  
}

export default Search;