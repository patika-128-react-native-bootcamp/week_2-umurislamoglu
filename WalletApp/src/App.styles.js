import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';


const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  appContainer: {
    flex: 1,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  productContainer: {
    flex: 8,
    height: windowHeight*(2/3),
  },
  inputContainer: {
    flex: 3,
    borderTopWidth:1,
    borderTopColor: "lightgray",
    paddingTop:3,
},
});
