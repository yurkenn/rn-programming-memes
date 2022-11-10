import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import useApi from '../../hooks/useApi';
import Config from 'react-native-config';
import HomeCard from '../../components/Cards/HomeCard';
import style from './Home.style';
import axios from 'axios';
const Home = () => {
  const [data, loading, error] = useApi(Config.API_URL);

  const renderHomeCard = ({item}) => {
    return <HomeCard memes={item} />;
  };
  return <FlatList data={data} renderItem={renderHomeCard} />;
};

export default Home;
