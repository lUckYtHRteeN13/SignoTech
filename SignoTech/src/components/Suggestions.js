import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { BACKGROUND_COLOR, FOREGROUND_COLOR, MIDDLEGROUND_COLOR } from '../constants/Constants';

export class Suggestions extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.suggestives}>
          {
            this.props?.icon && (
              <Icon name={this.props.icon} style={[styles.icon]}/>
            )
          }
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default Suggestions

const styles = StyleSheet.create({
  container: {
    alignItems:'center', 
    justifyContent:'center',
  },
  
  suggestives: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 4,
    marginRight: 4,
    alignItems:'center', 
    justifyContent:'center',
    borderRadius:50,
    backgroundColor: '#121D44',
    width: 'auto',
  },

  text: {
    fontFamily: 'Arial',
    fontSize: 16,
    color: '#fff',
    marginLeft: 5,
  },

  icon: {
    fontSize: 24,
    color: '#fff',
  },
})