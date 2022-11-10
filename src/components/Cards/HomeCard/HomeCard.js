import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import style from './HomeCard.style';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeCard = ({memes}) => {
  return (
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
  );
};

export default HomeCard;
