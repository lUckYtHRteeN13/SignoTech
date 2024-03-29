import { StyleSheet } from "react-native"

const BACKGROUND_COLOR = '#02092C'
const FOREGROUND_COLOR = '#00adef'
const MIDDLEGROUND_COLOR = '#121D44'

const styles = StyleSheet.create({
  header: {
    backgroundColor:'#121D44',
    padding: 10,
    alignItems:'center'
  },

  footer: {

  },

  container: {
    alignItems:'center', 
    justifyContent:'center',
    padding: 15,
  },

  
})

export default styles;
export { BACKGROUND_COLOR, FOREGROUND_COLOR, MIDDLEGROUND_COLOR };