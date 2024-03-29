import { StyleSheet } from "react-native";
import { FOREGROUND_COLOR, BACKGROUND_COLOR, MIDDLEGROUND_COLOR } from "../../constants/Constants";

const styles = StyleSheet.create({
  page_container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },

  header: {
    backgroundColor:'#121D44',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent:'flex-start',
    flexDirection: 'row',
    alignItems:'center',
  },

  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth:1,
    paddingRight: 15,
    paddingLeft: 15,
    marginLeft: 10,
  },

  icon: {
    fontSize: 32,
    color: FOREGROUND_COLOR,
  },

  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    color:BACKGROUND_COLOR,
    fontFamily: 'Arial',
    textDecorationLine: 'none',
    flexWrap:'nowrap'
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
    marginTop: '2%',
    marginBottom: '2%',
    marginLeft: 15,
    marginRight: 15,
  },
  
  text: {
    color: FOREGROUND_COLOR,
    fontSize: 12,
    fontFamily:'Arial',
  },

  heading: {
    fontSize: 24,
    fontFamily:'Arial Bold',
  }
})

export default styles;