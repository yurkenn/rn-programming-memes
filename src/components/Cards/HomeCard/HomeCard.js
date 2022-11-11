import {View, Text, Image} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import style from './HomeCard.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {addFavorite} from '../../../redux/favoriteSlice';
import {TapGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const HomeCard = ({memes, onPress}) => {
  // dispatch
  const dispatch = useDispatch();

  // animated
  const doubleTabRef = useRef();
  const scale = useSharedValue(0);
  const rStlye = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, isFinished => {
      if (isFinished) {
        scale.value = withDelay(400, withSpring(0));
      }
    });
    return dispatch(addFavorite(memes));
  }, [scale, dispatch, memes]);

  return (
    <TapGestureHandler
      ref={doubleTabRef}
      numberOfTaps={2}
      onActivated={onDoubleTap}>
      <Animated.View>
        <View style={style.container}>
          <Text style={style.title}>{memes.title}</Text>
          <Image style={style.image} source={{uri: memes.link}} />
          <AnimatedImage
            source={require('../../../assets/like.png')}
            style={[style.heart, rStlye]}
          />
          <View style={style.subname_container}>
            <Text style={style.subname}>{memes.subreddit_name}</Text>
            <Icon name="face" size={20} color="#000" />
          </View>
          <View style={style.vote_container}>
            <Icon name="thumb-up" size={20} color="#000" />
            <Text style={style.upvote}>{memes.up_votes}</Text>
          </View>
        </View>
      </Animated.View>
    </TapGestureHandler>
  );
};

export default HomeCard;
