import React from 'react';
import Lottie from 'lottie-react-native';
const Empty = ({style}) => {
  return (
    <Lottie
      style={style}
      source={require('../../../assets/empty.json')}
      autoPlay
      loop
    />
  );
};

export default Empty;
