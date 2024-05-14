import { StyleSheet } from "react-native";
import { TEXT_COLOR, BACKGROUND_COLOR, FOREGROUND_COLOR, MIDDLEGROUND_COLOR, HIGHLIGHT } from "../../constants/Constants";

const styles = StyleSheet.create({
  scrollView: {
    alignItems:'center',
    paddingBottom:15,
    paddingTop:80
  },
  backgroud: {
    backgroundColor:BACKGROUND_COLOR,
  },
  imageContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  image: {
    height:250,
    aspectRatio:1,
    borderRadius: 50,
    marginBottom: 3,
  },
  heading: {
    marginTop: 20,
    marginBottom: 20,
    color:HIGHLIGHT,
    fontSize: 32,
    fontFamily:'Arial Bold',
  },
  text: {
    color:TEXT_COLOR,
    fontSize:24,
    fontFamily:'Arial Bold'
  }
})

export default styles;