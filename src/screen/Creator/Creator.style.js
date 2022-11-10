import {Dimensions, StyleSheet} from 'react-native';
const getWidth = Dimensions.get('window').width;
const getHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: getHeight * 0.02,
  },
  image: {
    width: getWidth / 2,
    height: getHeight / 4,
  },
  about_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: getHeight * 0.05,
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  nickname: {
    textAlign: 'center',
    color: '#000',
    fontSize: 15,
  },
  decription: {
    fontSize: 15,
    color: '#000',
    fontStyle: 'italic',
    marginTop: getHeight * 0.01,
  },
  hello_animation: {
    position: 'absolute',
    top: getHeight * 0.1,
    left: getWidth * 0.13,
    right: getWidth * 0.2,
    bottom: getHeight * 0.2,
    width: getWidth / 2,
    height: getHeight / 5,
  },

  links: {
    marginTop: getHeight * 0.02,
  },
  github: {
    margin: getHeight * 0.01,
    alignItems: 'center',
  },
  gitText: {
    color: '#000',
  },
  linkedin: {
    margin: getHeight * 0.01,
    alignItems: 'center',
  },
  linkText: {
    color: '#000',
  },
  twitter: {
    margin: getHeight * 0.01,
    alignItems: 'center',
  },
  twitterText: {
    color: '#000',
  },
});
