import { Text, View, TextInput } from 'react-native';
import React, { Component, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../screens/styles/Search';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { FOREGROUND_COLOR, BACKGROUND_COLOR, MIDDLEGROUND_COLOR } from "../constants/Constants";

function Header({ navigation, route, options, back, ...props }) {
  let inputRef = useRef(null);

  const [text, onChangeText] = useState('');

  React.useEffect(() => {
    const focus = navigation.addListener('transitionEnd', (e) => {
      if (route.name === 'search') {
        inputRef.current.focus();
      }
    });
  
    return focus;
  }, [navigation]);

  const onTextInputPress = () => {
    (route.name != 'search') ? navigation.goBack() : null
  }

  return (
    <View>
      <View style={styles.header}>  
    
        <Icon name='arrow-back-outline' onPress={navigation.goBack} style={styles.icon}/>
        <View style={styles.searchSection}>
    
          <Icon name='search' style={styles.icon}/>
          <TextInput 
            ref={inputRef} 
            value={text}
            onSubmitEditing={() => navigation.navigate('sign', {title:text})} 
            onChangeText={onChangeText}
            placeholder='Type a word or phrase' 
            placeholderTextColor={BACKGROUND_COLOR} 
            style={[styles.text, styles.input]}
            autoFocus={false}
            selectTextOnFocus={true}
            onPressIn={onTextInputPress}
          />
          <Icon name='mic' style={styles.icon}/>
    
        </View>
    
      </View>
    </View>
  )

}

export default Header;