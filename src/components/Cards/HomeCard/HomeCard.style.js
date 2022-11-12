import {Dimensions, StyleSheet} from 'react-native';
const getWindowWidth = Dimensions.get('window').width;
const getWindowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d6d6d6',
    margin: 10,
    padding: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  subname_container: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
  },
  subname: {
    fontSize: 15,
    color: '#000',
    marginLeft: 5,
  },
  image: {
    width: getWindowWidth - 40,
    height: getWindowHeight / 1.7,
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
    marginLeft: 10,
  },
  heart: {
    position: 'absolute',
    resizeMode: 'center',
    width: getWindowWidth / 8,
    height: getWindowWidth / 8,
    elevation: 1,
    zIndex: 1,
    top: getWindowHeight / 2.5,
    left: getWindowWidth / 2.5,
  },
});
