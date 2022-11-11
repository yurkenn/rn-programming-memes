import {Dimensions, StyleSheet} from 'react-native';
const getWidth = Dimensions.get('window').width;
const getHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Empty: {
    width: getWidth * 0.5,
    height: getHeight * 0.5,
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
