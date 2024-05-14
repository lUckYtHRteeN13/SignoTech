import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { BACKGROUND_COLOR, images } from '../../constants/Constants';
import RoundedButton from '../../components/RoundedButton';

function Phrases({navigation}) {
  return (
    <View style={{backgroundColor:BACKGROUND_COLOR, height:'100%'}}>
      <FlatList data={Object.keys(images).sort()} renderItem={({item}) => (
          <RoundedButton text={images[item].title} style={styles.list} onPress={() => (navigation.navigate('sign', {resource:images[item]}))}/>
      )} keyExtractor={(item) => item}/>
    </View>

  )
}

export default Phrases;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 5,
    marginBottom: 4,
    marginLeft: 2,
    marginRight: 2,
    backgroundColor: '#121D44',
    width: 'auto',
  },
})