import { Text, View, TextInput, Keyboard } from 'react-native';
import { Component, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../screens/styles/Search';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import * as actions from '../actions';


import { images, BACKGROUND_COLOR, MIDDLEGROUND_COLOR } from "../constants/Constants";

function SearchComponent({ navigation, route, options, back, ...props }) {
  let inputRef = useRef(null);


  useEffect(() => {
    const focus = navigation.addListener('transitionEnd', (e) => {
      if (route.name === 'search') {
        inputRef.current.focus();
      }
    });
  
    return focus;
  }, [navigation]);

  const onSubmitEditingSearch = () => {
    if (props.search_text !== "") {
      const text = props.search_text;
      const res = images[text.toLowerCase()];

      if (res) {
        props.storeSearchQuery(searchQuery=props.search_text);
      }

      navigation.navigate('sign', {resource:res});
      props.changeSearchText("");
      props.Searching(false);
      Keyboard.dismiss();
    }
	}

  const onSearchTextChange = (text) => {
    props.Searching(text !== "");
    props.changeSearchText(text);
	}

  const onTextInputPress = () => {
    (route.name !== 'search') ? navigation.navigate('search') : null;
  }

  return (
    <View>
      <View style={styles.header}>  
    
        <Icon name='arrow-back-outline' onPress={navigation.goBack} style={styles.icon}/>
        <View style={styles.searchSection}>
    
          <Icon name='search' style={styles.icon}/>
          <TextInput 
            ref={inputRef} 
            value={props.search_text}
            onSubmitEditing={onSubmitEditingSearch} 
            onChangeText={(text) => onSearchTextChange(text)}
            placeholder='Type a word or phrase' 
            placeholderTextColor={BACKGROUND_COLOR} 
            style={[styles.text, styles.input]}
            autoFocus={false}
            selectTextOnFocus={true}
            onPressIn={onTextInputPress}
            blurOnSubmit={false}
          />
          {/* <Icon name='mic' style={styles.icon}/> */}
    
        </View>
    
      </View>
    </View>
  )

}

const mapStateToProps = (state) => {
	return {
		is_searching: state.SearchReducer.is_searching,
		search_text: state.SearchReducer.search_text
	}
}

export default connect(mapStateToProps, actions)(SearchComponent);