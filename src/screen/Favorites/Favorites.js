import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import FavoriteCard from '../../components/Cards/FavoriteCard';
import Empty from '../../components/Lottie/Empty/Empty';
import style from './Favorites.style';
const Favorites = () => {
  const favoriteMemes = useSelector(state => state.favorite.value);

  const renderFavorite = ({item}) => {
    return (
      <View style={style.container}>
        <FavoriteCard favorite={item} />
      </View>
    );
  };

  let keyExtractor = (item, index) => index.toString();

  // no favorites you need to add favorites
  if (favoriteMemes.length === 0) {
    return (
      <View>
        <Empty style={style.Empty} />
        <Text style={style.text}>No favorites yet</Text>
      </View>
    );
  }
  console.log('favoriteMemes', favoriteMemes);
  return (
    <FlatList
      data={favoriteMemes}
      renderItem={renderFavorite}
      keyExtractor={keyExtractor}
    />
  );
};

export default Favorites;
