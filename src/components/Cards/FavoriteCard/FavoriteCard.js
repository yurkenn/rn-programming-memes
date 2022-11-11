import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import style from './FavoriteCard.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {removeFavorite} from '../../../redux/favoriteSlice';

const FavoriteCard = ({favorite}) => {
  // dispatch
  const dispatch = useDispatch();

  // handle remove selected Favorite
  const handleRemoveFavorite = () => {
    return dispatch(removeFavorite(favorite, favorite.title));
  };

  //onblur

  return (
    <Pressable
      style={({pressed}) => pressed && style.pressed}
      onLongPress={handleRemoveFavorite}>
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
        <Text style={style.warning}>Press long if you want to delete it</Text>
      </View>
    </Pressable>
  );
};

export default FavoriteCard;
