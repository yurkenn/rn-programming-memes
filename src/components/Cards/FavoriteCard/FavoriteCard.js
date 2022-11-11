import {View, Text, Image} from 'react-native';
import React from 'react';
import style from './FavoriteCard.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
const FavoriteCard = ({favorite}) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{favorite.title}</Text>
      <Image style={style.image} source={{uri: favorite.link}} />
      <View style={style.subname_container}>
        <Text style={style.subname}>{favorite.subreddit_name}</Text>
        <Icon name="face" size={20} color="#000" />
      </View>
      <View style={style.vote_container}>
        <Icon name="thumb-up" size={20} color="#000" />
        <Text style={style.upvote}>{favorite.up_votes}</Text>
      </View>
    </View>
  );
};

export default FavoriteCard;
