import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'

export class Suggestions extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.suggestives}>
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
  }
})