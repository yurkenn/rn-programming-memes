import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import FavoriteCard from '../../components/Cards/FavoriteCard';

const Favorites = () => {
  const favoriteMemes = useSelector(state => state.favorite.value);

  const renderFavorite = ({item}) => {
    return <FavoriteCard favorite={item} />;
  };

  return <FlatList data={favoriteMemes} renderItem={renderFavorite} />;
};

export default Favorites;
