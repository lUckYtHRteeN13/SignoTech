import { StyleSheet } from "react-native";

import { FOREGROUND_COLOR, BACKGROUND_COLOR, MIDDLEGROUND_COLOR } from "../../constants/Constants";

const styles = StyleSheet.create({
  page_container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  
  header: {
    backgroundColor:MIDDLEGROUND_COLOR,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent:'flex-start',
    flexDirection: 'row',
    alignItems:'center',
  },

  header_title: {
    color: FOREGROUND_COLOR,
    paddingLeft: 5,
  },

  icon: {
    fontSize: 32,
    color: FOREGROUND_COLOR,
  },

  footer: {
    flex: 0.15,
  },

  container: {
    flex: 1,
    alignItems:'center', 
    justifyContent:'center',
    margin: 5,
  },

  title: {
    fontSize: 48, 
    color:'#00adef',
  },
  
  searchButton: {
    flexDirection: 'row',
    borderRadius:30,
    borderWidth: 1,
    width: '90%',
    marginTop: 5,
    marginBottom: 5,
    paddingBottom: '2%',
    paddingTop: '2%',
    paddingLeft: 15,
    alignItems: 'center',
    verticalAlign: 'middle',
    backgroundColor:'#fff',
    borderColor: '#fff',
  },

  text: {
    color: '#00adef',
    fontSize: 12,
    fontFamily:'Arial Bold',
  },

  image: {
    height:'100%',
    width:'100%', 
    overflow:'hidden', 
    flex:1
  }
});

export default styles;