import React from 'react';
import Lottie from 'lottie-react-native';

const Heart = ({style}) => {
  return (
    <Lottie
      style={style}
      source={require('../../assets/heart-fav.json')}
      autoPlay
      loop
    />
  );
};

export default Heart;
