import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { Component, useEffect, useLayoutEffect, useRef, useState } from 'react';

import RoundedButton from '../../components/RoundedButton';
import styles from '../styles/Search';
import { images } from "../../constants/Constants";
import { connect } from 'react-redux';
import * as actions from '../../actions';

function Search({ navigation, ...props}) {  
  // useEffect(() => {
  //   const loadHistory = navigation.addListener('transitionEnd', (e) => {
  //     props.getSearchHistory();
  //   });
  
  //   return loadHistory;
  // }, [navigation]);
  const history = [...props.search_history_items].slice(-5);

  const suggestions = [
    "Good Morning", "Good Evening", "Hello",  "How Are You",
   "Sorry", "See You Later", "I Love You", "Goodbye"
  ];
  
  const onSubmit = (word) => {
    if (word !== "") {
      const res = images[word.toLowerCase()];

      if (res) {
        props.storeSearchQuery(searchQuery=res.title);
      }

      props.changeSearchText(res.title);
      navigation.navigate('sign', {resource:res});
    }
  };

  const findImages = () => {
    return Object.entries(images).filter(
      ([key, value]) => key.startsWith(props.search_text.toLowerCase()));

  };

  const showHistory = () => {

    return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.heading]}>History</Text>
      <View style={styles.suggestions}>
        {
          history.map((word, index) => (<RoundedButton onPress={() => onSubmit(word)} key={index} text={word} icon="time-outline"/>))
        }
      </View>
    </View>)
  };

  const showSuggestions = () => {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.heading]}>Common Phrases</Text>
        <View style={styles.suggestions}>
        {suggestions.map((word, index) => (<RoundedButton onPress={() => onSubmit(word)} key={index} text={word}/>))}
        </View>
      </View>
      )
  };

  const showList = () => {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.heading]}>Matches for "{props.search_text}"</Text>
        <View style={styles.suggestions}>
        {findImages().map(([key, value]) => (<RoundedButton onPress={() => onSubmit(key)} key={key} text={value.title}/>))}
        </View>
      </View>
      )
  };

  return (
    <SafeAreaView style={styles.page_container}>
      <ScrollView contentInsetAdjustmentBehavior='automatic' showsVerticalScrollIndicator={false}>
        {
          props.is_searching ? (
            <>
              {showList()}
            </>
          ) : (
            <>
              { history.length > 0 && showHistory()}
              {showSuggestions()}
            </>
          ) 
        }
      </ScrollView>
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => {
	return {
		search_history_items: state.SearchReducer.search_history_items,
		is_searching: state.SearchReducer.is_searching,
		search_text: state.SearchReducer.search_text
	}
}

export default connect(mapStateToProps, actions)(Search);