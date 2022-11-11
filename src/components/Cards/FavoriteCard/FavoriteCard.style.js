import {Dimensions, StyleSheet} from 'react-native';
const getWindowWidth = Dimensions.get('window').width;
const getWindowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#909290',
    margin: 10,
    padding: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subname_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subname: {
    fontSize: 15,
    color: '#000',
    marginRight: 5,
  },
  image: {
    width: getWindowWidth - 40,
    height: getWindowHeight / 1.5,
    resizeMode: 'contain',
  },
  upvote: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
    padding: 5,
    color: '#000',
  },
  vote_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
