import {View, Text, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import style from './HomeCard.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {addFavorite} from '../../../redux/favoriteSlice';
import Heart from '../../Heart/Heart';

const HomeCard = ({memes, onPress}) => {
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(false);

  const doubleTap = () => {
    let tapCount = 0;
    let timer = null;
    return () => {
      tapCount++;
      if (tapCount === 1) {
        timer = setTimeout(() => {
          //single tap
          onPress();
          tapCount = 0;
        }, 500);
      } else if (tapCount === 2) {
        clearTimeout(timer);
        //double tap
        console.log('double tap');
        tapCount = 0;
        setIsFavorite(!isFavorite);
        dispatch(addFavorite(memes));
      }
    };
  };

  return (
    <Pressable onPress={doubleTap()}>
      <View style={style.container}>
        <Text style={style.title}>{memes.title}</Text>
        <Image style={style.image} source={{uri: memes.link}} />
        <View style={style.subname_container}>
          <Text style={style.subname}>{memes.subreddit_name}</Text>
          <Icon name="face" size={20} color="#000" />
        </View>
        <View style={style.vote_container}>
          <Icon name="thumb-up" size={20} color="#000" />
          <Text style={style.upvote}>{memes.up_votes}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default HomeCard;
