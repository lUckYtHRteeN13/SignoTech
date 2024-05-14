import { StyleSheet } from "react-native";
import { FOREGROUND_COLOR, BACKGROUND_COLOR, MIDDLEGROUND_COLOR, TEXT_COLOR } from "../../constants/Constants";

const styles = StyleSheet.create({
  options : {
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
      backgroundColor: MIDDLEGROUND_COLOR,
      width: 'auto',
  },
  page_container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },

  header: {
    backgroundColor:MIDDLEGROUND_COLOR,
    paddingTop: 5,
    paddingBottom: 5,
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
  
  pause: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pause_content : {
    backgroundColor: MIDDLEGROUND_COLOR,
    paddingHorizontal: "10%",
    paddingTop: "10%",
    paddingVertical: "10%",
    borderRadius: 30,
    justifyItems: "center",
    justifyContent: 'center',
  },

  container: {
    marginTop: '2%',
    marginBottom: '2%',
    marginLeft: 15,
    marginRight: 15,
  },

  scoreboard : {
    alignSelf:'center',
    width: "80%",
    marginVertical:20,
    justifyContent:'center',
    backgroundColor:MIDDLEGROUND_COLOR,
    borderRadius:50,
    flexDirection:'row',
    paddingVertical: 15
  },
  
  text: {
    color: TEXT_COLOR,
    fontSize: 24,
    fontFamily:'Arial',
    paddingBottom: 5
  },

  heading: {
    fontSize: 40,
    fontFamily:'Arial Bold',
    paddingBottom: 20,
    color: FOREGROUND_COLOR
  },

  values: {
    fontSize: 32,
    fontFamily:'Arial Bold',
    color: FOREGROUND_COLOR
  },

  label: {
    fontSize: 16,
    fontFamily:'Arial',
    color: '#fff'
  },

  info_container : {
    flex:1, 
    alignItems:'center',
    justifyContent: 'center'
  },

  imageContainer: {
    width:'100%',
    borderRadius:100,
    alignSelf: 'center'
  },

  img: {
    width:'80%',
    // borderColor: FOREGROUND_COLOR,
    borderWidth: 10,
    borderRadius: 40,
    overlayColor: BACKGROUND_COLOR,
    alignSelf: 'center'
  },
})

export default styles;