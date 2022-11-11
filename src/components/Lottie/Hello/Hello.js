import React from 'react';
import Lottie from 'lottie-react-native';

const Hello = ({style}) => {
  return (
    <Lottie
      style={style}
      source={require('../../../assets/hello.json')}
      autoPlay
      loop
    />
  );
};

export default Hello;
